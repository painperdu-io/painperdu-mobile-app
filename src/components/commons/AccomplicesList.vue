<template>
  <div class="accomplices-container">
    <template v-for="accomplice in accomplices">
      <div class="accomplices-item" v-link="{ path: '/profile/member' }">
        <div class="accomplices-image">
          <img src="https://randomuser.me/api/portraits/men/{{ accomplice.id }}.jpg"/>
        </div>
      </div>
    </template>
    <div class="accomplices-add-icon"  v-link="{ path: '/foodkeeper/add/accomplice' }">
      <div class="accomplices-add-icon-bg">
        <span class="accomplices-add-icon-text">+</span>
      </div>
    </div>
  </div>
</template>

<script>
import { detailsFoodkeeperAccomplices } from './../../vuex/getters'

export default {
  vuex: {
    getters: {
      accomplices: detailsFoodkeeperAccomplices,
    },
  },
};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';

.accomplices-container {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: row;
  flex-wrap: wrap;
}

  .accomplices-item {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: row;
    position: relative;
    margin: 9px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
  }

    .accomplices-image {
      display: flex;
      justify-content: center;
      align-content: center;
      flex-direction: column;
      background-color: $color-sepia;

      img {
        width: 60px;
        height: 60px;
        filter: grayscale(100%);
        mix-blend-mode: multiply;
      }
    }

  .accomplices-add-icon {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: row;
  }

    .accomplices-add-icon-bg {
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin: 9px;
      width: 60px;
      height: 60px;
      background: $color-white;
      border-radius: 50%;
      box-shadow: 0px 3px 10px rgba(0,0,0, 0.2);
    }

    .accomplices-add-icon-text {
      text-align: center;
      font: 3em 'Karla-Regular', sans-serif;
      color: $color-red;
    }
</style>
