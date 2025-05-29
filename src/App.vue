<script setup>
// Vue.js 3의 Composition API를 사용하기 위한 setup 스크립트
import { ref } from 'vue'
// 컴포넌트 임포트
import HelloWorld from './components/HelloWorld.vue'



</script>

<template>

  <main>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="Please Login!!" />
    </div>
  </main>
</template>

<style scoped>


.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  .logo {
    margin: 0 2rem 0 0;
  }

  main .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
