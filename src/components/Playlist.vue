<template>
   <div>playList:{{playId}}</div>
</template>
<script>
import axios from 'axios';
import api from '../api/index';
export default {
   name: 'Playlist',
   data(){
      return {
         playId: 0
      };
   },
   created(){
      console.log(this.$route);
      this.playId = this.$route.query.id;
      api.getPlayDetail({
         id: this.playId
      }).then((res) => {
         console.log('============================');
         console.log(res);
      });
   }
};
</script>
<style lang="less" scoped>
</style>
