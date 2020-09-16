<template lang="html">
  <div>
    <p>{{name}}</p>
    <button type="button" @click="updateName">Update Name</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      name: 'Lch'
    }
  },
  methods: {
    updateName(){
      this.name = 'CH_02_updated'
    }
  }
}
</script>

<style lang="css" scoped>

</style>
