<template>
  <div class="foodkeeper-container">
    <template v-for="foodkeeper in foodkeepers">
      <div class="foodkeeper-item" v-link="{ path: '/foodkeeper/details/stats' }">
        <div class="foodkeeper-item-background" style="background-image: url('/static/temp/{{ foodkeeper.photo }}');"></div>
        <svg v-if="foodkeeper.favorite" viewBox="0 0 50 50" class="foodkeeper-star-icon">
          <use xlink:href="#app-icon-star"></use>
        </svg>
        <input id="user-dispo" type="checkbox">
        <label for="userdispo"></label>
        <h3 class="foodkeeper-item-title">{{ foodkeeper.name }}</h3>
        <div class="foodkeeper-item-separator"></div>
        <p class="foodkeeper-item-description">{{ foodkeeper.description }}</p>
      </div>
    </template>

    <div class="foodkeeper-add" v-link="{ path: '/foodkeeper/add' }">
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
      foodkeepers: [
        {
          name: 'Studio Annecy',
          description: 'Description du studio',
          photo: 'home-1.jpg',
          favorite: true,
        },
        {
          name: 'Chez Papa/Maman',
          description: 'Description du studio',
          photo: 'home-1.jpg',
          favorite: false,
        },
        {
          name: 'Megalo',
          description: 'Description du studio',
          photo: 'home-1.jpg',
          favorite: false,
        },
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';

.foodkeeper-item {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1 100%;
  height: 125px;
  margin-bottom: 7px;
  text-align: center;
  background-color: $color-sepia;
}

  .foodkeeper-item-background {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    //filter: grayscale(100%);
    filter: blur(1px);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    //mix-blend-mode: multiply;
    margin: -1px 0 0 0;
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
  background: $color-green-lite;
  opacity: 0.8;
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
      background: $color-white;
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

    input[type="checkbox"] {
      display: none;
    }

    label {
      position: absolute;
      display: inline-block;
      width: 40px;
      height: 20px;
      margin: 12px 0;
      transition: 0.3s;
      box-sizing: border-box;
      right: 10px;
      top: 0px;
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

    #user-dispo:checked + label{
      background: $color-green;
    }

    #user-dispo:checked + label:after {
      left: calc(100% - 18px);
      background: $color-white;
    }

    #user-dispo + label {
      background: $color-gray;
      border-radius: 20px;
    }

    #user-dispo + label:after{
      background: $color-white;
      border-radius: 50%;
      width: 16px;
      height: 16px;
      top: 2px;
      left: 2px;
    }

</style>
