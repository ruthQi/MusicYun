<template>
  <div class="hello">
     <TopHeader></TopHeader>
     <div>
        <router-view></router-view>
     </div>
  </div>
</template>

<script>
import TopHeader from '@/components/TopHeader.vue';
export default {
   name: 'Main',
   data(){
      return {
         msg: 'Welcome to Your Vue.js App'
      };
   },
   components: {
      TopHeader
   }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
</style>
