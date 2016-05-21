<template>
  <div class="header-bar">
    <div class="header-navigation">
      <div class="header-item  header-item-25">
        <svg v-if="$route.page.header.menu" viewBox="0 0 50 50" class="header-icon  header-icon-left">
          <use xlink:href="#header-icon-menu"></use>
        </svg>
        <svg v-if="$route.page.header.previous" v-link="{ path: '/market' }" viewBox="0 0 50 50" class="header-icon  header-icon-left">
          <use xlink:href="#header-icon-previous"></use>
        </svg>
        <svg v-if="$route.page.header.profile" v-link="{ path: '/profile/me' }" viewBox="0 0 50 50" class="header-icon  header-icon-left">
          <use xlink:href="#header-icon-profile"></use>
        </svg>
      </div>
      <div class="header-item  header-item-50">
        <h1>{{ $route.page.title }}</h1>
      </div>
      <div class="header-item  header-item-25">
        <svg v-if="$route.page.header.basket" v-on:click="openCart" viewBox="0 0 50 50" class="header-icon  header-icon-right">
          <use xlink:href="#header-icon-basket"></use>
        </svg>
        <svg v-if="$route.page.header.add" viewBox="0 0 50 50" class="header-icon  header-icon-right">
          <use xlink:href="#header-icon-add"></use>
        </svg>
        <svg v-if="$route.page.header.flag" viewBox="0 0 50 50" class="header-icon  header-icon-right">
          <use xlink:href="#header-icon-flag"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openCart: (event) => {
      document.getElementsByClassName('cart-popup-container')[0].classList.add('active');
      event.preventDefault()
    }
  }
};
</script>

<style lang="scss" scoped>
@import './../../../styles/variables.scss';

.header-bar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background: $color-red;
  z-index: 900;
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
        justify-content: center;
      }
    }

    .header-item-50 {
      flex: 1 50%;
      flex-direction: column;
      justify-content: space-between;
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
</style>
