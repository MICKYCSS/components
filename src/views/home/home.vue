<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="center">测试一下</div>
    </nav-bar>
      <h1>首页</h1>
  </div>
</template>

<script>
import NavBar from '@/components/navbar/NavBar'
import {getHomeData} from '@/network/home'
export default {
  components:{NavBar},
  created(){
    getHomeData().then(res=>{
      console.log(res);
      
    })
  }
}
</script>

<style>
.home-nav{
    background: lightcoral;
}
</style>