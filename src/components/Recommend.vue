<template>
   <div>Recommend</div>
</template>
<script>
import axios from 'axios';
export default {
   name: 'Recommend',
   data(){
      return {

      };
   },
   mounted(){
      console.log(axios);
      axios.post('http://localhost:3004/personalized/newsong').then((res) => {
         console.log(res);
      });
      axios({
         url: 'http://localhost:3004/personalized',
         method: 'POST'
      }).then((res) => {
         console.log(res);
      });
   }
};
</script>
