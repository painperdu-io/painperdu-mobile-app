<template>
  <div class="members-container">
    <template v-for="(index, member) in members">
      <div v-if="comperes && index < 3" class="members-item comperes-item" v-bind:class="{ 'comperes-item': comperes }" v-link="{ path: '/profile/member' }">
        <div class="members-image">
          <img src="https://randomuser.me/api/portraits/men/{{ member.id }}.jpg"/>
        </div>
      </div>
      <div v-if="!comperes" class="members-item" v-link="{ path: '/profile/member' }">
        <div class="members-name">{{ member.name }}</div>
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
  props: ['comperes'],
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
  padding: 10px 20px;
}

  .members-item {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    position: relative;
    margin: 10px 8px;
    border-radius: 0;
    overflow: hidden;


    &.comperes-item {
      border-radius: 50%;
      .members-image {
        width: 55px;
        height: 55px;
        mask-image: none;
        -webkit-mask-image: none;
      }
    }
  }

  .members-name {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: row;
    text-transform: uppercase;
    font: 1.2em 'Karla-Italic', sans-serif;
    color: $color-text;
    margin-bottom: 5px;
  }
    .members-image {
      display: flex;
      width: 55px;
      height: 65px;
      justify-content: center;
      align-content: center;
      flex-direction: row;
      mask-image: url('/static/img/blason-1.png');
      -webkit-mask-image: url('/static/img/blason-1.png');
      mask-size: 100% 100%;
      -webkit-mask-size: 100% 100%;

      img {
        width: auto;
        height: 65px;
        filter: grayscale(100%);
        mix-blend-mode: multiply;
      }
    }
</style>
