<template>
  <nav class="headerBar">
    <h1>{{ title }}</h1>

  </nav>
</template>

<script>
export default {
  data() {
    return {
      title: 'Pain Perdu test',
    };
  },
}
</script>

<style lang='scss' scoped>
@import './../../styles/mixins.scss';

.headerBar {
  width: 100%;
  @include height(120px);
  background-color: #ff4743;
  z-index: 900;
}

h1 {
  text-align: center;
  color: #ffffff;
  line-height: 3rem;
  font-size: 1.2rem;
  font-family: sans-serif;
}
</style>
