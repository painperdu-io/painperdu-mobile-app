<template>
  <div class="me-profile-container">
    <tabs-navigation></tabs-navigation>
    <profile></profile>
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

.me-profile-container {
  margin-top: 40px;
}
</style>
