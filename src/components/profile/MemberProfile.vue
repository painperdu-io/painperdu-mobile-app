<template>
  <div class="member-profile-container">
    <div class="app-icon-container">
      <svg viewBox="0 0 50 50" class="app-icon">
        <use xlink:href="#header-icon-flag"></use>
      </svg>
    </div>
    <profile :profile="profile" type="type"></profile>
    <div class="member-profile-statistics-wrapper">
      <div class="member-profile-statistics">
        <div class="member-profile-statistics-item">
          <p class="legend">Nombre d'échanges</p>
          <p class="value">8</p>
          <span class="underline"></span>
        </div>
        <div class="member-profile-statistics-item">
          <p class="legend">Avis moyen</p>
          <p class="value green">Parfait</p>
          <span class="underline"></span>
        </div>
        <div v-if="accomplices.length" class="member-profile-statistics-item">
          <p class="legend">Ses compères </p>
          <span class="underline"></span>
        </div>
        <div v-if="accomplices.length"  class="member-profile-accomplices-wrapper">
          <members-list :members="accomplices" type="accomplice" add="false"></members-list>
        </div>
      </div>
    </div>
    <div class="already-allie" v-if="profile.allie">
      <div class="profile-item-allie">
        <svg viewBox="0 0 100 100" class="profile-icon">
          <use xlink:href="#app-icon-infinite"></use>
        </svg>
      </div>
      <h3 class="text">Vous vous êtes déjà allié avec Laurie !<h3>
      <p class="see-alliance">Voir l'historique de vos alliances</p>
    </div>
  </div>
</template>

<script>
import Profile from './../commons/Profile'
import MembersList from './../commons/MembersList'

export default {
  components: {
    Profile,
    MembersList,
  },
  data() {
    return {
      profile: {},
      accomplices: {},
    };
  },
  ready() {
    const userId = this.$route.params.id;

    // récupérer le profile en fonction de l'id de l'utilisateur
    this.$http({ url: `users/${userId}`, method: 'GET' })
      .then((response) => { this.profile = response.data; })
      .catch(err => { console.log(err); });

    // récupérer les compères d'un utilisateur
    this.$http({ url: `users/${userId}/accomplices`, method: 'GET' })
      .then((response) => { this.accomplices = response.data; })
      .catch(err => { console.log(err); });
  }
};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';

.member-profile-container {
  margin-top: 40px;
}

  .member-profile-statistics-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    margin: 20px auto 0;
    width: 298px;
    background: url('/static/img/rectangle-red.png');
    background-size: 100% 100%;
    background-position: center center;
    background-repeat: no-repeat;
  }

    .member-profile-statistics {
      padding: 18px 0 15px 0;
    }

      .member-profile-statistics-item {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        margin: 0 auto;
        width: 235px;
        height: 34px;
        text-transform: uppercase;
        font: 1.3em 'Karla-Regular', sans-serif;
        color: $color-text;

        .value {
          font: 1.2em 'Karla-Bold', sans-serif;
          color: $color-green;
          z-index: 1;
          &.green {
            color: #4ce08a;
          }
        }

        & > p {
          display: inline-block;
        }
      }

  .member-profile-accomplices-wrapper {
    margin: 0px auto 10px;
    width: 298px;
  }

  .legend { position: relative; z-index: 1;
    .underline { bottom: 0px; }
  }

  .underline {
    position: absolute;
    left: 0;
    bottom: 10px;
    height: 6px;
    width: 100%;
    background-color: $color-white;
    z-index: 0;
  }

  .already-allie {
    margin-top: 20px;
    text-align: center;
    .text {
      color: $color-text;
    }
    .see-alliance {
      color: $color-green;
      text-decoration: underline;
      text-transform: uppercase;
    }
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

  .app-icon-container {
    position: absolute;
    width: 32px;
    height: 20px;
    padding: 3px;
    box-sizing: border-box;
    fill: $color-red;
    z-index: 10;
    right: 40px;
    top: 45px;
    transform: translate3d(-50%,-50%,0);
  }
</style>
