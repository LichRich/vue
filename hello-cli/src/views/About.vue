<template>
  <div>
    <h1>This is Home page</h1>
    <p>{{greet}}</p>
    <Lch></Lch>
  </div>
</template>

<script>
// @의 의미 = src folder
import Lch from '@/components/Lch.vue';

export default {
  components: {
    // Lch.vue를 component로 불러온다
    Lch
  },
  data() {
    return {
      greet: 'Hello World!!!'
    }
  }
}
</script>

<!-- scoped를 넣어야 해당 component에만 적용이 된다!! -->
<style lang="css" scoped>
h1 {
  color: white;
  background-color: black;
}
</style>
