import Vue from 'vue'
import Vuex from 'vuex'
import Users from '@/store/modules/Users'
import Todos from '@/store/modules/Todos'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Users,
    Todos
  }
})
