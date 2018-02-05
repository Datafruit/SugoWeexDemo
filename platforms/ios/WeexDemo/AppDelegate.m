/**
 * Created by Weex.
 * Copyright (c) 2016, Alibaba, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache Licence 2.0.
 * For the full copyright and license information,please view the LICENSE file in the root directory of this source tree.
 */

#import "AppDelegate.h"
#import "DemoDefine.h"
#import <WeexSDK/WeexSDK.h>
#import <AVFoundation/AVFoundation.h>
#import "WeexSDKManager.h"
#import "Sugo.h"
#import "Sugo+Weex.h"

@interface AppDelegate ()
@end

@implementation AppDelegate

#pragma mark
#pragma mark application

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
    self.window.backgroundColor = [UIColor whiteColor];
    
    [self initSugo];
    
    [WeexSDKManager setup];
    
    [self.window makeKeyAndVisible];
    
    // Override point for customization after application launch.
    [self startSplashScreen];
    
    return YES;
}

- (BOOL)application:(UIApplication *)application handleOpenURL:(NSURL *)url
{
    return [[Sugo sharedInstance] handleURL:url];
}

#pragma Sugo
- (void)initSugo {
    NSString *projectID = @"com_H1bIzqK2SZ_project_r1HAty5zM"; // 项目ID
    NSString *appToken = @"1a9f8bed75f2df2489dd272e03a92596"; // 应用Token
    SugoBindingsURL = @"http://58.63.110.97:2270"; // 设置获取绑定事件配置的URL，端口默认为8000
    SugoCollectionURL = @"http://58.63.110.97:2271"; // 设置传输绑定事件的网管URL，端口默认为80
    SugoCodelessURL = @"ws://58.63.110.97:2227"; // 设置连接可视化埋点的URL，端口默认为8887
    [Sugo sharedInstanceWithID:projectID token:appToken launchOptions:nil];
    [[Sugo sharedInstance] setEnableLogging:YES]; // 如果需要查看SDK的Log，请设置为true
    [[Sugo sharedInstance] setFlushInterval:5]; // 被绑定的事件数据往服务端上传的事件间隔，单位是秒，如若不设置，默认时间是60秒
    [[Sugo sharedInstance] setCacheInterval:60]; // 从服务端拉取绑定事件配置的时间间隔，单位是秒，如若不设置，默认时间是1小时
    [[Sugo sharedInstance] registerModule];        // 需要支持Weex可视化埋点时调用
}

#pragma mark 
#pragma mark animation when startup

- (void)startSplashScreen
{
    UIView* splashView = [[UIView alloc] initWithFrame:[[UIScreen mainScreen] bounds]];
    splashView.backgroundColor = WEEX_COLOR;
    
    UIImageView *iconImageView = [UIImageView new];
    UIImage *icon = [UIImage imageWithContentsOfFile:[[NSBundle mainBundle] pathForResource:@"weex-icon" ofType:@"png"]];
    if ([icon respondsToSelector:@selector(imageWithRenderingMode:)]) {
        iconImageView.image = [icon imageWithRenderingMode:UIImageRenderingModeAlwaysTemplate];
        iconImageView.tintColor = [UIColor whiteColor];
    } else {
        iconImageView.image = icon;
    }
    iconImageView.frame = CGRectMake(0, 0, 320, 320);
    iconImageView.contentMode = UIViewContentModeScaleAspectFit;
    iconImageView.center = splashView.center;
    [splashView addSubview:iconImageView];
    
    [self.window addSubview:splashView];
    
    float animationDuration = 1.4;
    CGFloat shrinkDuration = animationDuration * 0.3;
    CGFloat growDuration = animationDuration * 0.7;
    
    if ([[[UIDevice currentDevice] systemVersion] floatValue] >= 7.0) {
        [UIView animateWithDuration:shrinkDuration delay:1.0 usingSpringWithDamping:0.7f initialSpringVelocity:10 options:UIViewAnimationOptionCurveEaseInOut animations:^{
            CGAffineTransform scaleTransform = CGAffineTransformMakeScale(0.75, 0.75);
            iconImageView.transform = scaleTransform;
        } completion:^(BOOL finished) {
            [UIView animateWithDuration:growDuration animations:^{
                CGAffineTransform scaleTransform = CGAffineTransformMakeScale(20, 20);
                iconImageView.transform = scaleTransform;
                splashView.alpha = 0;
            } completion:^(BOOL finished) {
                [splashView removeFromSuperview];
            }];
        }];
    } else {
        [UIView animateWithDuration:shrinkDuration delay:1.0 options:0 animations:^{
            CGAffineTransform scaleTransform = CGAffineTransformMakeScale(0.75, 0.75);
            iconImageView.transform = scaleTransform;
        } completion:^(BOOL finished) {
            [UIView animateWithDuration:growDuration animations:^{
                CGAffineTransform scaleTransform = CGAffineTransformMakeScale(20, 20);
                iconImageView.transform = scaleTransform;
                splashView.alpha = 0;
            } completion:^(BOOL finished) {
                [splashView removeFromSuperview];
            }];
        }];
    }
}

@end
