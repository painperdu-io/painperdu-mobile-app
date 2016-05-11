<template>
  <nav class="headerBar">
    <h1> {{ $route.data.title }}</h1>

  </nav>
</template>

<script>

export default {}
</script>

<style lang='scss' scoped>

.headerBar {
  width: 100%;
  height: 60px;
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
