<template>
  <div class="details-foodkeeper-products-wrapper">
    <products-list :products="foodkeeper.products"></products-list>
  </div>
</template>

<script>
import ProductsList from './../commons/ProductsList'

export default {
  components: {
    ProductsList,
  },
  data() {
    return {
      foodkeeper: {
        products: [
          { name: 'salade',
            quantity: '3',
            status: true,
            brut: true,
            emergency: true,
          },
          { name: 'chou',
            quantity: '1',
            status: false,
            brut: true,
            emergency: true,
          },
          { name: 'pain',
            quantity: '1',
            status: true,
            brut: true,
            emergency: false,
          },
          { name: 'poivron',
            quantity: '6',
            status: true,
            brut: true,
            emergency: false,
          },
          { name: 'lasagnes',
            quantity: '3',
            status: true,
            brut: false,
            emergency: true,
          },
          { name: 'emmental',
            quantity: '1',
            status: false,
            brut: true,
            emergency: false,
          },
          { name: 'viande',
            quantity: '1',
            status: true,
            brut: true,
            emergency: false,
          },
          { name: 'banane',
            quantity: '6',
            status: true, //disponible maintenant
            brut: true, //type produit
            emergency: false,
          },
        ]
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.details-foodkeeper-products-wrapper {
  position: relative;
  top: 0;
  left: 0;
}
</style>
