<template>
  <div class="tab-bar-item" @click="itemClick">
      <slot name="item-icon"/>
      <div :style="activeStyle"> <slot name="item-text"/></div>
  </div>
</template>

<script>
export default {
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'red'
        }
    },
    data(){
        return{
            // isActive:true
        }
    },
    methods:{
        itemClick(){
            this.$router.replace(this.path)
            console.log(this.$route.path);
        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path)!==-1
        },
        activeStyle(){
            return this.isActive ? {color:this.activeColor}:{}
        }
    }
}
</script>

<style>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
/* .active{
    color:red;
} */
</style>