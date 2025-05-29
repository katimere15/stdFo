<script setup>

// API 요청을 위한 유틸리티 함수 임포트
import {
  getData, postData
} from '../utils/api.js'
import { ref } from 'vue'
import { defineProps } from 'vue'
import { useLoginStore } from '../stores/login.js'

defineProps({
  msg: {
    type: String,
    required: true,
  },
})

const message = ref('비접속');
const id = ref('');
const pw = ref('');



const handleClick = async () => {

  const payload = {
    id: id.value,
    pw: pw.value
  }
  console.log(payload);

  // 요청 예시
  message.value = await postData('/api/test', payload);  

}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <input
      type="text"
      placeholder="ID"
      v-model="id"
    />
    <input
      type="text"
      placeholder="Password"
      v-model="pw"
    />
    <button @click=handleClick()>
      LOGIN
    </button>
  </div>
  <div>
    <h3>{{ message }}</h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
