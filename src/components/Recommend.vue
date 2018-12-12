<template>
   <div class="recommend-container">
      <h2 class="recommend-title">推荐歌单</h2>
      <div class="recommend_songs">
         <div class="songs_item" v-for="recommendItem in recommendList" :key="recommendItem.id" @click="enterRecommend(recommendItem)">
            <div class="songs_item_top">
               <img :src="recommendItem.picUrl"/>
               <span class="songs_play_count">{{(recommendItem.playCount/10000).toFixed(1)}}万</span>
            </div>
            <p class="songs_item_desc">{{recommendItem.name}}</p>
         </div>
      </div>
      <h2 class="recommend-title">最新音乐</h2>
      <div class="new_songs_list">
         <router-link class="new_songs_item" v-for="songItem in newsongList" :key="songItem.id" :to="{path:'/song', query: {id: songItem.id}}">
            <div class="song_info">
               <p class="song_name">{{songItem.name}}<span class="song_alias" v-if="songItem.song.alias.length > 0">({{songItem.song.alias[0]}})</span></p>
               <p class="song_album" v-if="songItem.song.artists.length > 0 && songItem.song.album"><span class="song_icon_common song_logo"></span>{{songItem.song.artists[0].name}}-{{songItem.song.album.name}}</p>
            </div>
            <div class="song_icon_common song_play_btn"></div>
         </router-link>
      </div>
   </div>
</template>
<script>
import axios from 'axios';
import api from '../api/index';
export default {
   name: 'Recommend',
   data(){
      return {
         recommendList: [],
         newsongList: []
      };
   },
   async created(){
      //推荐歌单
      api.getPersonaled().then((res) => {
         let data = res.data || {};
         if(data.code === 200){
            this.recommendList = data.result.slice(0, 6);//取前6条
         }
      });
      //最新音乐
      //api中返回的为Promise
      let newsong = await api.getNewSong();
      let data = newsong.data || {};
      if(data.code === 200){
         this.newsongList = data.result;
         console.log(this.newsongList);
      }
      // api.getNewSong().then((res) => {
      //    let data = res.data || {};
      //    if(data.code === 200){
      //       this.newsongList = data.result;
      //       console.log(this.newsongList);
      //    }
      // });
   },
   methods: {
      enterRecommend(recommObj){
         //等同于router-link的 :to=""
         this.$router.push({name: 'Playlist', query: {id: recommObj.id}});
      }
   }
};
</script>
<style lang="less" scoped>
.recommend-container{
   padding-top: 20px;
   .recommend-title{
      font-size: 17px;
      position: relative;
      height: 20px;
      line-height: 20px;
      padding-left: 9px;
      font-weight: normal;
      margin-bottom: 14px;
      &:after{
         content: '';
         position: absolute;
         left: 0px;
         top: 50%;
         width: 2px;
         height: 16px;
         background-color: #d33a31;
         transform: translate(0, -50%);
      }
   }
}
.recommend_songs{
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   padding-bottom: 24px;
   .songs_item{
      width: 33%;
      flex-shrink: 0;
      margin-bottom: 16px;
      .songs_item_top{
         position: relative;
         width: 100%;
         padding-bottom: 100%;
         img{
            width: 100%;
            position: absolute;
            top: 0px;
            left: 0px;
         }
         .songs_play_count{
            color: #fff;
            position: absolute;
            right: 5px;
            font-size: 12px;
            top: 2px;
            text-shadow: 1px 0 0 rgba(0,0,0,0.15);
            z-index: 3;
            padding-left: 13px;
            background: url('../assets/play.svg') no-repeat 0 center/11px 10px;

         }
         &:after{
            content: '';
            position: absolute;
            top: 0px;
            left: 0px;
            z-index: 2;
            width: 100%;
            height: 20px;
            background: linear-gradient(180deg, rgba(0,0,0,0.2), transparent)

         }
      }
      .songs_item_desc{
         font-size: 13px;
         padding: 6px 2px 0px 6px;
      }
   }
}
.new_songs_list{
   padding-left: 10px;
   .new_songs_item{
      padding: 6px 0px;
      border-bottom: 1px solid #eee;
      align-items: center;
      display: flex;
      color: #333;
      .song_info{
         flex-grow: 1;
         text-overflow: ellipsis;
         overflow: hidden;
         white-space: nowrap;
         .song_name{
            font-size: 17px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            .song_alias{
               color: #888;
               margin-left: 4px;
            }
         }
         .song_album{
            font-size: 12px;
            color: #888;
            margin-top: 4px;
            .song_logo{
               width: 12px;
               height: 8px;
               display: inline-block;
               margin-right: 4px;
            }
         }
      }
      .song_play_btn{
         width: 22px;
         height: 22px;
         background-position: -24px 0;
         flex-shrink: 0;
         padding: 0px 10px;
      }
   }
   .song_icon_common{
      background: url('../assets/icon.png') no-repeat;
      background-size: 166px 97px;
   }
}
</style>
