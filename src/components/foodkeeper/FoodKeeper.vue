<template>
  <div class="foodkeeper-container">
    <template v-for="foodkeeper in foodkeepers">
      <div class="foodkeeper-item" v-link:"{ path: '/foodkeeper/:id' }">
        <div class="foodkeeper-item-background" style="background-image: url('/static/temp/{{ foodkeeper.photo }}');"></div>
        <div class="foodkeeper-item-background-color"></div>
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
<div>
  <div v-link="{ path: '/foodkeeper/members' }">Mes compères</div>
  <div v-link="{ path: '/foodkeeper/products' }">Denrées proposées</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      foodkeepers: [
        {
          name: 'Studio Lyon',
          description: 'Description du studio',
          photo: 'home-1.jpg',
        },
        {
          name: 'Maison Maman',
          description: 'Description du studio',
          photo: 'home-1.jpg',
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
  height: (250px / 2);
  margin-bottom: (14px / 2);
  text-align: center;
}

  .foodkeeper-item-background,
  .foodkeeper-item-background-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .foodkeeper-item-background {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    filter: grayscale(100%);
  }

  .foodkeeper-item-background-color {
    background-color: rgba(247, 232, 218, 0.2);
  }

  .foodkeeper-item-separator {
    width: 56px;
    height: 5px;
    margin: 0 auto;
    transform: scale(0.5);
    background: url('/static/img/separator-green.png') center center no-repeat;
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
  height: (250px / 2);
  margin: (14px / 2) 0;
  background: $color-green-lite;
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
      width: (160px / 2);
      height: (160px / 2);
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
      font: 1.5em "Karla-Bold", sans-serif;
      text-transform: uppercase;
      color: $color-white;
    }

    .foodkeeper-add-description {
      font: 1.2em 'Karla-Italic', sans-serif;
    }
</style>
