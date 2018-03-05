<template>
  <div>
    <slider class="slider" interval="3000" auto-play="false">
      <div class="frame" v-for="img in imageList" v-bind:key="img.src" @click="clickDiv">
        <image class="image" resize="cover" :src="img.src" @click="clickImage"/>
      </div>
      <indicator class="indicator"></indicator>
    </slider>
  </div>
</template>

<style scoped>
.image {
  width: 400px;
  height: 400px;
}
.slider {
  margin-top: 24px;
  margin-left: 24px;
  width: 700px;
  height: 700px;
  border-width: 2px;
  border-style: solid;
  border-color: #41b883;
}
.frame {
  justify-content: center;
  align-items: center;
  width: 700px;
  height: 700px;
  position: relative;
}
.indicator {
}
</style>

<script>
export default {
  data() {
    return {
      imageList: [
        {
          src:
            "https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg"
        },
        {
          src:
            "https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg"
        },
        {
          src:
            "https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg"
        }
      ]
    };
  },
  methods: {
    clickDiv() {},
    clickImage() {}
  }
};
</script>