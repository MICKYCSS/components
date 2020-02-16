<template>
   <tab-bar>
      <tab-bar-item path="/home" active-color="purple">
        <!-- <img slot="item-icon" src="" alt=""> -->
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
         <div slot="item-text">我的</div>
      </tab-bar-item>
     <tab-bar-item></tab-bar-item>
     <tab-bar-item></tab-bar-item>
    
    </tab-bar>
</template>

<script>
import TabBar from '@/components/tabbar/TabBar'
import TabBarItem from '@/components/tabbar/TabBarItem'
export default {
  components:{TabBar,TabBarItem}
}
</script>

<style>

</style>