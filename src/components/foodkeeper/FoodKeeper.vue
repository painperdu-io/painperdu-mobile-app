<template>
  <div class="foodkeeper-container animated">
    <template v-for="(index,foodkeeper) in foodkeepers">
      <div class="foodkeeper-item animated" :class="{ 'active': index }">
        <div class="user-dispo-wrapper">
          <input id="user-dispo" type="checkbox" v-model="index" checked>
          <label for="userdispo"></label>
        </div>
        <div class="foodkeeper-item-background" :style="{ 'background-image': 'url(' + foodkeeper.picture + ')' }"></div>
        <svg v-if="foodkeeper.favorite" viewBox="0 0 50 50" class="foodkeeper-star-icon">
          <use xlink:href="#app-icon-star"></use>
        </svg>
        <h3 v-link="{ name: 'DetailsFoodkeeperProducts', params: { id: foodkeeper._id }}" class="foodkeeper-item-title">{{ foodkeeper.name }}</h3>
        <div class="foodkeeper-item-separator"></div>
        <p class="foodkeeper-item-description">{{ foodkeeper.description }}</p>
      </div>
    </template>

    <div class="foodkeeper-add animated" v-link="{ path: '/foodkeeper/add' }">
      <div class="foodkeeper-add-icon">
        <div class="foodkeeper-add-icon-bg">
          <span class="foodkeeper-add-icon-text">+</span>
        </div>
      </div>
      <div class="foodkeeper-add-text-wrapper">
        <h3 class="foodkeeper-add-title">Créer un garde-manger</h3>
        <p class="foodkeeper-add-description">
          Pour rejoindre un garde-manger existant,
          demandez à son administrateur de vous
          ajouter en tant que compère.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foodkeepers: [],
      show: true,
    };
  },
  methods: {
    loadFoodkeeperDetails(foodkeeperId, transition){
      var el = event.target;
      if (el.classList.contains(transition) ) {
        el.classList.remove(transition);
      } else {
        el.classList.add(transition);
      }
      setTimeout(() => this.$route.router.go({ name: 'DetailsFoodkeeperProducts', params: { id: foodkeeperId }}), 100);
    },

  },
  ready() {
    // récupérer la liste des foodkeepers
    this.$http({ url: `users/${global.currentUserId}`, method: 'GET' })
      .then((response) => this.foodkeepers = response.data.foodkeepers)
      .catch(err => console.log(err));
  }
};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';

.foodkeeper-container {
}

.foodkeeper-item {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1 100%;
  height: 125px;
  margin-bottom: 7px;
  text-align: center;
  filter:grayscale(1);
  transition: all 1s;
  &:before {
    content: "";
    display: inline-block;
    position: absolute;
    top: -1px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.4);
  }
  &.active {
    filter:grayscale(0);
  }
}

  .foodkeeper-item-background {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    //mix-blend-mode: multiply;
    margin: -1px 0 0 0;
    z-index: 0;
  }

  .foodkeeper-item-separator {
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

  .foodkeeper-item-title,
  .foodkeeper-item-description {
    margin: 5px 0;
    color: $color-white;
    z-index: 10;
  }

  .foodkeeper-item-title {
    font: 1.5em 'Karla-Bold', sans-serif;
    text-transform: uppercase;
  }

  .foodkeeper-item-description {
    font: 1.2em 'Karla-Italic', sans-serif;
  }

.foodkeeper-add {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex: 1 100%;
  height: 125px;
  margin: 7px 0;
  background: rgba(0,224,201,0.5);
  opacity:1 ;
}

  .foodkeeper-add-icon {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex: 1 30%;
  }

    .foodkeeper-add-icon-bg {
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin: 0 auto;
      width: 80px;
      height: 80px;
      background-color: $color-white;
      border-radius: 50%;
    }

    .foodkeeper-add-icon-text {
      text-align: center;
      font: 3em 'Karla-Regular', sans-serif;
      color: $color-red;
    }

  .foodkeeper-add-text-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex: 1 55%;
  }

    .foodkeeper-add-title,
    .foodkeeper-add-description {
      margin: 5px 0;
      color: $color-white;
      z-index: 10;
    }

    .foodkeeper-add-title {
      font: 1.5em 'Karla-Bold', sans-serif;
      text-transform: uppercase;
      color: $color-white;
    }

    .foodkeeper-add-description {
      font: 1.2em 'Karla-Italic', sans-serif;
    }

    label {
      position: relative;
      display: inline-block;
      width: 45px;
      height: 25px;
      margin: 0 auto;
      transition: 0.3s;
      box-sizing: border-box;
      &:after{
        content: '';
        display: block;
        position: absolute;
        left: 0px;
        top: 0px;
        width: 20px;
        height: 20px;
        transition: 0.3s;
      }
    }

    .user-dispo-wrapper {
      position: absolute;
      top: 50px;
      right: 10px;
      z-index: 1;
    }

    #user-dispo {
      width: 100%;
      height: 15px;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      z-index: 1;
    }

    #user-dispo:checked + label{
      background: $color-green;
    }

    #user-dispo:checked + label:after {
      left: calc(100% - 22px);
      background: $color-white;
    }

    #user-dispo + label {
      background: $color-gray;
      border-radius: 20px;
    }

    #user-dispo + label:after{
      background: $color-white;
      border-radius: 50%;
      top: 2px;
      left: 2px;
    }
</style>
