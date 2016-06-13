<template>
  <div class="details-foodkeeper-timeline-wrapper">
    <img width="375" src="../../../static/img/screen-timeline.png" />
  </div>
</template>

<script>
import Statistics from './../commons/Statistics'

export default {
  components: {
    Statistics,
  },
};
</script>

<style lang="scss" scoped>
.details-foodkeeper-timeline-wrapper {
  img {
    width: 100%;
    overflow-y: scroll;
  }
}
</style>
