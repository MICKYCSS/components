<template>
  <div>
     <div :class="[isActive?activeClass:'',errorClass]">{{value}}</div> 
  </div>
</template>

<script>
export default {
    props:{
        value:String
    },
    data(){
        return{
            isActive:true,
            activeClass:'active',
            errorClass:'error'
        }
    },
    methods:{
       
    }
}
</script>

<style>
.active{
    color: red;
}
.error{
    background: black;
}
</style>