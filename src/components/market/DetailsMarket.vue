<template>
  <div class="clan-container">

    <div class="group-item clan-item" v-link="{ path: '/market/details' }">
      <img src="./../../../static/temp/clan.png" />
      <div class="group-name">Ma résidence</div>
    </div>

    <div class="clan-description">
      <p class="clan-description-text">
        Haec igitur prima lex amicitiae sanciatur,
        ut ab amicis honesta petamus,
        amicorum causa honesta faciamus,
        ne exspectemus quidem, dum rogemur;
        studium semper Incenderat autem audaces.
      </p>
    </div>

    <div class="clan-navbar">
      <nav class="clan-navigation">
        <div class="clan-nav-item" v-link="{ path: '/market/details/location', activeClass: 'active' }">Localisation</div>
        <div class="clan-nav-item" v-link="{ path: '/market/details/members', activeClass: 'active' }">Membres Alliés</div>
        <div class="clan-nav-item" v-link="{ path: '/market/details/stats', activeClass: 'active' }">Statistiques</div>
      </nav>
      <div class="clan-nav-active"></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';
@import './../../styles/fonts.scss';

.clan-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1 100%;
  position: fixed;
}

.group-item {
  position: relative;
  margin: (60px / 2) auto 0;
  text-align: center;
  img {
    width: (338px / 2);
  }
  .group-name {
    position: absolute;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
    font-size: (2.5em / 2);
    font-family: 'Karla-Bold';
    text-transform: uppercase;
    color: $color-text;
  }
  .star-icon {
    fill: $color-red;
    width: (50px/ 2);
    position: absolute;
    left: 95%;
    top: -55%;
  }
}



.clan-description {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex: 1 100%;
  height: (200px / 2);
  background: yellow;
}

  .clan-description-text {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 75%;
    font: 1.2em 'Karla-Italic', sans-serif;
    color: $color-text;
  }




  .clan-navbar {
    position: relative;
    width: 100%;
    height: (120px / 2);
    background: $color-white;
    z-index: 900;
    overflow: hidden;
  }

  .clan-navigation {
    display: flex;
    flex-flow: row wrap;
    height: (110px / 2);
    width: 100%;
  }

    .clan-nav-item {
      display: flex;
      justify-content: center;
      flex-direction: column;
      flex: 1 33%;
      font: 1.3em "Karla-Regular", sans-serif;
      color: $color-text;
      text-align: center;
      text-transform: uppercase;
      text-decoration: none;
      border-right: 1px solid $color-gray;

      &:last-child {
        border-right: none;
      }

      &.active {
        font-weight: bold;
        color: $color-red;
      }
    }

  .clan-nav-active {
    position: absolute;
    bottom: 0;
    left: 33%;
    height: 3px;
    width: 33%;
    background: $color-red;
  }

</style>
