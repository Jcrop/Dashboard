import axios from '@/assets/libs/axios';
export default {
  namespaced: true,
  state: {
    users: [],
  },
  mutations: {
    SET_USERS:(state, value) => {
      value.sort((a, b) => a['id'] < b['id'] ? 1 : a['id'] > b['id'] ? -1 : 0);
      state.users = value;
    },
  },
  actions:{
    getUsers(ctx){
      return new Promise(resolve => {
        axios({
          url: 'https://jsonplaceholder.typicode.com/users',
          method: 'get'
        }).then(res => {

          ctx.commit('SET_USERS', res.data);
          resolve(true);
        }).catch(err => {
          
          console.error(err);
          resolve(false);
        })
      })
    }
  }
}