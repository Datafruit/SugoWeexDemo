<template>
  <div>
    <div class="example">
      <text class="label">normal</text>
      <switch></switch>
    </div>
    <div class="example">
      <text class="label">onclick</text>
      <switch @click="onclick"></switch>
    </div>
    <div class="example">
      <text class="label">disabled</text>
      <switch disabled="true" checked="true"></switch>
      <switch disabled="true"></switch>
    </div>
    <div class="example">
      <text class="label">onchange</text>
      <switch @change="onchange"></switch>
      <text class="info">{{checked}}</text>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false
    };
  },
  methods: {
    onclick() {
      console.log(`switch onclick`);
    },
    onchange(event) {
      console.log(`switch onchange, value: ${event.value}`);
      this.checked = event.value;
    }
  }
};
</script>

<style scoped>
.example {
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 60px;
}
.label {
  font-size: 40px;
  line-height: 60px;
  width: 350px;
  color: #666;
  text-align: right;
  margin-right: 20px;
}
.info {
  font-size: 30px;
  line-height: 60px;
  color: #bbb;
  margin-left: 10px;
}
</style>