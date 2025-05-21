<script setup>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue';
const asiderInfo = ref([{msg: 'test1'},{msg: 'test2'},{msg: 'test3'},{msg: 'test4'},])
const viewInfo = ref([{msg: 'test1'},{msg: 'test2'}])
</script>

<template>
  <div class="page">
  <div class="header">s</div>
  <div class="container">
    <div class="asider" >
      <HelloWorld v-for="item in asiderInfo" :msg="item.msg"/>
    </div>
    <div class="view" >
      <HelloWorld v-for="item in viewInfo" :msg="item.msg"/>
    </div>
  </div>
</div>

</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;

}
.header {
  display: inline-block;
  height: 20%;
  background-color: bisque;
  margin: 10px;
  border-radius:10px;
}
.container {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 80%;

    .asider {
      width: 30%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .view {
      width: 70%;
      display: flex;
    }
  }
</style>
