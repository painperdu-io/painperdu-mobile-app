<template>
  <div class="profile-container">
    <div class="profile-infos">
      <div class="profile-infos-photo">
        <div class="profile-infos-photo-img">
          <img src="https://randomuser.me/api/portraits/men/{{ profile.id }}.jpg"/>
        </div>
      </div>
      <h3 class="profile-infos-name">{{ profile.name }}</h3>
      <div class="profile-infos-separator"></div>
      <p class="profile-infos-status">{{ profile.status }}</p>
    </div>
    <div class="profile-description">
      <p class="profile-description-text">{{ profile.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      profile: {
        id: '12',
        name: 'Adrien',
        status: 'Petit écuyer',
        description: 'Haec igitur prima lex amicitiae sanciatur, ut ab amicis honesta petamus, amicorum causa honesta faciamus, ne exspectemus quidem, dum rogemur; studium semper Incenderat autem audaces.',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';

.profile-container {
  text-align: center;
}

  .profile-infos {}

    .profile-infos-photo {
      position: relative;
      margin: 12px auto;
      width: 125px;
      height: 125px;
      border-radius: 50%;
      overflow: hidden;
    }

      .profile-infos-photo-img {
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        background-color: $color-sepia;

        img {
          width: 125px;
          height: 125px;
          filter: grayscale(100%);
          mix-blend-mode: multiply;
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
      font: bold 2.5em 'IowanOldStyleBT-BlackItalic', sans-serif;
      text-transform: capitalize;
      color: $color-red;
    }

    .profile-infos-status {
      font: 1.3em 'Karla-Regular', sans-serif;
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
</style>
