<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import {onMounted, ref} from 'vue'
const count = ref(0);
const isClick = ref(false);
const inputMessage = ref("");
const changeCount = ()=> {
  count.value++;
  isClick.value = true;
  // 测试本地存储localStorage
  localStorage.setItem('count',count.value);
}
const refreshButton = ()=> {
  isClick.value = false;
}
onMounted(()=> {
  console.log('localStorage:',localStorage.getItem('count'))
})
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main class="mainContainer">
    <span class="testSpan">测试文案</span>
    <button @click="changeCount" :class="{isClick: isClick}">{{ count }}</button>
    <button @click="refreshButton">刷新</button>
  </main>
  <div>
    <span>{{ inputMessage  }}</span>
    <input v-model="inputMessage"/>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
.mainContainer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 300px;
  /* background-color: blue; */
  button {
    width: 50px;
    height: 35px;
    transition: all 0.3s ease;
    &:hover {
      background-color: rgb(79, 33, 178);
      transform: scale(1.2);
      cursor: pointer;
    }
  }
  .isClick {
     border: 2px solid red;
  }

}


@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
  .testSpan {
    font-size: 24px;
    color: rebeccapurple;
  }
}
</style>
