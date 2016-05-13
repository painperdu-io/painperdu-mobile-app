<template>
  <div class="details-market-members-container">
    <template v-for="member in members">
      <div class="details-market-members-item" v-link="{ path: '/profile/member/:id' }">
        <div class="details-market-members-image">
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

.details-market-members-container {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
}

  .details-market-members-item {
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
  }

    .details-market-members-image {
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
