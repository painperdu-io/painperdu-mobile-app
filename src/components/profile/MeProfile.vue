<template>
  <div class="me-profile-container">
    <tabs-navigation route="UserProfile"></tabs-navigation>
    <div class="me-profile-infos-wrapper">
      <profile></profile>
    </div>
  </div>
</template>

<script>
import TabsNavigation from './../commons/navigation/TabsNavigation'
import Profile from './../commons/Profile'

export default {
  components: {
    TabsNavigation,
    Profile,
  },
};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';

.me-profile-container {}

  .me-profile-infos-wrapper {
    margin-top: 40px;
  }
</style>
