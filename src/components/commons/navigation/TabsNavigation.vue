<template>
  <div class="tabs-navigation-container">
    <nav class="tabs-navigation-wrapper">
      <template v-for="tab in tabs">
        <div class="tabs-navigation-item" v-link="{ path: tab.path, activeClass: 'active' }">{{ tab.name }}</div>
      </template>
    </nav>
    <div class="tabs-navigation-active"></div>
  </div>
</template>

<script>
import { tabsNavigation } from './../../../vuex/getters'

export default {
  vuex: {
    getters: {
      tabs: tabsNavigation,
    },
  },
};
</script>

<style lang="scss" scoped>
@import './../../../styles/variables.scss';

.tabs-navigation-container {
  position: relative;
  width: 100%;
  height: 60px;
  background: $color-white;
  z-index: 400;
  overflow: hidden;
}

  .tabs-navigation-active {
    position: absolute;
    bottom: 0;
    left: 33%;
    height: 3px;
    width: 33%;
    background: $color-red;
  }

  .tabs-navigation-wrapper {
    display: flex;
    flex-flow: row wrap;
    height: 55px;
    width: 100%;
  }

    .tabs-navigation-item {
      display: flex;
      justify-content: center;
      flex-direction: column;
      flex: 1 33%;
      font: 1.3em 'Karla-Regular', sans-serif;
      color: $color-text;
      text-align: center;
      text-transform: uppercase;
      text-decoration: none;
      border-right: 1px solid $color-gray;

      &:last-child {
        border-right: none;
      }

      &.active {
        font-weight: bold;
        color: $color-red;
      }
    }
</style>
