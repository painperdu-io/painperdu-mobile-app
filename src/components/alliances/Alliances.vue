<template>
  <div class="alliances-container">
    <div class="alliances-list-product">
      <template v-for="alliance in alliances">
        <div class="alliances-product-item {{ alliance.status }} {{ alliance.type }}" v-link="{ name: 'DetailsAlliance', params: { id: alliance._id }}">
          <div class="alliances-product-icon {{ alliance.product.type }}">
            <svg viewBox="0 0 100 100">
              <use xlink:href="#foods-icon-{{ alliance.product.icon }}"></use>
            </svg>
          </div>
          <div class="alliance-type alliance-type-{{alliance.type}}">
            <svg viewBox="0 0 100 100" class="exchange-icon animated pulse">
              <use xlink:href="#app-icon-arrow"></use>
            </svg>
          </div>
          <div class="alliances-product-description">
            <div class="alliances-product-description-name">{{ alliance.product.name }}</div>
            <div class="alliances-product-description-separator"></div>
            <div v-if="alliance.status == 'current'" class="alliances-product-description-status">En cours</div>
            <div v-if="alliance.status == 'terminated'" class="alliances-product-description-status">Terminé</div>
            <div v-if="alliance.status == 'abandoned'" class="alliances-product-description-status">Abandonné</div>
          </div>
          <div class="alliance-product-detail">
            <svg viewBox="0 0 50 50" class="alliance-product-detail-icon">
              <use xlink:href="#header-icon-previous"></use>
            </svg>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      alliances: []
    };
  },
  ready() {
    // récupérer la liste des alliances en fonction de l'id utilisateur
    this.$http({ url: `alliances/user/${global.currentUserId}`, method: 'GET' })
      .then((response) => this.alliances = response.data)
      .catch(err => console.log(err));
  },
  methods : {
    loadAllianceDetails(allianceId, transition){
      var el = event.target
      if (el.classList.contains(transition) ) {
        el.classList.remove(transition);
      } else {
        el.classList.add(transition);
      }
      setTimeout(() => this.$route.router.go({ name: 'DetailsAlliance', params: { id: allianceId }}), 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';

.alliances-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: -1px 0;
}

  .alliances-list-product {
    width: 100%;
  }

    .alliances-product-item {
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0 35px 0 5px;
      height: 110px;
      border-top: 1px solid $color-gray;
      border-bottom: 1px solid $color-gray;

      &.abandoned,
      &.terminated {
        background: $color-beige;

        .alliances-product-icon,
        .alliances-product-description {
          filter: grayscale(1);
          -webkit-filter:grayscale(1);
          mix-blend-mode: multiply;
          opacity: 0.5;
        }

        .alliance-type-giver,
        .alliance-type-applicant {
          opacity: 0.8;
          filter: grayscale(1);
          -webkit-filter: grayscale(1);
        }
      }
    }

      .alliances-product-icon {
        position: relative;
        width: 85px;
        height: 85px;
        border-radius: 50%;
        text-align: center;
        background: $color-white;
        border: 12px solid $color-white;
        box-sizing: border-box;

        svg {
          transform: scale(0.8);
        }
      }

      .alliance-type {
        display: flex;
        flex-direction: column;
        flex: 1;
        max-width: 30px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin: 0 0 0 -40px;
        z-index: 1;

        svg {
          width: 20px;
          margin: auto;
        }

        &.alliance-type-giver {
          background-color: $color-red;
        }
        &.alliance-type-applicant {
          background-color: $color-green;
          transform: scaleX(-1);
        }
      }

      .alliances-product-icon.raw {
        background: url('/static/img/product-raw.png') center center repeat $color-white;
      }

      .alliances-product-icon.homemade {
        background: url('/static/img/product-homemade.png') center center repeat $color-white;
      }

      .alliances-product-description {
        width: 180px;
      }

        .alliances-product-description-name {
          font: 2.5em 'IowanOldStyleBT-BlackItalic', sans-serif;
          color: $color-red;
        }

        .alliances-product-description-separator {
          width: 56px;
          height: 5px;
          margin: 0 -13px 10px;
          transform: scale(0.5);
          background: url('/static/img/separator-green.png') center center no-repeat;
        }

        .alliances-product-description-status {
          font: 1.3em 'Karla-Italic', sans-serif;
          color: $color-text;
          text-transform: capitalize;
        }

      .alliance-product-detail {}

        .alliance-product-detail-icon {
          width: 30px;
          height: 30px;
          margin-top: 5px;
          fill: $color-red;
          transform: rotate(180deg);
        }
</style>
