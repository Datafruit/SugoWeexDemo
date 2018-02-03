<template>
  <div class="wrapper">
    <image :src="logo" class="logo"></image>
    <text class="Component" @click="listClicked">list</text>
    <text class="Component" @click="scrollerClicked">scroller</text>
    <text class="Component" @click="recyclelistClicked">recycle_list</text>
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
        navigator.push({
          url: 'http://dotwe.org/raw/dist/ad2b60837c38d4f0b23670a0d5a2ace5.bundle.wx',
          animated: "true"
        }, event => {
          modal.toast({ message: 'callback: ' + event })
        })
      },
      scrollerClicked (event) {
        navigator.push({
          url: 'http://dotwe.org/raw/dist/ad2b60837c38d4f0b23670a0d5a2ace5.bundle.wx',
          animated: "true"
        }, event => {
          modal.toast({ message: 'callback: ' + event })
        })
      },
      recyclelistClicked (event) {
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
