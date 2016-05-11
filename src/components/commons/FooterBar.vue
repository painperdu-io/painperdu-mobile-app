<template>
  <div class="footer-bar">
    <nav class="footer-navigation">
      <ul class="footer-list">
        <li class="footer-item" v-link="{ path: '/cart' }">Mon garde manger</li>
        <li class="footer-item" v-link="{ path: '/' }">La place du marché</li>
        <li class="footer-item" v-link="{ path: '/alliances' }">Mes alliances</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';

.footer-bar {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: (156px / 2);
  background: $color-green;
  z-index: 900;
}

.footer-list {
  display: flex;
}

.footer-item {
  display: flex;
  width: 33%;
  color: $color-white;
  text-transform: uppercase;

  &:nth-child(1) {
    background: blue;
  }

  &:nth-child(2) {
    background: violet;
  }

  &:nth-child(3) {
    background: yellow;
  }
}
</style>
