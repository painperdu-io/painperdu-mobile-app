<template>
  <div class="profile-container">
    <div class="profile-infos status-{{ statusName }}">
      <div class="profile-infos-photo" :class="{ 'profile-accomplice': type == 'accomplice' }">
        <div class="profile-infos-photo-img">
          <img :src="profile.picture"/>
        </div>
      </div>
      <div class="profile-item-allie" v-if="false">
        <svg viewBox="0 0 100 100" class="profile-icon ">
          <use xlink:href="#profile-app-icon-infinite"></use>
        </svg>
      </div>
      <h3 class="profile-infos-name">{{ profile.name.first }}</h3>
      <div class="profile-infos-separator"></div>
      <p class="profile-infos-status ">{{ statusName }}</p>

      <div class="profile-profile-app-icon-status-container profile-profile-app-icon-status-left">
        <svg viewBox="0 0 100 100" class="profile-profile-app-icon-status">
          <use xlink:href="#status-icon-{{ statusName }}" ></use>
        </svg>
      </div>
      <div class="profile-profile-app-icon-status-container profile-profile-app-icon-status-right">
        <svg viewBox="0 0 100 100" class="profile-profile-app-icon-status">
          <use xlink:href="#status-icon-{{ statusName }}" ></use>
        </svg>
      </div>
    </div>
    <div v-if="profile.profile.description" class="profile-description">
      <p class="profile-description-text">{{ profile.profile.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['profile', 'type'],
  computed: {
    statusName() {
      const status = [
        { score: 10, name: 'artisan' },
        { score: 20, name: 'soldat' },
        { score: 30, name: 'menestrel' },
        { score: 40, name: 'ecuyer' },
        { score: 50, name: 'chevalier' },
        { score: 60, name: 'seigneur' },
      ];

      for (let i = 0; i < status.length; i++) {
        if (3 < status[i].score) {
          return status[i].name;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';

.profile-container {
  text-align: center;
  max-width: 320px;
  margin: auto;
}

  .profile-infos {
    position: relative;
  }

    .profile-infos-photo {
      position: relative;
      margin: 0 auto 20px;
      border-radius: 0;
      width: 100px;
      height: 115px;
      mask-image: url('/static/img/blason-1.png');
      -webkit-mask-image: url('/static/img/blason-1.png');
      mask-size: 100% 100%;
      -webkit-mask-size: 100% 100%;

      &.profile-accomplice {
        width: 125px;
        height: 125px;
        border-radius: 50%;
        overflow: hidden;
        mask-image: initial;
        -webkit-mask-image: initial;
      }
    }

      .profile-infos-photo-img {
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        img {
          width: 125px;
          height: 125px;
          //mix-blend-mode: multiply;
        }


      }

    .profile-infos-separator {
      width: 56px;
      height: 5px;
      margin: 0 auto;
      transform: scale(0.5);
      background: url('/static/img/separator-green.png') center center no-repeat;
    }

    .profile-infos-name,
    .profile-infos-status {
      margin: 5px 0;
      color: $color-text;
      z-index: 10;

    }

    .profile-infos-name {
      font: 300 2.5em 'IowanOldStyleBT-BlackItalic', sans-serif;
      text-transform: capitalize;
      color: $color-red;
    }

    .profile-infos-status {
      font: 1.3em 'Karla-Regular', sans-serif;
      text-transform: capitalize;
    }

    .status-artisan,
    .status-chevalier,
    .status-seigneur,
    .status-ecuyer,
    .status-soldat,
    .status-menestrel {
      .profile-profile-app-icon-status-container{
        position: absolute;
        bottom:20px;
        width: 40px;
        box-sizing: border-box;
      }
      .profile-profile-app-icon-status-left { transform: scaleX(-1);}
      .profile-profile-app-icon-status-right {
        right: 0;
      }
    }

    .profile-description {
      display: flex;
      justify-content: center;
      flex-direction: row;
      flex: 1 100%;
      height: 100px;
    }

    .profile-description-text {
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 75%;
      font: 1.2em 'Karla-Italic', sans-serif;
      color: $color-text;
    }

    .profile-item-allie {
      position: absolute;
      right: 33%;
      top: -14px;
      width: 28px;
      height: 28px;
      line-height: 28px;
      text-align: center;
      fill: $color-white;
      background: $color-blue;
      border-radius: 50%;
    }

    .profile-app-icon-container {
      position: absolute;
      width: 35px;
      height: 35px;
      padding: 3px;
      box-sizing: border-box;
      border-radius: 50%;
      background-color: $color-green;
      fill: $color-white;
      z-index: 10;
      right: 40px;
      top: 0px;
    }
</style>
