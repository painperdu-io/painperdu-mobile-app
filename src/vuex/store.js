import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/logger'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  middlewares: process.env.NODE_ENV !== 'production'
    ? [createLogger()]
    : [],

  modules: {
  },
})

export default store
