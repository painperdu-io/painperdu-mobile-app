<template>
  <div class="me-profile-container">
    <div class="me-profile-infos-wrapper">
      <profile></profile>
      <div class="me-profile-btn-public">Voir le profil public</div>
    </div>
    <div class="me-profile-accomplices-wrapper">
      <h3 class="me-profile-accomplices-title">Mes compères</h3>
      <accomplices-list></accomplices-list>
    </div>
    <div class="me-profile-form-wrapper">
      <div class="me-profile-form-item">
        <label class="me-profile-form-item-label" for="mail">Email</label>
        <input id="mail" class="me-profile-form-item-input" type="email"></input>
      </div>
      <div class="me-profile-form-item">
        <label class="me-profile-form-item-label" for="address">Adresse</label>
        <input id="address" class="me-profile-form-item-input" type="text"></input>
      </div>
    </div>
  </div>
</template>

<script>
import AccomplicesList from './../commons/AccomplicesList'
import Profile from './../commons/Profile'

export default {
  components: {
    AccomplicesList,
    Profile,
  },
};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';

.me-profile-container {}

  .me-profile-infos-wrapper {
    margin: 20px 0 10px;
  }

    .me-profile-btn-public {
      margin: 0 auto;
      width: 170px;
      padding: 18px 0;
      border-radius: 25px;
      background-color: $color-beige;
      font: 1.3em 'Karla-Bold', sans-serif;
      color: $color-text;
      text-transform: uppercase;
      text-align: center;
    }

  .me-profile-accomplices-wrapper {
    padding: 10px 30px 20px;
  }

    .me-profile-accomplices-title {
      font: 1.3em 'Karla-Italic', sans-serif;
      color: $color-text;
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
    }

      .me-profile-form-item-label {
        margin-bottom: 10px;
        font: 1.2em 'Karla-Italic', sans-serif;
        color: $color-text;
      }

      .me-profile-form-item-input {
        margin-top: -5px;
        padding-bottom: 5px;
        font: 1.3em 'Karla-Regular', sans-serif;
        border: none;
        border-bottom: 1px solid $color-gray;
        color: $color-text;

        &:hover {
          font: 1.3em 'Karla-Bold', sans-serif;
          border-bottom: 2px solid $color-green;
        }
      }
</style>
