<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">测试一下</div>
    </nav-bar>
    <Test :ref="'test'" v-model="value"/>
    <ul>
      <li :key="item" v-for="item in list">{{item}}</li>
    </ul>
    <button @click="onClick">change list</button>
    <input type="text" :value="value" @input="onInput">{{value}}
      <!-- <h1>首页</h1>
      <tab-control class="tab-control" :titles="titles"></tab-control>
      <li v-for="(item,index) in list" :key="index">{{item}}</li> -->
  </div>
</template>

<script>
import NavBar from '@/components/navbar/NavBar'
import Test from '@/components/Test'
import TabControl from '@/components/tabcontrol/TabControl'
import {getHomeData} from '@/network/home'
export default {
  components:{NavBar,TabControl,Test},
  data(){
    return{
      titles:["流行","新款","精选"],
      list:[1,2,3,4,5],
      value:'value value'
    }
  },
  created(){
    // getHomeData().then(res=>{
    //   console.log(res);
      
    // })
    
  },
  mounted(){
    console.log(this.$refs.test);

  },
  methods:{
    onClick(){
      console.log('onClick');
      
      this.list[0]=100
      this.$set(this.list,0,100)
    },
    onInput(e){
      this.value = e.target.value
    }
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