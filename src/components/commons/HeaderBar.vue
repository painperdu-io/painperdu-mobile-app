<template>
  <div class="header-bar">
    <h1>{{ $route.data.title }}</h1>
    <nav>
      <ul>
        <li class="" v-link=""></li>
        <li class="" v-link=""></li>
        <li class="" v-link=""></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';

.header-bar {
  width: 100%;
  height: (100px / 2);
  max-height: (100px / 2);
  background-color: $color-red;
  z-index: 900;
}

h1 {
  text-align: center;
  color: $color-white;
  line-height: 2rem;
  background: yellow;
  font-size: 1rem;
  font-family: 'Avenir-Book', sans-serif;
}
</style>
