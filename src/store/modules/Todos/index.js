import axios from '@/assets/libs/axios';
export default {
  namespaced: true,
  state: {
    todos: [],
  },
  mutations: {
    SET_TODOS:(state, value) => {
      value.sort((a, b) => a['id'] < b['id'] ? 1 : a['id'] > b['id'] ? -1 : 0);
      state.todos = value;
    },
    ADD_TODO:(state, value) => {
      state.todos.unshift(value);
    },
    UPDATE_TODO:(state, value) => {
      for(let item of state.todos)
        if(item.id == value.id)
          Object.assign(item, value);
    },
    DELETE_TODO:(state, value) => {
      let index = state.todos.findIndex(item => item.id == value.id);
      if(index > -1)
        state.todos.splice(index, 1);
    }
  },
  actions:{
    getTodos(ctx, {id}){
      return new Promise(resolve => {
        axios({
          url: `https://jsonplaceholder.typicode.com/todos?userId=${id}`,
          method: 'get'
        }).then(res => {

          ctx.commit('SET_TODOS', res.data);
          resolve(true);
        }).catch(err => {
          
          console.error(err);
          resolve(false);
        })
      })
    }
  }
}