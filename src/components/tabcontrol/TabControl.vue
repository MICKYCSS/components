<template>
  <div class="tab-control">
      <div :key="index" v-for="(item,index) in titles" 
      class="tab-control-item"
      :class="{'active':index===currentIndex}" @click="itemClick(index)">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        titles:{
            type:Array,
            default:()=>[]
        }
    },
    data(){
        return{
            currentIndex:0
        }
    },
    methods:{
        itemClick(index){
            this.currentIndex = index
        }
    }

}
</script>

<style scoped>
.tab-control{
    display:flex;
     text-align: center;
    height: 44px;
    line-height: 44px;
    background: #fff;
}
.tab-control-item{
    flex: 1; 
}
.tab-control-item span{
    padding: 5px;
}
.active span{
    color: lightcoral;
    border-bottom: 3px solid lightcoral;
}
</style>