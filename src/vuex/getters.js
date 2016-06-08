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
        { name: 'Mes statistiques', path: '/profile/stats' },
        { name: 'Mes avis', path: '/profile/reviews' },
      ]
    },
  ];

  return tabs;
}

export function popupsList () {
  const popups = [
    {
      route: 'Market',
      tip: true,
    },
    {
      route: 'AddFoodkeeper',
      addPhoto: true,
    },
    {
      route: 'AddMarket',
      addBlason: true,
    },
    {
      route: 'DetailsMarketMembers',
      addBlason: true,
    },
    {
      route: 'DetailsFoodkeeper',
      addAccomplice: true,
    },
    {
      route: 'Market',
      recipe: true,
    },
    {
      route: 'DetailsFoodkeeperProducts',
      addAccomplice: true,
    },
    {
      route: 'DetailsFoodkeeperStats',
      addAccomplice: true,

    },
    {
      route: 'DetailsFoodkeeperTimeline',
      addAccomplice: true,
    },
    {
      route: 'AddProductFoodkeeper',
      addPicto: true,
    },
  ]

  return popups;
}
