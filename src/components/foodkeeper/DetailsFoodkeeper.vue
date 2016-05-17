<template>
  <div class="foodkeeper-details-container">
    <div class="foodkeeper-details-item-wrapper" v-link="{ path: '/foodkeeper/details' }">
      <div class="foodkeeper-details-item-background" style="background-image: url('/static/temp/{{ foodkeeper.photo }}');"></div>
      <h3 class="foodkeeper-details-item-title">{{ foodkeeper.name }}</h3>
      <div class="foodkeeper-details-item-separator"></div>
      <p class="foodkeeper-details-item-description">{{ foodkeeper.description }}</p>
    </div>
    <div class="foodkeeper-details-accomplice-wrapper">
      <h3 class="foodkeeper-details-accomplice-title">Mes compères</h3>
      <accomplices-list></accomplices-list>
    </div>
    <tabs-navigation route="DetailsFoodkeeper"></tabs-navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import AccomplicesList from './../commons/AccomplicesList'
import TabsNavigation from './../commons/navigation/TabsNavigation'

export default {
  components: {
    AccomplicesList,
    TabsNavigation,
  },
  data () {
    return {
      foodkeeper: {
        name: 'Studio Lyon',
        description: 'Description du studio',
        photo: 'home-1.jpg',
        accomplices: [
          {
            id: 75,
            name: 'Firstname Lastname',
          },
          {
            id: 54,
            name: 'Firstname Lastname',
          },
          {
            id: 23,
            name: 'Firstname Lastname',
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';

.foodkeeper-details-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1 100%;
  position: relative;
}

  .foodkeeper-details-item-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex: 1 100%;
    height: 105px;
    margin-bottom: 7px;
    text-align: center;
    background-color: $color-sepia;
  }

    .foodkeeper-details-item-background {
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      filter: blur(1px);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      margin: -1px 0 0 0;
    }

    .foodkeeper-details-item-separator {
      width: 56px;
      height: 5px;
      margin: 0 auto;
      transform: scale(0.5);
      background: url('/static/img/separator-green.png') center center no-repeat;
    }

    .foodkeeper-details-item-title,
    .foodkeeper-details-item-description {
      margin: 5px 0;
      color: $color-white;
      z-index: 10;
    }

    .foodkeeper-details-item-title {
      font: 1.5em 'Karla-Bold', sans-serif;
      text-transform: uppercase;
    }

    .foodkeeper-details-item-description {
      font: 1.2em 'Karla-Italic', sans-serif;
    }

  .foodkeeper-details-accomplice-wrapper {
    padding: 10px 30px 20px;
  }

    .foodkeeper-details-accomplice-title {
      font: 1.3em 'Karla-Italic', sans-serif;
      color: $color-text;
    }

</style>
