<template>
  <div> @todo User </div>
  <div> @todo Product </div>

  <div class="steps-summary">
    <h3 class="title-section">Suivi de mes actions</h3>
    <div class="profile-infos-separator"></div>

    <fieldset class="step my-side">
      <legend>
        <svg viewBox="0 0 100 100" class="search-icon search-icon-right">
          <use xlink:href="#app-icon-close"></use>
        </svg>
      </legend>
      <form>
        <h3>
          Laissez un avis à Ludovic <br>
          Votre échange était :
        </h3>
        <select class="market-add-form-select" v-model="selectedProductType">
          <option>Parfait</option>
          <option>Moyen</option>
        </select>
      </form>
    </fieldset>
    <div class="alliance-action-button">Valider</div>

    <fieldset class="step user-side">
      <legend>
        <svg viewBox="0 0 100 100" class="search-icon search-icon-right">
          <use xlink:href="#app-icon-close"></use>
        </svg>
      </legend>
      <form>
        <h3>Avez-vous récupéré le produit ?</h3>
      </form>
    </fieldset>
    <div class="alliance-action-button">Oui</div> <div class="alliance-action-button">Non</div>

    <div class="user-address">
      Les cordoonnées de Ludovic sont :
      Appartement 5, étage 2 <br>
      20 rue du Trésum <br>
      74000 Annecy
    </div>

    <fieldset class="step my-side">
      <legend>
        <svg viewBox="0 0 100 100" class="search-icon search-icon-right">
          <use xlink:href="#app-icon-close"></use>
        </svg>
      </legend>
        <h3>Ludovic est disponible :</h3>
        <div class="date-day">Jeudi 28/02/16</div>
        <span class="date-hours">Entre 10h et 12h</span>
    </fieldset>

    <fieldset class="step user-side">
      <legend>
        <svg viewBox="0 0 100 100" class="search-icon search-icon-right">
          <use xlink:href="#app-icon-close"></use>
        </svg>
      </legend>
      <form>
        <h3>Ludovic n'est pas disponible aujourd'hui mais il vous propose les créneaux suivants</h3>
        <div class="multiple-dates">
          <input type="radio" id="date-1" class="filter"value="false" v-model="productType">
          <label for="date-1" >
            <div class="date-day">Jeudi 28/02/16</div>
            <span class="date-hours">Entre 10h et 12h</span>
          </label>
          <input type="radio" id="date-2"  class="filter" value="true" v-model="productType">
          <label for="date-2">
            Jeudi 28/02/16
            <span>Entre 18h et 20h</span>
          </label>
        </div>
      </form>
    </fieldset>
    <div class="alliance-action-button">Refuser</div> <div class="alliance-action-button">Accepter</div>

    <fieldset class="step my-side">
      <legend>
        <svg viewBox="0 0 100 100" class="search-icon search-icon-right">
          <use xlink:href="#app-icon-close"></use>
        </svg>
      </legend>
        <h3>Vous avez contacté Ludovic le :</h3>
        <div class="date-day">28/02/16</div>
    </fieldset>

  </div>

</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';

.title-section {
  text-transform: uppercase;
}

.profile-infos-separator {
  width: 56px;
  height: 5px;
  margin: 8px auto;
  transform: scale(0.5);
  background: url('/static/img/separator-green.png') center left no-repeat;
}

.alliance-action-button {
  display: inline-block;
  margin: 0 auto;
  width: 150px;
  padding: 18px 0;
  border-radius: 25px;
  background-color: $color-beige;
  font: 1.3em 'Karla-Bold', sans-serif;
  color: $color-text;
  text-transform: uppercase;
  text-align: center;
}

.search-icon {
  width: (60px / 2);
  height: (60px / 2);
  margin-top: (10px / 2);
  fill: $color-red;
}

.search-icon-left {
  left: 15px;
}
.search-icon-right {
  right: 20px;
}

.steps-summary {
  text-align: center;
  color: $color-text;
  font-family: 'Karla-Italic';
}

.step {
  text-align: center;
  margin: 30px auto;
  width: 75%;
  padding-bottom: 15px;
}

.step.my-side {border: 1px solid $color-red;}
.step.user-side {border: 1px solid $color-green;}

legend {
  text-align: center;
}

</style>
