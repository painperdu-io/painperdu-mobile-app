import Vue from 'vue'
import router from './router'
import App from './App'

import Splash from './components/splash/PageSplash'
import Home from './components/home/PageHome'
import Market from './components/market/PageMarket'
import Product from './components/market/PageProduct'
import Clan from './components/market/PageClan'
import AddMarket from './components/market/AddMarket'
import Stats from './components/market/clan/PageStats'
import Loc from './components/market/clan/PageLoc'
import Users from './components/user/PageUsers'
import Alliances from './components/share/PageAlliances'
import Cart from './components/cart/PageCart'
import Products from './components/cart/PageProducts'
import AddCart from './components/cart/PageAddCart'

Vue.config.debug = true
Vue.config.devtools = true

router.map({
  '/': {
    name: 'splash',
    component: Splash,
  },
  '/market': {
    name: 'market',
    component: Market
    },
  '/product': {
    name: 'product',
    component: Product,
  },
  '/clan': {
    name: 'clan',
    component: Clan,
    subRoutes: {
      '/users': {
        name: 'users',
        component: Users,
      },
      '/loc': {
        name: 'loc',
        component: Loc,
      },
      '/stats': {
        name: 'stats',
        component: Stats,
      }
    }
  },
  '/addMarket': {
    name: 'addMarket',
    component: AddMarket,
  },
  '/alliances': {
    name: 'alliances',
    component: Alliances,
  },
  '/cart': {
    name: 'cart',
    component: Cart,
    subRoutes: {
      '/users': {
        name: 'users',
        component: Users,
      },
      '/products': {
        name: 'products',
        component: Products,
      },
      '/addCart': {
        name: 'addCart',
        component: AddCart,
      }
    }
  },
  '/users': {
    name: 'users',
    component: Users,
  }
})

router.start(App, 'painperdu-app')
