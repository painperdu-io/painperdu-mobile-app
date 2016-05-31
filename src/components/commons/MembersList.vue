<template>
  <div class="members-container">
    <template v-for="member in members">
      <div class="members-item" v-bind:class="{ 'allie-item': allie }" v-link="{ path: '/profile/member' }">
        <div class="members-image">
          <img src="https://randomuser.me/api/portraits/men/{{ member.id }}.jpg"/>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { detailsMarketMembers } from './../../vuex/getters'

export default {
  vuex: {
    getters: {
      members: detailsMarketMembers,
    },
  },
};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';

.members-container {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
}

  .members-item {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: row;
    position: relative;
    margin: 12px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;

    &.allie-item {
      border-radius: 0;
      clip-path: polygon(0% 0%, 100% 0, 100% 70%, 50% 100%, 0 70%);
    }
  }

    .members-image {
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
</style>
