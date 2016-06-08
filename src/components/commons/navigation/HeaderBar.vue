<template>
  <div class="header-bar">
    <div class="header-navigation">
      <div class="header-item  header-item-25">
        <svg v-if="$route.page.header.menu" v-on:click="openMenu" viewBox="0 0 50 50" class="header-icon  header-icon-left header-icon-menu">
          <use xlink:href="#header-icon-menu"></use>
        </svg>
        <svg v-if="$route.page.header.previous" v-on:click="goPrevious" viewBox="0 0 50 50" class="header-icon  header-icon-left header-icon-previous">
          <use xlink:href="#header-icon-previous"></use>
        </svg>
        <svg v-if="$route.page.header.profile" v-link="{ name: 'DetailsProfileMe', params: { id: '575302fc5dacbac32540268d' }}" viewBox="0 0 50 50" class="header-icon  header-icon-left header-icon-profile">
          <use xlink:href="#header-icon-profile"></use>
        </svg>
      </div>
      <div class="header-item  header-item-50">
        <div v-if="$route.name == 'Market' || $route.name == 'Foodkeeper' || $route.name == 'Alliances'" class="header-logo">
          <img width="132" height="30" src="./../../../../static/img/logo-pain-perdu.png" />
        </div>
        <h1 v-else>{{ $route.page.title }}</h1>
      </div>
      <div class="header-item  header-item-25">
        <svg v-if="$route.page.header.basket" v-on:click="openCart" viewBox="0 0 100 100" class="header-icon  header-icon-right header-icon-basket">
          <use xlink:href="#header-icon-basket"></use>
        </svg>
        <svg v-if="$route.page.header.add && $route.name == 'Market'" v-link="{ name: 'AddMarket' }" viewBox="0 0 100 100" class="header-icon  header-icon-right header-icon-add">
          <use xlink:href="#header-icon-add"></use>
        </svg>
        <svg v-if="$route.page.header.product" v-link="{ name: 'AddProductFoodkeeper' }" viewBox="0 0 50 50" class="header-icon  header-icon-right header-icon-add-product">
          <use xlink:href="#header-icon-add-product"></use>
        </svg>
        <svg v-if="$route.page.header.flag" viewBox="0 0 50 50" class="header-icon  header-icon-right header-icon-flag">
          <use xlink:href="#header-icon-flag"></use>
        </svg>
        <div v-if="$route.page.header.close" v-on:click="goPrevious" class="header-icon  header-icon-right header-icon-close">
          Fermer
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openCart(event) {
      event.preventDefault()
      document.getElementsByClassName('cart-popup-container')[0].classList.add('active');
      document.getElementsByClassName('cart-popup-overlay')[0].classList.add('active');
    },
    goPrevious(event) {
      event.preventDefault();

      const route = this.$route.name;
      // foodkeepers
      if (route === 'DetailsFoodkeeperProducts' ||
          route === 'DetailsFoodkeeperStats' ||
          route === 'DetailsFoodkeeperTimeline' ||
          route === 'AddFoodkeeper' ||
          route === 'AddProductFoodkeeper') {
          this.$route.router.go({ name: 'Foodkeeper' });
      }
      // markets
      if (route === 'DetailsMarketMembers' ||
          route === 'DetailsMarketLocation' ||
          route === 'DetailsMarketStats' ||
          route === 'AddMarket' ||
          route === 'ProductMarket') {
          this.$route.router.go({ name: 'Market' });
      }
      // alliances
      if (route === 'DetailsAlliance') {
        this.$route.router.go({ name: 'Alliances' });
      }
      // profile
      if (route === 'MemberProfile' ||
          route === 'DetailsProfileMe' ||
          route === 'DetailsProfileReviews' ||
          route === 'DetailsProfileStatistics') {
          this.$route.router.go({ name: 'Market' });
      }
    },
    openMenu(event) {
      event.preventDefault();
      document.getElementsByClassName('menu-bar-container')[0].classList.add('active');
    },
  }
};
</script>

<style lang="scss" scoped>
@import './../../../styles/variables.scss';

@keyframes apparition-header {
  0% {top: -100%;}
  100% {top: 0;}
}

.header-bar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 75px;
  background: $color-red;
  z-index: 900;
  animation: apparition-header 2s;
}

.header-navigation {
  display: flex;
  flex-flow: row wrap;
  margin-top: 15px;
  height: 60px;
  width: 100%;
}

  .header-item {
    display: flex;
    overflow: hidden;
    align-items: center;

    h1 {
      font: 1.5em 'Avenir-Book', sans-serif;
      color: $color-white;
      text-align: center;
      margin-top: 7px;
    }
  }

    .header-item-25 {
      flex: 1 25%;
      flex-direction: row;
      justify-content: flex-start;

      &:last-child {
        justify-content: flex-end;
      }
    }

    .header-item-50 {
      flex: 1 50%;
      flex-direction: column;
      justify-content: space-between;
    }

    .header-logo {
      width: auto;
      height: 40px;
      vertical-align: top;
      text-align: center;
      img {
        margin-top: 5px;
      }
    }

.header-icon {
  flex-direction: row;
  width: 50px;
  height: 50px;
  //margin-top: 5px;
  fill: $color-white;
}

  .header-icon-left {
    margin-left: 20px;
  }

  .header-icon-right {
    margin-right: 10px;
  }

  .header-icon-app {
    flex: auto;
  }

  .header-icon-close {
    color: $color-white;
    text-decoration: underline;
    font: 1.5em 'Avenir-Book', sans-serif;
    font-weight: 300;
    width: auto;
    height: 35px;
    margin-top: 6px;
    margin-right: 33px;
    align-items: initial;
  }

.header-icon-profile{
  width: 40px;
  height: 40px;
}

.header-icon-flag{ width: 35px;}
.header-icon-previous{ width: 35px;}
.header-icon-add-product{ width: 65px;}
.header-icon-basket{ width: 55px;}
.header-icon-menu{ width: 36px;}
</style>
