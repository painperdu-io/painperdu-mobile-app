import Vue from 'vue'
import router from './router'
import App from './App'

import Splash from './components/splash/PageSplash'
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
    page:{
      bgClass: 'background1',
      title: 'Pain Perdu',
      header: {},
    },
  },
  '/market': {
    name: 'market',
    component: Market,
    page: {
      title: 'Pain Perdu',
      bgClass: 'background1',
      header: {
        'profile': true,
        'basket': true,
        'add': true,
      },
    },
  },
  '/product': {
    name: 'product',
    component: Product,
    page: {
      title: 'Fiche denrée',
      bgClass: 'background3',
      header: {
        'previous': true,
        'flag': true,
      },
    },
  },
  '/clan': {
    name: 'clan',
    component: Clan,
    page: {
      title: 'Mon clan',
      bgClass: 'background2',
      header: {
        'previous': true,
      },
    },
    subRoutes: {
      '/users': {
        name: 'users',
        component: Users,
        page: {
          title: 'Mes alliés',
          bgClass: 'background1',
          header: {
            'previous': true,
          },
        },
      },
      '/loc': {
        name: 'loc',
        component: Loc,
        page: {
          title: 'Localisation',
          bgClass: 'background2',
          header: {
            'previous': true,
          },
        },
      },
      '/stats': {
        name: 'stats',
        component: Stats,
        page: {
          title: 'Statistiques',
          bgClass: 'background3',
          header: {
            'previous': true,
          },
        },
      }
    }
  },
  '/addMarket': {
    name: 'addMarket',
    component: AddMarket,
    page: {
      title: 'Ajouter une place du marché',
      bgClass: 'background2',
      header: {
        'previous': true,
      },
    },
  },
  '/alliances': {
    name: 'alliances',
    component: Alliances,
    page: {
      title: 'Mes alliances',
      bgClass: 'background2',
      header: {
        'profile': true,
        'basket': true,
        'add': true,
      },
    },
  },
  '/cart': {
    name: 'cart',
    component: Cart,
    page: {
      title: 'Mon garde-manger',
      bgClass: 'background3',
      header: {
        'profile': true,
        'basket': true,
        'add': true,
      },
    },
    subRoutes: {
      '/users': {
        name: 'users',
        component: Users,
        page: {
          title: 'Mes compères',
          bgClass: 'background1',
          header: {
            'profile': true,
            'basket': true,
            'add': true,
          },
        },
      },
      '/products': {
        name: 'products',
        component: Products,
        page: {
          title: 'Denrées proposées',
          bgClass: 'background2',
          header: {
            'profile': true,
            'basket': true,
            'add': true,
          },
        },
      },
      '/addCart': {
        name: 'addCart',
        component: AddCart,
        page: {
          title: 'Ajouter un garde-manger',
          bgClass: 'background2',
          header: {
            'profile': true,
            'basket': true,
            'add': true,
          },
        },
      }
    }
  },
})

router.start(App, 'painperdu-app')
