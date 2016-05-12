<template>
  <div>
    <template v-for="cart in carts">
      <div class="cart-item" v-link:"{ path: '/cart/:id' }">
        <div class="cart-item-background" style="background-image: url('/static/temp/{{ cart.photo }}');"></div>
        <div class="cart-item-background-color"></div>
        <h3 class="cart-item-title">{{ cart.name }}</h3>
        <div class="cart-item-separator"></div>
        <p class="cart-item-description">{{ cart.description }}</p>
      </div>
    </template>
  </div>

  <div class="cart-add" v-link="{ path: '/cart/addCart' }">
    <div class="cart-add-icon">
      <div class="cart-add-icon-bg">
        <span class="cart-add-icon-text">+</span>
      </div>
    </div>
    <div class="cart-add-text-wrapper">
      <h3 class="cart-add-title">Créer un garde-manger</h3>
      <p class="cart-add-description">
        Pour rejoindre un garde-manger existant,
        demandez à son administrateur de vous
        ajouter en tant que compère.
      </p>
    </div>
  </div>

  <div>
    <div id="produit" class="button" v-link="{ path: '/cart/users' }">Mes compères</div>
    <div class="button" v-link="{ path: '/cart/products' }">Denrées proposées</div>
  </div>
    <router-view transition="popIn"></router-view>
</div>
</template>

<script>
export default {
  data() {
    return {
      carts: [
        {
          name: 'Studio Lyon',
          description: 'Description du studio',
          photo: 'home-1.jpg',
        },
        {
          name: 'Maison Maman',
          description: 'Description du studio',
          photo: 'home-1.jpg',
        },
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';
@import './../../styles/fonts.scss';

.cart-item {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1 100%;
  height: (250px / 2);
  margin: (14px / 2) 0;
  text-align: center;
}

  .cart-item-background,
  .cart-item-background-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .cart-item-background {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    filter: grayscale(100%);
  }

  .cart-item-background-color {
    background-color: rgba(247, 232, 218, 0.2);
  }

  .cart-item-separator {
    width: 56px;
    height: 5px;
    margin: 0 auto;
    transform: scale(0.5);
    background: url('/static/img/separator-green.png') center center no-repeat;
  }

  .cart-item-title,
  .cart-item-description {
    margin: 5px 0;
    color: $color-white;
    z-index: 10;
  }

  .cart-item-title {
    font: 1.5em 'Karla-Bold', sans-serif;
    text-transform: uppercase;
  }

  .cart-item-description {
    font: 1.2em 'Karla-Italic', sans-serif;
  }

.cart-add {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex: 1 100%;
  height: (250px / 2);
  margin: (14px / 2) 0;
  background: $color-green-lite;
}

  .cart-add-icon {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex: 1 30%;
  }

    .cart-add-icon-bg {
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin: 0 auto;
      width: (160px / 2);
      height: (160px / 2);
      background: $color-white;
      border-radius: 50%;
    }

    .cart-add-icon-text {
      text-align: center;
      font: 3em 'Karla-Regular', sans-serif;
      color: $color-red;
    }

  .cart-add-text-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex: 1 55%;
  }

    .cart-add-title,
    .cart-add-description {
      margin: 5px 0;
      color: $color-white;
      z-index: 10;
    }

    .cart-add-title {
      font: 1.5em "Karla-Bold", sans-serif;
      text-transform: uppercase;
      color: $color-white;
    }

    .cart-add-description {
      font: 1.2em 'Karla-Italic', sans-serif;
    }
</style>
