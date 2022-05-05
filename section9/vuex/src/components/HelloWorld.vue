<template>
  <div>
    <button @click="increment">add1</button>
    <button @click="addCount">add10</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    increment(){
      this.$store.commit('increment')
    },
    addCount(){
      this.$store.commit('addCount', {
        value: 10
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
