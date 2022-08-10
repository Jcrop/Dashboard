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
    ADD_USERS:(state, value) => {
      state.users.unshift(value);
    },
    UPDATE_USERS:(state, value) => {
      for(let item of state.users)
        if(item.id == value.id)
          Object.assign(item, value);
    },
    DELETE_USERS:(state, value) => {
      let index = state.users.findIndex(item => item.id == value.id);
      if(index > -1)
        state.users.splice(index, 1);
    }
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