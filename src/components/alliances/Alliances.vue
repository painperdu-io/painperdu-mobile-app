<template>
  <div class="alliances-container animated">
    <div class="alliances-list-title active">Aujourd'hui</div>
    <div class="alliances-list-product">
      <template v-for="alliance in alliances | orderBy 'name'">
        <div class="alliances-product-item" :class="{ 'inactive': !alliance.status }" v-link="{ path: '/alliances/details' }" v-for="product in alliance.product">
          <div class="alliances-product-icon type" :class="{ 'type-prepare': product.brut }">
            <svg viewBox="0 0 100 100">
              <use xlink:href="#foods-icon-{{ product.name }}"></use>
            </svg>
          </div>
          <div class="alliances-product-description">
            <div class="alliances-product-description-name">{{ product.name }}</div>
            <div class="alliances-product-description-separator"></div>
            <div class="alliances-product-description-status">{{ alliance.statusName }}</div>
          </div>
          <div class="alliance-product-detail">
            <svg viewBox="0 0 50 50" class="alliance-product-detail-icon">
              <use xlink:href="#header-icon-previous"></use>
            </svg>
          </div>
        </div>
      </template>
      <div class="alliances-list-title">Plus tôt dans la semaine</div>
      <div class="alliances-list-title">Plus tôt dans le mois</div>
    </div>

  </div>
</template>

<script>
import { alliancesList } from './../../vuex/getters'

export default {
  vuex: {
    getters: {
      alliances: alliancesList,
    },
  },
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';

.alliances-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: -1px 0;
}

  .alliances-list-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 33px;
    border-top: 1px solid $color-gray;
    border-bottom: 1px solid $color-gray;
    font: 1.4em 'Karla-Regular', sans-serif;
    color: $color-text;
    text-transform: uppercase;
    background: $color-white;

    &.active {
      font: 1.4em 'Karla-Bold', sans-serif;
    }
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
      padding: 0 35px;
      height: 110px;
      border-top: 1px solid $color-gray;
      border-bottom: 1px solid $color-gray;

      &.inactive {
        background: $color-beige;
        opacity: 0.6;

        .alliances-product-icon,
        .alliances-product-description {
          filter: grayscale(1);
          -webkit-filter:grayscale(1);
          mix-blend-mode: multiply;
          opacity: 0.5;
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

      .alliances-product-icon.type {
        background: url('/static/img/product-brut.png') center center repeat $color-white;
      }

      .alliances-product-icon.type-prepare {
        background: url('/static/img/product-prepare.png') center center repeat $color-white;
      }

      .alliances-product-description {
        width: 150px;
      }

        .alliances-product-description-name {
          font: 2.5em 'IowanOldStyleBT-BlackItalic', sans-serif;
          color: $color-red;
          text-transform: capitalize;
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
