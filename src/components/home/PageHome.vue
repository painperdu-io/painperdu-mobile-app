<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Pain Perdu application',
    };
  },
};
</script>

<style scoped>
.hello {
  background: #fff;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
h1 {
  color: #42b983;
}
</style>
