<template>
  <div class="me-profile-container">
    <div class="me-profile-infos-wrapper">
      <profile :profile="profile" type="accomplice"></profile>
      <div class="me-profile-statistics-wrapper">
        <div class="me-profile-statistics">
          <div class="me-profile-statistics-item">
            <p class="legend">Nombre d'échanges</p>
            <p class="value">8</p>
            <span class="underline"></span>
          </div>
          <div class="me-profile-statistics-item">
            <p class="legend">Avis moyen</p>
            <p class="value green">Parfait</p>
            <span class="underline"></span>
          </div>
        </div>
      </div>
      <div class="me-profile-btn-public" v-link="{ name: 'MemberProfile', params: { id: currentUserId }}">Voir le profil public</div>
    </div>
    <div class="me-profile-form-wrapper">
      <div class="me-profile-form-item">
        <input id="mail" class="me-profile-form-item-input" type="email"></input>
        <label class="me-profile-form-item-label" for="mail">Email</label>
      </div>
      <div class="me-profile-form-item">
        <input id="address" class="me-profile-form-item-input" type="text"></input>
        <label class="me-profile-form-item-label" for="address">Adresse</label>
      </div>
    </div>
  </div>
</template>

<script>
import Profile from './../commons/Profile'

export default {
  components: {
    Profile,
  },
  data() {
    return {
      currentUserId: global.currentUserId,
      profile: {
        name: {
          first: '',
          last: '',
        },
        profile: {
          description: '',
        },
      },
    }
  },
  ready() {
    // récupérer le profile en fonction de l'id de l'utilisateur
    this.$http({ url: `users/${global.currentUserId}`, method: 'GET' })
      .then((response) => this.profile = response.data)
      .catch(err => console.log(err));
  }
};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';

.me-profile-container {}

  .me-profile-infos-wrapper {
    margin: 20px 0 10px;
  }

  .me-profile-statistics-wrapper {
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

    .me-profile-statistics {
      padding: 18px 0 50px 0;
    }

      .me-profile-statistics-item {
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

  .me-profile-accomplices-wrapper {
    margin: 0px auto 10px;
    width: 298px;
  }

  .legend {
    position: relative;
    z-index: 1;
    .underline { bottom: 0px; }
  }

  .underline {
    position: absolute;
    left: 0;
    bottom: 10px;
    height: 6px;
    width: 100%;
    background-color: $color-beige;
    z-index: 0;
  }

    .me-profile-btn-public {
      margin: -25px auto 25px;
      width: 170px;
      padding: 18px 0;
      border-radius: 25px;
      background-color: $color-beige;
      font: 1.3em 'Karla-Bold', sans-serif;
      color: $color-text;
      text-transform: uppercase;
      text-align: center;
    }


  .me-profile-form-wrapper {
    display: flex;
    flex-direction: column;
    position: relative;
    background: $color-white;
    padding: 10px 0;
  }

    .me-profile-form-item {
      display: flex;
      flex-direction: column;
      padding: 10px 30px;
      position: relative;
      min-height: 45px;
    }

      .me-profile-form-item-label {
        position: absolute;
        top: 0;
        margin-bottom: 10px;
        font: 1.2em 'Karla-Italic', sans-serif;
        color: $color-text;
      }

      .me-profile-form-item-input {
        margin-top: -5px;
        padding-top: 15px;
        padding-bottom: 5px;
        font: 1.3em 'Karla-Regular', sans-serif;
        border: none;
        border-bottom: 1px solid $color-gray;
        color: $color-text;

        &:hover, &:focus {
          font: 1.3em 'Karla-Bold', sans-serif;
          border-bottom: 2px solid $color-green;
          + label {
            color: $color-green;
          }
        }
      }
</style>
