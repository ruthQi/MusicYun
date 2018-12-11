<template>
   <ul class="tab-container">
      <!-- <router-link class="tab-item" v-for="(item, index) in tabArr" :key="index" :to="item.link">
         <div class="tab-text">
            <span class="">{{item.title}}</span>
         </div>
      </router-link> -->
      <li :class="['tab-item', curIndex === index ? 'router-link-active' : '']" v-for="(item, index) in tabArr" :key="index" @click="changeTab(index, item)">
         <div class="tab-text">
            <span class="">{{item.title}}</span>
         </div>
      </li>
   </ul>
</template>
<script>
export default {
   name: 'TopHeader',
   data(){
      return {
         curIndex: 0,
         tabArr: [
            {title: '推荐音乐', link: 'recommend'},
            {title: '热歌榜', link: 'hot'},
            {title: '搜索', link: 'search'}
         ]
      };
   },
   created(){
      //不使用router-link时，访问/hot使热门标签展示active状态
      //使用router-link时，自动标签会变为active状态
      let path = this.$route.path;
      this.tabArr.forEach((item, index) => {
         if (path.replace('/', '') === item.link){
            this.curIndex = index;
         }
      });
   },
   methods: {
      changeTab(index, item){
         this.curIndex = index;
         this.$router.push({path: item.link});
      }
   }
};
</script>
<style lang="less" scoped>
   .tab-container{
      display: flex;
      justify-content: space-around;
      height: 40px;
      border-bottom: 1px solid #eee;
      .tab-item{
         width: 33.3%;
         text-align: center;
         line-height: 40px;
         flex: 1;
      }
      .tab-text{
         position: relative;
         font-size: 15px;
         color: #333;
      }
      .router-link-active{
         .tab-text{
            color: #d33a31;
            display: inline-block;
            padding: 0px 5px;
            &::after{
               content: '';
               position: absolute;
               bottom: -1px;
               width: 100%;
               height: 2px;
               background-color: #d33a31;
               left: 0px;
            }
         }
      }
   }
</style>
