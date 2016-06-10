import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import VueGesture from 'vue-gesture'
import { sync } from 'vuex-router-sync'
import store from './vuex/store'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueGesture)

global.currentUserId = '575302fc5dacbac32540268d';

Vue.http.options.root = 'http://172.28.59.96:1337/api/v1';
//Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';
Vue.http.options.xhr = { withCredentials: true }
Vue.http.options.emulateHTTP = true;

const router = new VueRouter({
  abstract: true,
  hashbang: false,
  history: true,
  root:  '/',
})

sync(store, router)

export default router
