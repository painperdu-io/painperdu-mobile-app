<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="button" v-link="{ path: '/cart' }" >Mon garde-manger</div>
    <div class="button" v-link="{ path: '/market' }">La place du marché</div>
    <div class="button" v-link="{ path: '/alliances' }">Mes alliances</div>
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
  font: 14px 'Baskerville-Bold', sans-serif;
}
.button {
  width: 200px;
  border: 1px solid #000;
  margin: auto;
  text-align: center;
}
h1 {
  color: #42b983;
}
</style>
