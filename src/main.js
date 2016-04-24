import Vue from 'vue'
import router from './router'
import App from './App'

import Splash from './components/splash/PageSplash'
import Home from './components/home/PageHome'

Vue.config.debug = true
Vue.config.devtools = true

router.map({
  '/': {
    name: 'splash',
    component: Splash,
  },
  '/home': {
    name: 'home',
    component: Home,
  },
})

router.start(App, 'painperdu-app')
