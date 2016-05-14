<template>
  <div class="details-market-members-wrapper">
    <members-list></members-list>
  </div>
</template>

<script>
import MembersList from './../commons/MembersList'

export default {
  components: {
    MembersList,
  },
};
</script>

<style lang="scss" scoped>
.details-market-members-wrapper {}
</style>
