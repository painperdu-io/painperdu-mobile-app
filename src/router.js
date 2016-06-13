import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import store from './vuex/store'

Vue.use(VueResource)
Vue.use(VueRouter)

global.currentUserId = '575c371b489e38aeb9cd4d24'; // PIERRE
//global.currentUserId = '575c371b489e38aeb9cd4d26'; // MELANIE

Vue.http.options.root = 'http://192.168.175.2:1337/api/v1';
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
