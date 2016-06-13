export function tabsNavigation() {
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

export function popupsList() {
  const popups = [
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
      route: 'ProductMarket',
      tip: true,
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
  ];

  return popups;
}

export function productsIcons() {
  const icons = [
    {
      icon: 'salade',
      name: 'Salade'
    },
    {
      icon: 'oeuf',
      name: 'Oeuf'
    },
    {
      icon: 'sandwich',
      name: 'Sandwich'
    },
    {
      icon: 'poivron',
      name: 'Poivron'
    },
    {
      icon: 'poisson',
      name: 'Poisson'
    },
    {
      icon: 'viande',
      name: 'Viande'
    },
    {
      icon: 'pates',
      name: 'Pâtes'
    },
    {
      icon: 'croissant',
      name: 'Croissant'
    },
    {
      icon: 'tomate',
      name: 'Tomate'
    },
    {
      icon: 'orange',
      name: 'Orange'
    },
    {
      icon: 'pomme',
      name: 'Pomme'
    },
    {
      icon: 'poire',
      name: 'Poire'
    },
    {
      icon: 'riz',
      name: 'Riz'
    },
    {
      icon: 'pizza',
      name: 'Pizza'
    },
    {
      icon: 'patate',
      name: 'Patate'
    },
    {
      icon: 'muffin',
      name: 'Muffin'
    },
    {
      icon: 'lait',
      name: 'Lait'
    },
    {
      icon: 'citron',
      name: 'Citron'
    },
    {
      icon: 'carotte',
      name: 'Carotte'
    },
    {
      icon: 'pain',
      name: 'Pain'
    },
    {
      icon: 'banane',
      name: 'Banane'
    },
    {
      icon: 'emmental',
      name: 'Emmental'
    },
    {
      icon: 'chou',
      name: 'Chou'
    },
    {
      icon: 'poulet',
      name: 'Poulet'
    },
    {
      icon: 'chocolat',
      name: 'Chocolat'
    },
    {
      icon: 'painmie',
      name: 'Pain mie'
    },
    {
      icon: 'panini',
      name: 'Panini'
    },
    {
      icon: 'avocat',
      name: 'Avocat'
    },
    {
      icon: 'maki',
      name: 'Maki'
    },
    {
      icon: 'pate-saumon',
      name: 'Pâtes saumon'
    },
    {
      icon: 'pate-carbonara',
      name: 'Pâtes carbonara'
    },
    {
      icon: 'pate-bolognaise',
      name: 'Pâtes bolognaise'
    },
    {
      icon: 'pate-nature',
      name: 'Pâtes nature'
    },
    {
      icon: 'sushi',
      name: 'Sushi'
    },
    {
      icon: 'yaourt-nature',
      name: 'Yaourt nature'
    },
    {
      icon: 'champignon',
      name: 'Champignon'
    },
  ];

  return icons;
}

export function productsCategories() {
  const categories = [
    {
      shortName: 'legumes',
      longName: 'Légumes & Fruits'
    },
    {
      shortName: 'viandes',
      longName: 'Viandes & Poissons'
    },
    {
      shortName: 'laitiers',
      longName: 'Produits laitiers'
    },
    {
      shortName: 'cereales',
      longName: 'Céréales & Dérivés'
    },
    {
      shortName: 'boissons',
      longName: 'Boissons'
    },
    {
      shortName: 'desserts',
      longName: 'Desserts'
    },
    {
      shortName: 'autres',
      longName: 'Autres'
    },
  ];

  return categories;
}
