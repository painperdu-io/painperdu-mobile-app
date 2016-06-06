<template>
  <div class="splash-container">
    <div class="logo">
      <svg viewBox="0 0 1024 768">
        <use xlink:href="#logo-icon"></use>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  ready () {
    setTimeout(() => this.$route.router.go({ name: 'Market' }), 1000);
  },
};
</script>

<style lang="scss" scoped>
.splash-container {
  position: relative;
  width: 100vw;
  height: 100vh;
}

.logo {
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translate3d(0, -50%, 0);
}
</style>
