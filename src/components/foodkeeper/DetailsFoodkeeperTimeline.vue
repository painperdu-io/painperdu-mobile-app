<template>
  <div class="details-foodkeeper-timeline-wrapper">
    <statistics></statistics>
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
  position: relative;
  top: 0;
  left: 0;
  margin: 12px;
}
</style>
