import Vue from 'vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import store from './vuex/store'

Vue.use(VueRouter)

const router = new VueRouter({
  abstract: true,
  hashbang: false,
  history: true,
})

sync(store, router)

export default router
