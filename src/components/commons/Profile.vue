<template>
  <div class="profile-container">
    <div class="profile-infos status-{{ statusName }}">
      <div class="profile-infos-photo" :class="{ 'profile-accomplice': type == 'accomplice' }">
        <div class="profile-infos-photo-img">
          <img :src="profile.picture"/>
        </div>
      </div>
      <div class="profile-item-allie">
        <svg viewBox="0 0 50 50" class="profile-icon ">
          <use xlink:href="#profile-app-icon-infinite"></use>
        </svg>
      </div>
      <div class="profile-infos-text">
        <div class="col-25">
          <div class="profile-profile-app-icon-status-container profile-profile-app-icon-status-left">
            <svg viewBox="0 0 100 100" class="profile-profile-app-icon-status">
              <use xlink:href="#status-icon-{{ statusName }}" ></use>
            </svg>
          </div>
        </div>
        <div class="col-50">
          <h3 class="profile-infos-name">{{ profile.name.first }}</h3>
          <div class="profile-infos-separator"></div>
          <p class="profile-infos-status ">
            <template v-if="profile.score < 10">Artisan</template>
            <template v-if="profile.score > 10 && profile.score < 20">Soldat</template>
            <template v-if="profile.score > 20 && profile.score < 30">Menestrel</template>
            <template v-if="profile.score > 30 && profile.score < 40">Écuyer</template>
            <template v-if="profile.score > 40 && profile.score < 50">Chevalier</template>
            <template v-if="profile.score > 50">Seigneur</template>
          </p>
        </div>
        <div class="col-25">
          <div class="profile-profile-app-icon-status-container profile-profile-app-icon-status-right">
            <svg viewBox="0 0 100 100" class="profile-profile-app-icon-status">
              <use xlink:href="#status-icon-{{ statusName }}" ></use>
            </svg>
          </div>
        </div>
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
  data () {
    return {
      statusName: '',
    }
  },
  ready () {
    this.$watch('profile', () => {
      if (this.profile.score < 10) {
        this.statusName = 'artisan';
      } else if (this.profile.score > 10 && this.profile.score < 20) {
        this.statusName = 'soldat';
      } else if (this.profile.score > 20 && this.profile.score < 30) {
        this.statusName = 'menestrel';
      } else if (this.profile.score > 30 && this.profile.score < 40) {
        this.statusName = 'ecuyer';
      } else if (this.profile.score > 40 && this.profile.score < 50) {
        this.statusName = 'chevalier';
      } else {
        this.statusName = 'seigneur';
      }
    });
  }
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
      margin: 0 auto;
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

    .profile-infos-text {
      position: relative;
      display: flex;
      flex-direction: row;
      width: 298px;
      margin: auto;
      height: 120px;
      overflow: hidden;
    }

    .col-50 {
      display: flex;
      flex-direction: column;
      flex: 1 50%;
      justify-content: center;
    }

    .col-25 {
      display: flex;
      flex-direction: column;
      flex: 1 25%;
      justify-content: center;
      text-align: center;
      text-align: -webkit-center;
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
        width: 40px;
        box-sizing: border-box;
        svg {
          height: 100%;
        }
      }
      .profile-profile-app-icon-status-left { transform: scaleX(-1);}
    }

    .profile-description {
      display: flex;
      justify-content: center;
      flex-direction: row;
      flex: 1 100%;
    }

    .profile-description-text {
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 85%;
      font: 1.2em 'Karla-Italic', sans-serif;
      color: $color-text;
      margin-top: 0px;
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
      svg {
        width: 18px;
        margin-top: 4px;
      }
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
