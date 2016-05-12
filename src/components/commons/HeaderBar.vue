<template>
  <div class="header-bar">
    <div class="header-navigation">
      <div class="header-item  header-item-25">
        <a class="header-icon  header-icon-previous"></a>
        <a class="header-icon  header-icon-user"></a>
      </div>
      <div class="header-item  header-item-50">
        <h1>{{ $route.data.title }}</h1>
      </div>
      <div class="header-item  header-item-25">
        <a class="header-icon  header-icon-add"></a>
        <a class="header-icon  header-icon-basket"></a>
        <a class="header-icon  header-icon-flag"></a>
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
    justify-content: space-between;
    flex-direction: column;

    h1 {
      font: 1.4em "Avenir-Book", sans-serif;
      color: $color-white;
      text-align: center;
    }
  }

    .header-item-25 {
      flex: 1 25%;
    }

    .header-item-50 {
      flex: 1 50%;
    }

.header-icon {
  width: (60px / 2);
  height: (60px / 2);
  display: block;
}

  .header-icon-add {
    background: url('/static/icons/header-add.svg') center center no-repeat;
  }

  .header-icon-basket {
    background: url('/static/icons/header-basket.svg') center center no-repeat;
  }

  .header-icon-flag {
    background: url('/static/icons/header-flag.svg') center center no-repeat;
  }

  .header-icon-previous {
    background: url('/static/icons/header-previous.svg') center center no-repeat;
  }

  .header-icon-user {
    background: url('/static/icons/header-user.svg') center center no-repeat;
  }
</style>
