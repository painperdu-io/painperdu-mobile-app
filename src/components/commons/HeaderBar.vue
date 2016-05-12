<template>
  <div class="header-bar">
    <div class="header-navigation">
      <div class="header-item  header-item-25">
        <svg viewBox="0 0 50 50" class="header-icon  header-icon-previous">
          <use xlink:href="#header-icon-previous"></use>
        </svg>
        <svg viewBox="0 0 50 50" class="header-icon  header-icon-user">
          <use xlink:href="#header-icon-user"></use>
        </svg>
      </div>
      <div class="header-item  header-item-50">
        <h1>{{ $route.data.title }}</h1>
      </div>
      <div class="header-item  header-item-25">
        <svg viewBox="0 0 50 50" class="header-icon  header-icon-add">
          <use xlink:href="#header-icon-add"></use>
        </svg>
        <svg viewBox="0 0 50 50" class="header-icon  header-icon-basket">
          <use xlink:href="#header-icon-basket"></use>
        </svg>
        <svg viewBox="0 0 50 50" class="header-icon  header-icon-flag">
          <use xlink:href="#header-icon-flag"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';

.header-bar {
  position: absolute;
  top: 0;
  width: 100%;
  height: (120px / 2);
  background: $color-red;
  z-index: 900;
}

.header-navigation {
  display: flex;
  flex-flow: row wrap;
  margin-top: (40px / 2);
  height: (80px / 2);
  width: 100%;
}

  .header-item {
    display: flex;

    h1 {
      font: 1.4em "Avenir-Book", sans-serif;
      color: $color-white;
      text-align: center;
    }
  }

    .header-item-1-25 {
      flex: 1 25%;
      flex-direction: row;
      justify-content: space-around;
    }

    .header-item-50 {
      flex: 1 50%;
      flex-direction: column;
      justify-content: space-between;
    }

.header-icon {
  flex-direction: row;
  width: (60px / 2);
  height: (60px / 2);
  margin-top: (10px /2);
  fill: $color-white;
}
</style>
