<template>
  <div>
    <v-app-bar app color="primary" dark>
      <v-spacer></v-spacer>
      <v-btn color="error" @click="deleteLocalStorage">削除する</v-btn>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'Hrader',
  methods:{
    deleteLocalStorage(){
      this.$emit('delete-local-storage')
    }
  }
};
</script>

<style></style>
