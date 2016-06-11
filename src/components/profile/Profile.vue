<template>
  <div class="profile-container animated" transition="slide" transition-mode="in-out">
    <tabs-navigation :objectid="$route.params.id" route="UserProfile"></tabs-navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import TabsNavigation from './../commons/navigation/TabsNavigation'

export default {
  components: {
    TabsNavigation,
  },
};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';

.profile-container {}
</style>
