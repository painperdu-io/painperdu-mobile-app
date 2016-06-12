<template>
  <div class="members-container {{type}}s-container">
    <template v-for="(index, member) in members">
      <div v-if="type == 'ally'" class="members-item ally-item" v-link="{ name: 'MemberProfile', params: { id: member._id }, append: true}">
        <div class="members-name">{{ member.name.first }}</div>
        <div class="members-image">
          <img :src="member.picture"/>
        </div>
      </div>
      <div v-else class="members-item accomplice-item" v-on:click="loadProfile('MemberProfile',member._id)" >
        <div v-if="index < 4" class="members-image">
          <img :src="member.picture"/>
        </div>
      </div>
    </template>
    <div v-if="add == 'true' && type == 'accomplice' " class="accomplices-add-icon" v-on:click="addAccomplice">
      <div class="accomplices-add-icon-bg">
        <span class="accomplices-add-icon-text">+</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['members', 'type', 'add'],
  methods: {
    addAccomplice(event) {
      document.getElementsByClassName('popup-container')[0].classList.add('active');
      document.getElementsByClassName('popup-overlay')[0].classList.add('active');
      event.preventDefault()
    },
    loadProfile(destination, member){
      console.log(destination + " et " + member);
      this.$route.router.go({ name: destination, params: { id: member }, append: true });
    }
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

  &.accomplices-container {
    justify-content: flex-start;
    padding: 10px 20px;
  }
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


    &.accomplice-item {
      border-radius: 50%;
      &:first-child { margin-left: 0;}
      .members-image {
        width: 60px;
        height: 60px;
        mask-size: inherit;
        -webkit-mask-size : inherit;
      }
    }

    &.ally-item {
      .members-image {
        width: 95px;
        height: 95px;
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
      height: 55px;
      border-radius: 50%;
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
