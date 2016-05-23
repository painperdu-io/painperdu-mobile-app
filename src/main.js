import Vue from 'vue'
import router from './router'
import App from './App'

// inclusion: application
import Splash from './components/splash/Splash'

// inclusion: ajout produit
import AddProduct from './components/commons/AddProduct'

// inclusion: mon garde-manger
import Foodkeeper from './components/foodkeeper/Foodkeeper'
import AddFoodkeeper from './components/foodkeeper/AddFoodkeeper'
import AddAccomplicesFoodkeeper from './components/foodkeeper/AddAccomplicesFoodkeeper'
import DetailsFoodkeeper from './components/foodkeeper/DetailsFoodkeeper'
import DetailsFoodkeeperProducts from './components/foodkeeper/DetailsFoodkeeperProducts'
import DetailsFoodkeeperStats from './components/foodkeeper/DetailsFoodkeeperStats'
import DetailsFoodkeeperTimeline from './components/foodkeeper/DetailsFoodkeeperTimeline'

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
import DetailsAlliance from './components/alliances/DetailsAlliance'


// inclusion: profile
import MemberProfile from './components/profile/MemberProfile';
import MeProfile from './components/profile/MeProfile';


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
      title: 'Pain Perdu',
      wrap: '',
      bgClass: 'background1',
      header: {
        enable: false,
      },
      footer: {
        enable: false,
      },
    },
  },
  //ajout produit
  '/addProduct': {
    name: 'AddProduct',
    component: AddProduct,
    page: {
      title: 'Ajouter une denrée',
      wrap: 'wrap-header',
      bgClass: 'background4',
      header: {
        enable: true,
        previous: true,
      },
      footer: {
        enable: false,
      },
    },
  },
  // mon garde-manger
  '/foodkeeper': {
    name: 'Foodkeeper',
    component: Foodkeeper,
    page: {
      title: 'Mes gardes-mangers',
      wrap: 'wrap-header-footer',
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
    name: 'AddFoodkeeper',
    component: AddFoodkeeper,
    page: {
      title: 'Ajouter un garde-manger',
      wrap: 'wrap-header-footer',
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
  '/foodkeeper/add/accomplice': {
    name: 'AddAccomplicesFoodkeeper',
    component: AddAccomplicesFoodkeeper,
    page: {
      title: 'Ajouter un compère',
      wrap: 'wrap-header',
      bgClass: 'background2',
      header: {
        enable: true,
        previous: true,
      },
      footer: {
        enable: false,
      },
    },
  },
  '/foodkeeper/details': {
    name: 'DetailsFoodkeeper',
    component: DetailsFoodkeeper,
    page: {
      title: 'Mon garde-manger',
      wrap: 'wrap-header',
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
      '/products': {
        name: 'DetailsFoodkeeperProducts',
        component: DetailsFoodkeeperProducts,
      },
      '/stats': {
        name: 'DetailsFoodkeeperStats',
        component: DetailsFoodkeeperStats,
      },
      '/timeline': {
        name: 'DetailsFoodkeeperTimeline',
        component: DetailsFoodkeeperTimeline,
      },
    },
  },

  // place du marché
  '/market': {
    name: 'Market',
    component: Market,
    page: {
      title: 'Pain Perdu',
      wrap: 'wrap-header-footer',
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
      wrap: 'wrap-header',
      bgClass: 'background2',
      header: {
        enable: true,
        previous: true,
      },
      footer: {
        enable: false,
      },
    },
  },
  '/market/product': {
    name: 'ProductMarket',
    component: ProductMarket,
    page: {
      title: 'Fiche denrée',
      wrap: 'wrap-header-footer',
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
      wrap: 'wrap-header',
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
      wrap: 'wrap-header-footer',
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
  'alliances/alliance': {
    name: 'Alliance',
    component: DetailsAlliance,
    page: {
      title: 'Mon alliance',
      wrap: 'wrap-header-footer',
      bgClass: 'background2',
      header: {
        enable: true,
        previous: true,
      },
      footer: {
        enable: false,
      },
    },
  },


  // profile
  '/profile/member': {
    name: 'MemberProfile',
    component: MemberProfile,
    page: {
      title: 'Fiche compère',
      wrap: 'wrap-header',
      bgClass: 'backgroundWhite',
      header: {
        enable: true,
        previous: true,
      },
      footer: {
        enable: false,
      },
    },
  },
  '/profile/me': {
    name: 'MeProfile',
    component: MeProfile,
    page: {
      title: 'Mon profile',
      wrap: 'wrap-header',
      bgClass: 'background4',
      header: {
        enable: true,
        previous: true,
      },
      footer: {
        enable: false,
      },
    },
  },
})

// initialisation du routeur
router.start(App, 'painperdu-app')
