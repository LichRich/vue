<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Lch></Lch>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
// Lch component 여러군데 사용
import HelloWorld from '@/components/HelloWorld.vue'
import Lch from '@/components/Lch.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Lch
  }
}
</script>
