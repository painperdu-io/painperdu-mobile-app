<template>
  <div class="me-profile-container">
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

.me-profile-container {
  margin-top: 40px;
}
</style>
