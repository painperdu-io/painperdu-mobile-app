<template>
  <div class="menu-bar-container">
    <div class="menu-bar-logo-wrapper">
      <svg viewBox="0 0 1024 768">
        <use xlink:href="#logo-icon"></use>
      </svg>
      <div class="menu-close" v-on:click="closeMenu">
        <svg viewBox="0 0 100 100" class="app-icon">
          <use xlink:href="#app-icon-close"></use>
        </svg>
      </div>
    </div>
    <nav class="menu-bar-nav-wrapper">
      <div class="menu-bar-nav-item">
        <svg viewBox="0 0 1024 768">
          <use xlink:href="#nav-icon-note"></use>
        </svg>
        <a href="#">Configurer mes outils</a>
      </div>
      <div class="menu-bar-nav-item-separator"></div>
      <div class="menu-bar-nav-item">
        <svg viewBox="0 0 1024 768">
          <use xlink:href="#nav-icon-share"></use>
        </svg>
        <a href="#">Partager l'application</a>
      </div>
      <div class="menu-bar-nav-item-separator"></div>
      <div class="menu-bar-nav-item">
        <svg viewBox="0 0 1024 768">
          <use xlink:href="#nav-icon-help"></use>
        </svg>
        <a href="#">Aide</a>
      </div>
      <div class="menu-bar-nav-item-separator"></div>
      <div class="menu-bar-nav-item">
        <svg viewBox="0 0 1024 768">
          <use xlink:href="#nav-icon-cgu"></use>
        </svg>
        <a href="#">Conditions générales</a>
      </div>
      <div class="menu-bar-nav-item-separator"></div>
      <div class="menu-bar-nav-item">
        <svg viewBox="0 0 1024 768">
          <use xlink:href="#nav-icon-partner"></use>
        </svg>
        <a href="#">Partenaires</a>
      </div>
      <div class="menu-bar-nav-item-separator"></div>
      <div class="menu-bar-nav-item">
        <svg viewBox="0 0 1024 768">
          <use xlink:href="#nav-icon-contact"></use>
        </svg>
        <a href="#">Contacts</a>
      </div>
      <div class="menu-bar-nav-item-separator"></div>
    </nav>
    <div class="menu-bar-logout">Déconnexion</div>
  </div>
</template>

<script>
export default {
  methods: {
    closeMenu(event) {
      event.preventDefault();
      document.getElementsByClassName('menu-bar-container')[0].classList.remove('active');
    },
  },
};
</script>

<style lang="scss" scoped>
@import './../../../styles/variables.scss';

.menu-bar-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 10px;
  left: -500px;
  width: 300px;
  height: 100vh;
  background: $color-white url('/static/img/bg-menu.png');
  background-size: 303px 431px;
  background-position: center 150px;
  box-shadow: 0px 3px 70px rgba(0,0,0, 0.2);
  z-index: 999;
}

  .menu-bar-logo-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 150px;
    background: $color-beige;

    & > svg {
      transform: scale(1.5);
    }
  }

  .menu-bar-nav-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 250px;
    height: 325px;
  }

    .menu-bar-nav-item {
      display: flex;
      flex-direction: row;
      align-items: center;

      & > a {
        font: 1.5em 'Karla-Regular', sans-serif;
        text-decoration: none;
        color: $color-text;
      }

      & > svg {
        margin-right: 10px;
        width: 35px;
        height: 35px;
        fill: $color-green;
      }
    }

    .menu-bar-nav-item-separator {
      width: 56px;
      height: 5px;
      margin: -25px 0 0 30px;
      transform: scale(0.5);
      background: url('/static/img/separator-red.png') center center no-repeat;
    }

  .menu-bar-logout {
    background: $color-green;
    width: 100%;
    height: 70px;
    font: 1.5em 'Avenir-Book', sans-serif;
    color: $color-white;
    line-height: 60px;
    text-align: center;
  }

  .menu-close {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 40px;
    height: 40px;
    fill: $color-white;
  }
</style>
