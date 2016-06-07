<template>
  <div class="footer-bar">
    <nav class="footer-navigation">
      <div class="footer-item v-click" v-on:click="changeActive(0, 'Foodkeeper')">Mon garde<br/> manger</div>
      <div class="footer-item v-click" v-on:click="changeActive(1, 'Market')" >La place<br/> du marché</div>
      <div class="footer-item v-click" v-on:click="changeActive(2, 'Alliances')" >Mes<br/> alliances</div>
      <div class="footer-active"></div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    changeActive(position, route) {
      const el = document.getElementsByClassName('footer-active')[0];
      el.style.left = `${position * (100 / 3)}%`;
      this.$route.router.go({ name: route });
    }
  }
};
</script>

<style lang="scss" scoped>
@import './../../../styles/variables.scss';

@keyframes apparition-footer {
  0% {bottom: -100%;}
  100% {bottom: 0;}
}

.footer-bar {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  background: $color-green;
  box-shadow: 0px -3px 10px rgba(0,0,0, 0.2);
  z-index: 900;
  animation: apparition-footer 2s;
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
    font-weight: 700;

    &.active {
      font-weight: bold;
    }

    &:not(:active) {
      transition: background 0.5s ease;
      -webkit-transition: background 0.5s ease;
    }

    &:active {
      transition: background 0.2s ease;
      -webkit-transition: background 0.2s ease;
      background: yellow;
    }
  }

.footer-active {
  position: absolute;
  bottom: 0;
  left: 33%;
  height: 2px;
  width: 33%;
  background: $color-white;
  transition: all 1s;
}
</style>
