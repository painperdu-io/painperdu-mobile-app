<template>
  <div class="member-profile-container">
    <profile></profile>
    <div class="member-profile-statistics-wrapper">
      <div class="member-profile-statistics">
        <div class="member-profile-statistics-item">
          <p class="legend">Nombre d'échanges</p>
          <p class="value">8</p>
          <span class="underline"></span>
        </div>
        <div class="member-profile-statistics-item">
          <p class="legend">Avis moyen</p>
          <p class="value">Parfait</p>
          <span class="underline"></span>
        </div>
        <div class="member-profile-statistics-item">
          <p class="legend">Ses compères <span class="underline"></span></p>
        </div>
        <div class="member-profile-accomplices-wrapper">
          <members-list></members-list>
        </div>
      </div>
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
    margin: 0 auto;
    width: 298px;
    background: url('/static/img/rectangle-red.png');
    background-size: 100% 100%;
    background-position: center center;
    background-repeat: no-repeat;
  }

    .member-profile-statistics {
      padding: 18px 0 0 0;
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
        }

        & > p {
          display: inline-block;
        }
      }

  .member-profile-accomplices-wrapper {
    margin: 0px auto 10px;
    width: 298px;
  }

  .legend { position: relative;
    .underline { bottom: 0px; }
  }

  .underline {
    position: absolute;
    left: 0;
    bottom: 10px;
    height: 6px;
    width: 100%;
    background-color: $color-white;
    z-index: -1;
  }

</style>
