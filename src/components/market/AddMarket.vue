<template>
  <div>
    <div id="map">
    </div>
      <form>
        <div>Quel garde-manger souhaitez-vous associer à ce clan ?</div>
        <select v-model="address">
          <option v-for="place in places" v-bind:value="place.name">
            {{ place.name }}
          </option>
        </select>
        <div> L'adresse de <span class="txt-uppercase"> {{ address }}</span> est : </div>
        <div class="cart-item-separator"></div>

        <div class="txt-red"><span> {{ selected }}  Adresse complete </span></div>
        <fieldset>
          <h2>Périmètre</h2>
          <input type="range" value="15" max="100" min="0" step="3">
          <div> Votre <span class="txt-uppercase"> {{ selected }}</span> est : </div>
          <div class="cart-item-separator"></div>

          <div class="txt-red"><span> {{ selected }} Test</span></div>

          <input type="submit" class="button" value="Ajouter">
        </fieldset>
      </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      places: [
        {name: 'maison', address: '12 rue du Trésum'},
        {name: 'boulot', address: '63 route du Périmètre'},
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
  @import './../../styles/variables.scss';

  #map {
    background-color: $color-white;
    min-height: 150px;
    margin-bottom: 30px;
  }

  .txt-uppercase {
    text-transform: uppercase;
    font-family: 'Karla-Italic';
    font-weight: 700;
  }
  .txt-red {
    font-family: 'Baskerville-Bold';
    font-size: (3.6em / 2);
    color: $color-red;
    font-style: italic;
    span {
      content: " ";
      display: inline-block;
      border-bottom: 12px solid $color-white;
      line-height: 10px;
    }
  }

  .cart-item-separator {
    width: 56px;
    height: 5px;
    margin: (30px / 2) auto;
    transform: scale(0.5);
    background: url('/static/img/separator-green.png') center center no-repeat;
  }

  form {
    text-align: center;
    color: $color-text;
    font-family: 'Karla-Italic';
    font-size: (2.4em / 2);
    fieldset {
      border: none;
      background-color: $color-white;
      margin: (50px / 2) 0 0;
      padding: (50px / 2);
    }
    select {
      width: (525px / 2);
      background-color: $color-green-lite;
      border: none;
      color: white;
      border-radius: (80px / 4);
      height: (80px / 2);
      box-sizing: border-box;
      font-style: italic;
      text-transform: capitalize;
      text-align-last:center;
      margin: 20px 0 25px;
      option {
        text-align: center;
        text-transform: capitalize;
      }
    }
  }

  .button {
    color: $color-text;
    background-color: $color-beige;
    text-transform: uppercase;
    margin: (60px / 2) auto 0;
    border: none;
    height: (80px / 2);
    border-radius: (80px / 4);
    padding: (20px / 2) (60px / 2);
  }
</style>
