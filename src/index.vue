<template>
  <div class="wrapper">
    <scroller class="scroller">
    <image :src="logo" class="logo"/>
    <div class="button" @click="scrollerClicked"><text  class="text">综合</text></div>
    <div class="button" @click="webClicked"><text  class="text">web</text></div>
    <div class="button" @click="listClicked"><text  class="text">list</text></div>
    <div class="button" @click="textClicked"><text  class="text">text</text></div>
    <div class="button" @click="imageClicked"><text  class="text">image</text></div>
    <div class="button" @click="sliderClicked"><text  class="text">slider</text></div>
    <div class="button" @click="switchClicked"><text  class="text">switch</text></div>
    <div class="button" @click="textAreaClicked"><text  class="text">textarea</text></div>
    <div class="button" @click="videoClicked"><text  class="text">video</text></div>
    </scroller>
  </div>
</template>

<script>
var navigator = weex.requireModule("navigator");
var modal = weex.requireModule("modal");

export default {
  data() {
    return {
      logo: "https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png"
    };
  },
  methods: {
    listClicked(event) {
      console.log("click list");
      var url = this.$getConfig().bundleUrl;
      url =
        url
          .split("/")
          .slice(0, -1)
          .join("/") + "/list.js";
      navigator.push(
        {
          url: url,
          animated: "true"
        },
        event => {
          // modal.toast({ message: 'callback: ' + event })
          console.log(event);
        }
      );
    },
    scrollerClicked(event) {
      console.log("click scroller");
      var url = this.$getConfig().bundleUrl;
      url =
        url
          .split("/")
          .slice(0, -1)
          .join("/") + "/scroller.js";
      navigator.push(
        {
          url: url,
          animated: "true"
        },
        event => {
          // modal.toast({ message: 'callback: ' + event })
          console.log(event);
        }
      );
    },
    webClicked(event) {
      console.log("click web");
      var url = this.$getConfig().bundleUrl;
      url =
        url
          .split("/")
          .slice(0, -1)
          .join("/") + "/web.js";
      navigator.push(
        {
          url: url,
          animated: "true"
        },
        event => {
          console.log(event);
        }
      );
    },
    textClicked(event) {
      console.log("click text");
      var url = this.$getConfig().bundleUrl;
      url =
        url
          .split("/")
          .slice(0, -1)
          .join("/") + "/text.js";
      navigator.push(
        {
          url: url,
          animated: "true"
        },
        event => {
          console.log(event);
        }
      );
    },
    imageClicked(event) {
      console.log("click image");
      var url = this.$getConfig().bundleUrl;
      url =
        url
          .split("/")
          .slice(0, -1)
          .join("/") + "/image.js";
      navigator.push(
        {
          url: url,
          animated: "true"
        },
        event => {
          console.log(event);
        }
      );
    },
    sliderClicked(event) {
      console.log("click slider");
      var url = this.$getConfig().bundleUrl;
      url =
        url
          .split("/")
          .slice(0, -1)
          .join("/") + "/slider.js";
      navigator.push(
        {
          url: url,
          animated: "true"
        },
        event => {
          console.log(event);
        }
      );
    },
    switchClicked(event) {
      console.log("click switch");
      var url = this.$getConfig().bundleUrl;
      url =
        url
          .split("/")
          .slice(0, -1)
          .join("/") + "/switch.js";
      navigator.push(
        {
          url: url,
          animated: "true"
        },
        event => {
          console.log(event);
        }
      );
    },
    textAreaClicked(event) {
      console.log("click textArea");
      var url = this.$getConfig().bundleUrl;
      url =
        url
          .split("/")
          .slice(0, -1)
          .join("/") + "/textarea.js";
      navigator.push(
        {
          url: url,
          animated: "true"
        },
        event => {
          console.log(event);
        }
      );
    },
    videoClicked(event) {
      console.log("click video");
      var url = this.$getConfig().bundleUrl;
      url =
        url
          .split("/")
          .slice(0, -1)
          .join("/") + "/video.js";
      navigator.push(
        {
          url: url,
          animated: "true"
        },
        event => {
          console.log(event);
        }
      );
    },
    recyclelistClicked(event) {
      var url = this.$getConfig().bundleUrl;
      url =
        url
          .split("/")
          .slice(0, -1)
          .join("/") + "/recycle_list.js";
      navigator.push(
        {
          url: url,
          animated: "true"
        },
        event => {
          // modal.toast({ message: 'callback: ' + event })
          console.log(event);
        }
      );
    }
  }
};
</script>

<style scoped>
.wrapper {
  align-items: center;
}
.scroller {
  width: 700px;
  height: 700px;
  border-width: 3px;
  border-style: solid;
  border-color: rgb(162, 217, 192);
  margin-left: 25px;
}
.logo {
  width: 424px;
  height: 200px;
  margin-top: 24px;
}
.button {
  width: 450px;
  margin-top: 24px;
  padding-top: 24px;
  padding-bottom: 24px;
  border-width: 2px;
  border-style: solid;
  border-color: #dddddd;
  background-color: #f5f5f5;
}
.text {
  font-size: 48px;
  color: #666666;
  text-align: center;
}
</style>
