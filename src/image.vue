<template>
  <div class="wrapper">
    <image style="width:500px;height:500px" src="https://vuejs.org/images/logo.png" @click="clickImage"/>
  </div>
</template>

<style scoped>
.wrapper {
  justify-content: center;
  align-items: center;
}
</style>

<script>
var modal = weex.requireModule("modal");

export default {
  methods: {
    clickImage() {
      modal.toast({
        message: "click image",
        duration: 1
      });
    }
  }
};
</script>
