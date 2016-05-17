<template>
  <div class="me-profile-container">
    <tabs-navigation route="UserProfile"></tabs-navigation>
    <div class="me-profile-infos-wrapper">
      <profile></profile>
      <div class="me-profile-btn-public">Voir le profil public</div>
    </div>
    <div class="me-profile-accomplices-wrapper">
      <h3 class="me-profile-accomplices-title">Mes compères</h3>
      <accomplices-list></accomplices-list>
    </div>
  </div>
</template>

<script>
import TabsNavigation from './../commons/navigation/TabsNavigation'
import AccomplicesList from './../commons/AccomplicesList'
import Profile from './../commons/Profile'

export default {
  components: {
    AccomplicesList,
    TabsNavigation,
    Profile,
  },
};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';

.me-profile-container {}

  .me-profile-infos-wrapper {
    margin: 20px 0 10px;
  }

    .me-profile-btn-public {
      margin: 0 auto;
      width: 170px;
      padding: 18px 0;
      border-radius: 25px;
      background-color: $color-beige;
      font: 1.3em 'Karla-Bold', sans-serif;
      color: $color-text;
      text-transform: uppercase;
      text-align: center;
    }

  .me-profile-accomplices-wrapper {
    padding: 10px 30px 20px;
  }

    .me-profile-accomplices-title {
      font: 1.3em 'Karla-Italic', sans-serif;
      color: $color-text;
    }
</style>
