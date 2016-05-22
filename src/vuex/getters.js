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
