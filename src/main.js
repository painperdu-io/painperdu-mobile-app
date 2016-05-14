import Vue from 'vue'
import router from './router'
import App from './App'

// inclusion: application
import Splash from './components/splash/Splash'

// inclusion: mon garde-manger
import FoodKeeper from './components/foodkeeper/FoodKeeper'
import AddFoodKeeper from './components/foodkeeper/AddFoodKeeper'
import ProductsFoodkeeper from './components/foodkeeper/ProductsFoodkeeper'
import MembersFoodkeeper from './components/foodkeeper/MembersFoodkeeper'

// inclusion: la place du marché
import Market from './components/market/Market'
import AddMarket from './components/market/AddMarket'
import DetailsMarket from './components/market/DetailsMarket'
import DetailsMarketStats from './components/market/DetailsMarketStats'
import DetailsMarketLocation from './components/market/DetailsMarketLocation'
import DetailsMarketMembers from './components/market/DetailsMarketMembers'
import ProductMarket from './components/market/ProductMarket'

// inclusion: mes alliances
import Alliances from './components/alliances/Alliances'


// configuration de vuejs
Vue.config.debug = true
Vue.config.devtools = true

// définition des routes de l'application
router.map({

  // route par défaut
  '/': {
    name: 'Splash',
    component: Splash,
    page:{
      bgClass: 'background1',
      title: 'Pain Perdu',
      header: {
        enable: false,
      },
      footer: {
        enable: false,
      },
    },
  },

  // mon garde-manger
  '/foodkeeper': {
    name: 'FoodKeeper',
    component: FoodKeeper,
    page: {
      title: 'Mon garde-manger',
      bgClass: 'background3',
      header: {
        enable: true,
        profile: true,
        basket: true,
        add: true,
      },
      footer: {
        enable: true,
      },
    },
  },
  '/foodkeeper/add': {
    name: 'AddFoodKeeper',
    component: AddFoodKeeper,
    page: {
      title: 'Ajouter un garde-manger',
      bgClass: 'background2',
      header: {
        enable: true,
        profile: true,
        basket: true,
        add: true,
      },
      footer: {
        enable: true,
      },
    },
  },
  '/foodkeeper/products': {
    name: 'ProductsFoodkeeper',
    component: ProductsFoodkeeper,
    page: {
      title: 'Denrées proposées',
      bgClass: 'background2',
      header: {
        enable: true,
        profile: true,
        basket: true,
        add: true,
      },
      footer: {
        enable: true,
      },
    },
  },
  '/foodkeeper/members': {
    name: 'MembersFoodkeeper',
    component: MembersFoodkeeper,
    page: {
      title: 'Mes compères',
      bgClass: 'background1',
      header: {
        enable: true,
        profile: true,
        basket: true,
        add: true,
      },
      footer: {
        enable: true,
      },
    },
  },

  // place du marché
  '/market': {
    name: 'Market',
    component: Market,
    page: {
      title: 'Pain Perdu',
      bgClass: 'background1',
      header: {
        enable: true,
        profile: true,
        basket: true,
        add: true,
      },
      footer: {
        enable: true,
      },
    },
  },
  '/market/add': {
    name: 'AddMarket',
    component: AddMarket,
    page: {
      title: 'Ajouter une place du marché',
      bgClass: 'background2',
      header: {
        enable: true,
        previous: true,
      },
      footer: {
        enable: true,
      },
    },
  },
  '/market/product': {
    name: 'ProductMarket',
    component: ProductMarket,
    page: {
      title: 'Fiche denrée',
      bgClass: 'background3',
      header: {
        enable: true,
        previous: true,
        flag: true,
      },
      footer: {
        enable: true,
      },
    },
  },
  '/market/details': {
    name: 'DetailsMarket',
    component: DetailsMarket,
    page: {
      title: 'Ma place du marché',
      bgClass: 'background1',
      header: {
        enable: true,
        previous: true,
      },
      footer: {
        enable: false,
      },
    },
    subRoutes: {
      '/members': {
        name: 'DetailsMarketMembers',
        component: DetailsMarketMembers,
      },
      '/location': {
        name: 'DetailsMarketLocation',
        component: DetailsMarketLocation,
      },
      '/stats': {
        name: 'DetailsMarketStats',
        component: DetailsMarketStats,
      },
    },
  },

  // mes alliances
  '/alliances': {
    name: 'Alliances',
    component: Alliances,
    page: {
      title: 'Mes alliances',
      bgClass: 'background2',
      header: {
        enable: true,
        profile: true,
        basket: true,
        add: true,
      },
      footer: {
        enable: true,
      },
    },
  },
})

// initialisation du routeur
router.start(App, 'painperdu-app')
