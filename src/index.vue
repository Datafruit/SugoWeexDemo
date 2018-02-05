<template>
  <div class="wrapper">
    <image :src="logo" class="logo"></image>
    <text class="Component" @click="listClicked">list</text>
    <text class="Component" @click="scrollerClicked">scroller</text>
  </div>
</template>

<script>

  var navigator = weex.requireModule('navigator')
  var modal = weex.requireModule('modal')

  export default {
    data () {
      return {
        logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',
      }
    },
    methods:{
      listClicked (event) {
        var url = this.$getConfig().bundleUrl;
        url = url.split('/').slice(0,-1).join('/') + '/list.js';
        navigator.push({
          url: url,
          animated: "true"
        }, event => {
          // modal.toast({ message: 'callback: ' + event })
          console.log(event)
        })
      },
      scrollerClicked (event) {
        var url = this.$getConfig().bundleUrl;
        url = url.split('/').slice(0,-1).join('/') + '/scroller.js';
        navigator.push({
          url: url,
          animated: "true"
        }, event => {
          // modal.toast({ message: 'callback: ' + event })
          console.log(event)
        })
      },
      recyclelistClicked (event) {
        var url = this.$getConfig().bundleUrl;
        url = url.split('/').slice(0,-1).join('/') + '/recycle_list.js';
        navigator.push({
          url: url,
          animated: "true"
        }, event => {
          // modal.toast({ message: 'callback: ' + event })
          console.log(event)
        })
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 424px;
    height: 200px;
  }
  .Component {
    margin-top: 70px;
    font-size: 50px;
    color: #41B883;
  }
</style>
