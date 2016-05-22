<template>
  <div class="foodkeeper-add-container">
    <div> @todo Image garde-manger </div>
    <div class="foodkeeper-add-name">
      <input type="text" placeholder="Nom" />
      <div> @todo garde-manger favori </div>
    </div>
    <div class="foodkeeper-add-description">
      <textarea placeholder="Description"></textarea>
    </div>
    <h2>Renseignez l'adresse du garde-manger</h2>
    <div class="foodkeeper-add-adresse-1">
      <label for="adresse-1">Rue, route, impasse</label>
      <input type="text"  name="adresse-1" />
    </div>
    <div class="foodkeeper-add-numero-rue">
      <label for="adresse-numero">Numéro</label>
      <input type="text"  name="adresse-numero" />
    </div>
    <div class="foodkeeper-add-appartement">
      <label for="adresse-appartement">Appartement</label>
      <input type="text" name="adresse-appartement" />
    </div>
    <div class="foodkeeper-add-etage">
      <label for="adresse-etage">Etage</label>
      <input type="text" name="adresse-etage" />
    </div>
    <div class="foodkeeper-add-adresse-2">
      <label for="adresse-2">Complément d'adresse</label>
      <textarea placeholder="Description" name="adresse-2"></textarea>
    </div>
    <div class="foodkeeper-add-infos">
      <label for="adresse-infos">Informations supplémentaires</label>
      <textarea placeholder="Description" name="adresse-infos"></textarea>
    </div>
    <h2>Vos compères</h2>
    <div> @todo ajout compères </div>
    <div class="foodkeeper-add-button">Ajouter</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';

.foodkeeper-add-container {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  position: relative;
  height: calc(100vh - 80px);
}

.foodkeeper-add-name,
.foodkeeper-add-description {
  width: 100%;
  height: 40px;
  padding: 0 20px;
  box-sizing: border-box;
  border-radius: 20px;
  border: none;
  background-color: $color-green-lite;
  color: $color-white;
  font: 1.4em 'Karla-Italic', sans-serif;
}

::-webkit-input-placeholder {
  color: $color-white;
}


.foodkeeper-add-button {
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

</style>
