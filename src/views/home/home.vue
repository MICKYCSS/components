<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">测试一下</div>
    </nav-bar>
      <h1>首页</h1>
      <tab-control class="tab-control" :titles="titles"></tab-control>
      <li v-for="(item,index) in list" :key="index">{{item}}</li>
  </div>
</template>

<script>
import NavBar from '@/components/navbar/NavBar'
import TabControl from '@/components/tabcontrol/TabControl'
import {getHomeData} from '@/network/home'
export default {
  components:{NavBar,TabControl},
  data(){
    return{
      titles:["流行","新款","精选"],
      list:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18]
    }
  },
  created(){
    getHomeData().then(res=>{
      console.log(res);
      
    })
  }
}
</script>

<style>
#home{
  padding: 44px 0;
}
.home-nav{
    background: lightcoral;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
}
.tab-control{
  position: sticky;
  top: 44px;

}
</style>