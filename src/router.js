import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import VueTouch from 'vue-touch'
import { sync } from 'vuex-router-sync'
import store from './vuex/store'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueTouch)

//global.currentUserId = '575c371b489e38aeb9cd4d24'; // PIERRE
global.currentUserId = '575c371b489e38aeb9cd4d26'; // MELANIE
//global.currentUserId = '575c371b489e38aeb9cd4d2c'; // AURELIEN

//Local
//global.currentUserId = '575302fc5dacbac32540268e'; // SOPHIE
//global.currentUserId = '575302fc5dacbac32540268d'; // TIBO

Vue.http.options.root = 'http://127.0.0.1:1337/api/v1';
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
