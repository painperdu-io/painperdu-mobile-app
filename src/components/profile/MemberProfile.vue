<template>
  <div class="member-profile-container">
    <profile></profile>
  </div>
</template>

<script>
import Profile from './../commons/Profile'

export default {
  components: {
    Profile,
  },
};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';

.member-profile-container {
  margin-top: 40px;
}
</style>
