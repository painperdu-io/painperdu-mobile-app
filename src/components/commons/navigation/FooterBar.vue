<template>
  <div class="footer-bar">
    <nav class="footer-navigation">
      <div class="footer-item" v-link="{ path: '/foodkeeper', activeClass: 'active' }">Mon garde<br/> manger</div>
      <div class="footer-item" v-link="{ path: '/market', activeClass: 'active' }">La place<br/> du marché</div>
      <div class="footer-item" v-link="{ path: '/alliances', activeClass: 'active' }">Mes<br/> alliances</div>
      <div class="footer-active"></div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import './../../../styles/variables.scss';

.footer-bar {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  background: $color-green;
  box-shadow: 0px -3px 10px rgba(0,0,0, 0.2);
  z-index: 900;
}

.footer-navigation {
  display: flex;
  flex-flow: row wrap;
  height: 60px;
  width: 100%;
}

  .footer-item {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex: 1 33%;
    font: 1em 'Avenir-Book', sans-serif;
    color: $color-white;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;

    &.active {
      font-weight: bold;
    }
  }

.footer-active {
  position: absolute;
  bottom: 0;
  left: 33%;
  height: 2px;
  width: 33%;
  background: $color-white;
}
</style>
