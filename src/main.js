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
    data:{
      bgClass: 'background2',
      title: 'Pain Perdu',
    },
  },
  '/home/:bgClass': {
    name: 'home',
    component: Home,
    data:{
      bgClass: 'background2',
      title: 'Pain Perdu',
    },
  },
  '/market': {
    name: 'market',
    component: Market,
    data:{
      bgClass: 'background1',
      title: 'Pain Perdu',
    },
  },
  '/product': {
    name: 'product',
    component: Product,
    data:{
      bgClass: 'background3',
      title: 'Fiche denrée',
    },
  },
  '/clan': {
    name: 'clan',
    component: Clan,
    data:{
      bgClass: 'background2',
      title: 'Mon clan',
    },
    subRoutes: {
      '/users': {
        name: 'users',
        component: Users,
        data:{
          bgClass: 'background1',
          title: 'Mes alliés',
        },
      },
      '/loc': {
        name: 'loc',
        component: Loc,
        data:{
          bgClass: 'background2',
          title: 'Localisation',
        },
      },
      '/stats': {
        name: 'stats',
        component: Stats,
        data:{
          bgClass: 'background3',
          title: 'Statistiques',
        },
      }
    }
  },
  '/addMarket': {
    name: 'addMarket',
    component: AddMarket,
    data:{
      bgClass: 'background2',
      title: 'Ajouter une place du marché',
    },
  },
  '/alliances': {
    name: 'alliances',
    component: Alliances,
    data:{
      bgClass: 'background2',
      title: 'Mes alliances',
    },
  },
  '/cart': {
    name: 'cart',
    component: Cart,
    data:{
      bgClass: 'background3',
      title: 'Mon garde-manger',
    },
    subRoutes: {
      '/users': {
        name: 'users',
        component: Users,
        data:{
          bgClass: 'background1',
          title: 'Mes compères',
        },
      },
      '/products': {
        name: 'products',
        component: Products,
        data:{
          bgClass: 'background2',
          title: 'Denrées proposées',
        },
      },
      '/addCart': {
        name: 'addCart',
        component: AddCart,
        data:{
          bgClass: 'background2',
          title: 'Ajouter un garde-manger',
        },
      }
    }
  },
})

router.start(App, 'painperdu-app')
