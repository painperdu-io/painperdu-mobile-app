<template>
  <nav class="headerBar">
    <h1>{{ title }}</h1>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      title: 'Pain Perdu tet',
    };
  },
}
</script>

<style scoped>
  .headerBar {
    width: 100%;
    height: 9%;
    /*background-color: #ff4743;*/
    background-color: #ffff00;
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
