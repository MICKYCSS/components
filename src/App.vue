<template>
  <div id="app">
   
    <router-view/>
    <min-tab-bar/>
  </div>
</template>

<script>
import MinTabBar from './components/MinTabBar'
export default {
  name: 'App',
  components:{MinTabBar}
}
</script>

<style>
@import url("./assets/css/base.css");

</style>
