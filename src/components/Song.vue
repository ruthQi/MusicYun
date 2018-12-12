<template>
   <div>Song:{{songId}}</div>
</template>
<script>
export default {
   name: 'Song',
   data(){
      return {
         songId: 0
      };
   },
   created(){
      this.songId = this.$route.query.id;
   }
};
</script>
<style lang="less" scoped>
</style>
