export function tabsNavigation () {
  const tabs = [
    {
      route: 'DetailsFoodkeeper',
      items: [
        { name: 'Produits', path: '/foodkeeper/details/products' },
        { name: 'Statistiques', path: '/foodkeeper/details/stats' },
        { name: 'Timeline', path: '/foodkeeper/details/timeline' },
      ]
    },
    {
      route: 'DetailsMarket',
      items: [
        { name: 'Localisation', path: '/market/details/location' },
        { name: 'Membres alliés', path: '/market/details/members' },
        { name: 'Statistiques', path: '/market/details/stats' },
      ]
    },
    {
      route: 'UserProfile',
      items: [
        { name: 'Mon profil', path: '/profile/me' },
        { name: 'Mes outils', path: '/profile/tools' },
        { name: 'Mes avis', path: '/profile/reviews' },
      ]
    },
  ]

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
    { id: 1,
      name: 'salade',
      quantity: '3',
      status: true,
      brut: true,
    },
    { id: 2,
      name: 'chou',
      quantity: '1',
      status: false,
      brut: true,
    },
    { id: 3,
      name: 'pain',
      quantity: '1',
      status: true,
      brut: true,
    },
    { id: 4,
      name: 'poivron',
      quantity: '6',
      status: true,
      brut: true,
    },
    { id: 5,
      name: 'lasagnes',
      quantity: '3',
      status: true,
      brut: false,
    },
    { id: 6,
      name: 'emmental',
      quantity: '1',
      status: false,
      brut: true,
    },
    { id: 7,
      name: 'viande',
      quantity: '1',
      status: true,
      brut: true,
    },
    { id: 8,
      name: 'banane',
      quantity: '6',
      status: true, //disponible maintenant
      brut: true, //type produit
    },
  ]
}

export function alliancesList () {
  return [
    { product: [
        { id: 1,
          name: 'salade',
          quantity: '3',
          status: true,
          brut: true,
        },
      ],
      date: '21/05/2016',
      status: false,
      statusName: 'en cours',
      markerMemberId : 71,
      historique : [
        { step : 1, done: true, },
      ]
    },
    { product: [
        { id: 3,
          name: 'pain',
          quantity: '6',
          status: true, //disponible maintenant
          brut: true, //type produit
        },
      ],
      date: '06/05/2016',
      status: true,
      statusName: 'validée',
      markerMemberId : 34,
      historique : [
        { step : 1, done: true, },
      ]
    },
    { product: [
        { id: 4,
          name: 'poivron',
          quantity: '1',
          status: false,
          brut: true,
        },
      ],
      date: '16/04/2016',
      status: true,
      statusName: 'validée',
      markerMemberId : 53,
      historique : [
        { step : 1, done: true, },
      ]
    },
    { product: [
        { id: 2,
          name: 'chou',
          quantity: '3',
          status: true,
          brut: true,
        },
      ],
      date: '05/04/2016',
      status: true,
      statusName: 'abandonnée',
      markerMemberId : 34,
      historique : [
        { step : 1, done: true, },
      ]
    },
    { product: [
        { id: 1,
          name: 'salade',
          quantity: '3',
          status: true,
          brut: true,
        },
      ],
      date: '12/05/2016',
      status: true,
      statusName: 'validée',
      markerMemberId : 80,
      historique : [
        { step : 1, status: true, },
      ]
    },
    { product: [
        { id: 1,
          name: 'salade',
          quantity: '3',
          status: true,
          brut: true,
        },
      ],
      date: '18/05/2016',
      status: true,
      statusName: 'validée',
      markerMemberId : 34,
      historique : [
        { step : 1, status: true, },
      ]
    },
  ]
}
