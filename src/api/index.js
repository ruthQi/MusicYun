import axios from 'axios';

export default {
   getPersonaled: () => {
      return post('http://localhost:3004/personalized');
   },
   getNewSong: () => {
      return post('http://localhost:3004/personalized/newsong');
   },
   getPlayDetail: (params) => {
      return post('http://localhost:3004/playlist/detail', params);
   }
};

function get(url, params){
   return axios({
      url,
      method: 'GET',
      params
   });
}

function post(url, params){
   return axios({
      url,
      method: 'POST',
      params
   });
}
