<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
    <button @click="setLogin">ログイン名表示</button>
    {{ $store.state.count}}
    <br>
    <ul>
      <li v-for="user in visibleUsers" :key="user.id">
        {{ user.id }} : {{ user.name }} : {{ user.isVisible}}
      </li>
    </ul>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default{
  computed:{
    visibleUsers(){
      return this.$store.getters.visibleUsers
    }
  },
  methods:{
    ...mapActions('auth', ['setLoginUser']),
    setLogin(){
      this.setLoginUser({name:'大谷'})
    }
  }
}
</script>


<style>

</style>
