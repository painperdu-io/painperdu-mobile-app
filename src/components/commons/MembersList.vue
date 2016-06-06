<template>
  <div class="members-container">
    <template v-for="(index, member) in members">
      <div v-if="comperes && index < 3" class="members-item comperes-item" v-bind:class="{ 'comperes-item': comperes }" v-link="{ path: '/profile/member' }">
        <div class="members-image">
          <img v-bind:src="member.picture"/>
        </div>
      </div>
      <div v-if="!comperes" class="members-item" v-link="{ path: '/profile/member' }">
        <div class="members-image">
          <img v-bind:src="member.picture"/>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: ['members', 'comperes'],
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
    border-radius: 0;
    overflow: hidden;
    clip-path: polygon(0% 0%, 100% 0, 100% 70%, 50% 100%, 0 70%);
    -webkit-clip-path: polygon(0% 0%, 100% 0, 100% 70%, 50% 100%, 0 70%);

    &.comperes-item {
      border-radius: 50%;
      clip-path: none;
      -webkit-clip-path: none;
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
