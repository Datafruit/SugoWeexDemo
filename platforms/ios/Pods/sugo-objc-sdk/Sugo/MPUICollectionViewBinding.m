//
//  MPUICollectionViewBinding.m
//  Sugo
//
//  Created by lzackx on 2017/12/11.
//  Copyright © 2017年 sugo. All rights reserved.
//

#import "MPUICollectionViewBinding.h"
#import <objc/runtime.h>
#import <UIKit/UIKit.h>
#import "MPSwizzler.h"
#import "SugoPrivate.h"
#import "UIViewController+SugoHelpers.h"
#import "MPLogger.h"


@implementation MPUICollectionViewBinding

+ (NSString *)typeName
{
    return @"ui_collection_view";
}

+ (MPEventBinding *)bindingWithJSONObject:(NSDictionary *)object
{
    NSString *path = object[@"path"];
    if (![path isKindOfClass:[NSString class]] || path.length < 1) {
        MPLogDebug(@"must supply a view path to bind by");
        return nil;
    }
    
    NSString *eventID = object[@"event_id"];
    if (![eventID isKindOfClass:[NSString class]] || eventID.length < 1 ) {
        MPLogDebug(@"binding requires an event id");
        return nil;
    }
    
    NSString *eventName = object[@"event_name"];
    if (![eventName isKindOfClass:[NSString class]] || eventName.length < 1 ) {
        MPLogDebug(@"binding requires an event name");
        return nil;
    }
    
    Class delegate = NSClassFromString(object[@"table_delegate"]);
    if (!delegate || ![delegate instancesRespondToSelector:@selector(collectionView:didSelectItemAtIndexPath:)]) {
        MPLogDebug(@"binding requires a delegate class");
        return nil;
    }
    
    NSDictionary *attributesPaths = object[@"attributes"];
    Attributes *attributes = [[Attributes alloc] initWithAttributes:attributesPaths];
    
    return [[MPUICollectionViewBinding alloc] initWithEventID:(NSString *)eventID
                                               eventName:eventName
                                                  onPath:path
                                            withDelegate:delegate
                                              attributes:attributes];
}

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-implementations"
+ (MPEventBinding *)bindngWithJSONObject:(NSDictionary *)object
{
    return [self bindingWithJSONObject:object];
}
#pragma clang diagnostic pop

- (instancetype)initWithEventID:(NSString *)eventID
                      eventName:(NSString *)eventName
                         onPath:(NSString *)path
                     attributes:(Attributes *)attributes
{
    return [self initWithEventID:eventID
                       eventName:eventName
                          onPath:path
                    withDelegate:nil
                      attributes:attributes];
}

- (instancetype)initWithEventID:(NSString *)eventID
                      eventName:(NSString *)eventName
                         onPath:(NSString *)path
                   withDelegate:(Class)delegateClass
                     attributes:(Attributes *)attributes
{
    if (self = [super initWithEventID:eventID
                            eventName:eventName
                               onPath:path
                       withAttributes:attributes]) {
        [self setSwizzleClass:delegateClass];
    }
    return self;
}

- (NSString *)description
{
    return [NSString stringWithFormat:@"UICollectionView Event Tracking: '%@' for '%@'", [self eventName], [self path]];
}


#pragma mark -- Executing Actions

- (void)execute
{
    if (!self.running && self.swizzleClass != nil) {
        void (^block)(id, SEL, id, id) = ^(id view, SEL command, UICollectionView *collectionView, NSIndexPath *indexPath) {
            NSObject *root = [UIApplication sharedApplication].keyWindow;
            // select targets based off path
            if (collectionView && [self.path isLeafSelected:collectionView fromRoot:root]) {
                
                UICollectionViewCell *cell = [collectionView cellForItemAtIndexPath:indexPath];
                NSString *contentInfo = [self contentInfoOfView:cell.contentView];
                
                NSMutableDictionary *p = [[NSMutableDictionary alloc]
                                          initWithDictionary:@{
                                                               @"cell_index": [NSString stringWithFormat: @"%ld", (unsigned long)indexPath.row],
                                                               @"cell_section": [NSString stringWithFormat: @"%ld", (unsigned long)indexPath.section],
                                                               @"cell_content_info": contentInfo
                                                               }];
                if (self.attributes) {
                    [p addEntriesFromDictionary:[self.attributes parse]];
                }
                if ([Sugo sharedInstance].sugoConfiguration[@"DimensionKeys"]
                    && [Sugo sharedInstance].sugoConfiguration[@"DimensionValues"]) {
                    NSDictionary *keys = [NSDictionary dictionaryWithDictionary:[Sugo sharedInstance].sugoConfiguration[@"DimensionKeys"]];
                    NSDictionary *values = [NSDictionary dictionaryWithDictionary:[Sugo sharedInstance].sugoConfiguration[@"DimensionValues"]];
                    p[keys[@"EventType"]] = values[@"click"];
                    p[keys[@"PagePath"]] = NSStringFromClass([[UIViewController sugoCurrentUIViewController] class]);
                    if ([SugoPageInfos global].infos.count > 0) {
                        for (NSDictionary *info in [SugoPageInfos global].infos) {
                            if ([info[@"page"] isEqualToString:p[keys[@"PagePath"]]]) {
                                p[keys[@"PageName"]] = info[@"page_name"];
                                if (info[@"page_category"]) {
                                    p[keys[@"PageCategory"]] = info[@"page_category"];
                                }
                            }
                        }
                    }
                }
                
                [[self class] track:[self eventID]
                          eventName:[self eventName]
                         properties:p];
            }
        };
        
        [MPSwizzler swizzleSelector:@selector(collectionView:didSelectItemAtIndexPath:)
                            onClass:self.swizzleClass
                          withBlock:block
                              named:self.name];
        self.running = true;
    }
}

- (void)stop
{
    if (self.running && self.swizzleClass != nil) {
        [MPSwizzler unswizzleSelector:@selector(collectionView:didSelectItemAtIndexPath:)
                              onClass:self.swizzleClass
                                named:self.name];
        self.running = false;
    }
}

#pragma mark -- Helper Methods

- (NSString *)contentInfoOfView:(UIView *)view
{
    NSMutableString *infos = [NSMutableString string];
    for (UIView *subview in view.subviews) {
        if ([subview isKindOfClass:[UISearchBar class]] && ((UISearchBar *)subview).text) {
            [infos appendString:((UISearchBar *)subview).text];
        } else if ([subview isKindOfClass:[UIButton class]] && ((UIButton *)subview).titleLabel.text) {
            [infos appendString:((UIButton *)subview).titleLabel.text];
        } else if ([subview isKindOfClass:[UIDatePicker class]]) {
            [infos appendString:[NSString stringWithFormat:@"%@", ((UIDatePicker *)subview).date]];
        } else if ([subview isKindOfClass:[UISegmentedControl class]]) {
            [infos appendString:[NSString stringWithFormat:@"%ld", (long)((UISegmentedControl *)subview).selectedSegmentIndex]];
        } else if ([subview isKindOfClass:[UISlider class]]) {
            [infos appendString:[NSString stringWithFormat:@"%f", ((UISlider *)subview).value]];
        } else if ([subview isKindOfClass:[UISwitch class]]) {
            [infos appendString:[NSString stringWithFormat:@"%i", ((UISwitch *)subview).isOn]];
        } else if ([subview isKindOfClass:[UITextField class]]) {
            [infos appendString:[NSString stringWithFormat:@"%@", ((UITextField *)subview).text]];
        } else if ([subview isKindOfClass:[UITextView class]]) {
            [infos appendString:[NSString stringWithFormat:@"%@", ((UITextView *)subview).text]];
        } else if ([subview isKindOfClass:[UILabel class]] && ((UILabel *)subview).text) {
            [infos appendString:[NSString stringWithFormat:@"%@", ((UILabel *)subview).text]];
        }
        [infos appendString:[NSString stringWithFormat:@",%@", [self contentInfoOfView:subview]]];
    }
    return infos;
}

- (UICollectionView *)parentCollectionView:(UIView *)cell {
    // iterate up the view hierarchy to find the table containing this cell/view
    UIView *aView = cell.superview;
    while (aView != nil) {
        if ([aView isKindOfClass:[UICollectionView class]]) {
            return (UICollectionView *)aView;
        }
        aView = aView.superview;
    }
    return nil; // this view is not within a collectionView
}


@end
