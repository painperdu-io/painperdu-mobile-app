<template>
  <div class="header-bar">
    <div class="header-navigation">
      <div class="header-item  header-item-25">
        <svg v-if="$route.page.header.menu" viewBox="0 0 50 50" class="header-icon  header-icon-left">
          <use xlink:href="#header-icon-menu"></use>
        </svg>
        <svg v-if="$route.page.header.previous" v-on:click="goPrevious" viewBox="0 0 50 50" class="header-icon  header-icon-left">
          <use xlink:href="#header-icon-previous"></use>
        </svg>
        <svg v-if="$route.page.header.profile" v-link="{ name: 'DetailsProfileMe', params: { id: '575302fc5dacbac32540268d' }}" viewBox="0 0 50 50" class="header-icon  header-icon-left">
          <use xlink:href="#header-icon-profile"></use>
        </svg>
      </div>
      <div class="header-item  header-item-50">
        <svg v-if="$route.name == 'Market' || $route.name == 'Foodkeeper' || $route.name == 'Alliances' " viewBox="0 0 1024 768" class="header-logo">
          <use xlink:href="#logo-icon"></use>
        </svg>
        <h1 v-else>{{ $route.page.title }}</h1>
      </div>
      <div class="header-item  header-item-25">
        <svg v-if="$route.page.header.basket" v-on:click="openCart" viewBox="0 0 50 50" class="header-icon  header-icon-right">
          <use xlink:href="#header-icon-basket"></use>
        </svg>
        <svg v-if="$route.page.header.add && $route.name == 'Market' " v-link="{ name: 'AddMarket' }" viewBox="0 0 50 50" class="header-icon  header-icon-right header-icon-add">
          <use xlink:href="#header-icon-add"></use>
        </svg>
        <svg v-if="$route.page.header.product" v-link="{ name: 'AddProductFoodkeeper' }" viewBox="0 0 50 50" class="header-icon  header-icon-right">
          <use xlink:href="#header-icon-add-product"></use>
        </svg>
        <svg v-if="$route.page.header.flag" viewBox="0 0 50 50" class="header-icon  header-icon-right">
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
      document.getElementsByClassName('popup-container')[0].classList.add('active');
      document.getElementsByClassName('popup-overlay')[0].classList.add('active');
      event.preventDefault()
    },
    goPrevious() {
      this.$route.router.go(history.back());
    }
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
  height: 60px;
  background: $color-red;
  z-index: 900;
  animation: apparition-header 2s;
}

.header-navigation {
  display: flex;
  flex-flow: row wrap;
  margin-top: 20px;
  height: 40px;
  width: 100%;
}

  .header-item {
    display: flex;
    overflow: hidden;

    h1 {
      font: 1.4em 'Avenir-Book', sans-serif;
      color: $color-white;
      text-align: center;
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
      transform: scale3d(3.4,3.4,3.4);
      -webkit-transform: scale3d(3.4,3.4,3.4);
    }

.header-icon {
  flex-direction: row;
  width: 30px;
  height: 30px;
  margin-top: 5px;
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
    margin-top: 7px;
    margin-right: 33px;
  }

.header-icon-add {
  transform: scale3d(1.2, 1.2, 1.2);
  -webkit-transform: scale3d(1.2, 1.2, 1.2);
}
</style>
