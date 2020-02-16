<template>
  <div class="nav-bar">
      <div class="left"><slot name="left"/></div>
      <div class="center"><slot name="center"/></div>
      <div class="right"><slot name="right"/></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav-bar{
    display: flex;
    line-height: 44px;
    height: 44px;
}
.left,.right{
    width: 60px;
}
.center{
    flex: 1;
    text-align: center;
    color: #fff;
    font-size: 18px;
}
</style>