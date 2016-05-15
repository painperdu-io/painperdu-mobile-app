export function tabsNavigation () {
  const routeName = 'DetailsFoodkeeper';
  let tabs = [];
  if (routeName === 'DetailsMarket') {
    tabs = [
      { name: 'Localisation', path: '/market/details/location' },
      { name: 'Membres alliés', path: '/market/details/members' },
      { name: 'Statistiques', path: '/market/details/stats' },
    ]
  }
  if (routeName === 'UserProfile') {
    tabs = [
      { name: 'Mon profil', path: '/profile/user/me' },
      { name: 'Mes outils', path: '/profile/user/tools' },
      { name: 'Mes avis', path: '/profile/user/reviews' },
    ]
  }
  if (routeName === 'DetailsFoodkeeper') {
    tabs = [
      { name: 'Produits', path: '/foodkeeper/details/products' },
      { name: 'Statistiques', path: '/foodkeeper/details/stats' },
      { name: 'Timeline', path: '/foodkeeper/details/timeline' },
    ]
  }

  return tabs;
}

export function detailsMarketMembers () {
  return [
    {
      id: 79,
      name: 'Firstname Lastname',
    },
    {
      id: 80,
      name: 'Firstname Lastname',
    },
    {
      id: 34,
      name: 'Firstname Lastname',
    },
    {
      id: 54,
      name: 'Firstname Lastname',
    },
    {
      id: 23,
      name: 'Firstname Lastname',
    },
    {
      id: 64,
      name: 'Firstname Lastname',
    },
    {
      id: 43,
      name: 'Firstname Lastname',
    },
    {
      id: 21,
      name: 'Firstname Lastname',
    },
  ]
}

export function detailsFoodkeeperAccomplices () {
  return [
    {
      id: 20,
      name: 'Firstname Lastname',
    },
    {
      id: 71,
      name: 'Firstname Lastname',
    },
    {
      id: 53,
      name: 'Firstname Lastname',
    },
  ]
}

export function productsList () {
  return [
    { name: 'salade',
      quantity: '3',
      status: true,
      brut: true,
    },
    { name: 'chou',
      quantity: '1',
      status: false,
      brut: true,
    },
    { name: 'pain',
      quantity: '1',
      status: true,
      brut: true,
    },
    { name: 'poivron',
      quantity: '6',
      status: true,
      brut: true,
    },
    { name: 'lasagnes',
      quantity: '3',
      status: true,
      brut: false,
    },
    { name: 'emmental',
      quantity: '1',
      status: false,
      brut: true,
    },
    { name: 'viande',
      quantity: '1',
      status: true,
      brut: true,
    },
    { name: 'banane',
      quantity: '6',
      status: true, //disponible maintenant
      brut: true, //type produit
    },
  ]
}
