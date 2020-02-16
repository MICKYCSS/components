<template>
   <div class="tab-bar">
       <slot/>
      <!-- <div class="tab-bar-item">首页</div>
      <div class="tab-bar-item">分类</div>
      <div class="tab-bar-item">购物车</div>
      <div class="tab-bar-item">我的</div> -->
    </div>
</template>

<script>
export default {

}
</script>

<style>
.tab-bar{
  display: flex;
  align-items: center;
  background: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 1px rgba(100,100,100,0.1);
}
</style>