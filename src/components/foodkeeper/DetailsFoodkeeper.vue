<template>
  <div class="foodkeeper-details-container">
    <div class="foodkeeper-details-item-wrapper">
      <div class="foodkeeper-details-item-background" style="background-image: url('{{ foodkeeper.picture }}');"></div>
      <svg v-if="foodkeeper.favorite" viewBox="0 0 50 50" class="foodkeeper-star-icon">
        <use xlink:href="#app-icon-star"></use>
      </svg>
      <h3 class="foodkeeper-details-item-title">{{ foodkeeper.name }}</h3>
      <div class="foodkeeper-details-item-separator"></div>
      <p class="foodkeeper-details-item-description">{{ foodkeeper.description }}</p>
    </div>
    <div class="foodkeeper-details-accomplice-wrapper">
      <h3 class="foodkeeper-details-accomplice-title"><span class="underline"></span>Mes compères</h3>
      <members-list :members="accomplices" type="accomplice" add="true"></members-list>
    </div>
    <tabs-navigation :objectid="$route.params.id" route="DetailsFoodkeeper"></tabs-navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import MembersList from './../commons/MembersList'
import TabsNavigation from './../commons/navigation/TabsNavigation'

export default {
  components: {
    MembersList,
    TabsNavigation,
  },
  data() {
    return {
      foodkeeper: {},
      accomplices: [],
    };
  },
  ready() {
    const foodkeeperId = this.$route.params.id;
    const userId = '575302fc5dacbac32540268d';

    // récupére les informations sur le foodkeeper
    this.$http({ url: `foodkeepers/${foodkeeperId}`, method: 'GET' })
      .then((response) => this.foodkeeper = response.data)
      .catch(err => console.log(err));

    // récupére les informations sur les compères
    this.$http({ url: `users/${userId}/foodkeeper/${foodkeeperId}`, method: 'GET' })
      .then((response) => this.accomplices = response.data)
      .catch(err => console.log(err));
  }
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

    .foodkeeper-star-icon {
      width: 25px;
      height: 25px;
      fill: $color-white;
      z-index: 10;
      margin: 0 auto;
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
      position: relative;
      margin: 0 auto -2px;
      z-index: 1;
      display: inline-block;
      font: 1.3em 'Karla-Italic', sans-serif;
      color: $color-text;

      .underline {
        position: absolute;
        left: 0;
        bottom: 2px;
        height: 4px;
        width: 100%;
        background: $color-white;
        z-index: -1;
      }
    }
</style>
