<template>
  <div class="alliances-container">


    <div class="alliances-list-title active">Aujourd'hui</div>
    <div class="alliances-list-product">
      <template v-for="alliance in alliances | orderBy 'name'">
        <div class="alliances-product-item" v-bind:class="{ 'inactive': !alliance.status }" v-link="{ path: '/alliances/alliance' }" v-for="product in alliance.product">
          <div class="alliances-product-icon">
            <svg viewBox="0 0 100 100">
              <use xlink:href="#foods-icon-{{ product.name }}"></use>
            </svg>
          </div>
          <div class="alliances-product-description">
            <div class="alliances-product-description-name">{{ product.name }}</div>
            <div class="alliances-product-description-separator"></div>
            <div class="alliances-product-description-status">{{ alliance.statusName }}</div>
          </div>
        </div>
      </template>
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

    &.active {
      font: 1.4em 'Karla-Bold', sans-serif;
    }
  }

  .alliances-list-product {
    width: 100%;
  }

    .alliances-product-item {
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
      }
    }

      .alliances-product-icon {
        position: relative;
        width: 85px;
        height: 85px;
        border-radius: 50%;
        text-align: center;
        background: $color-white;

        svg {
          transform: scale(0.7);
        }
      }

      .alliances-product-description {

      }

        .alliances-product-description-name {
          font: 2.5em 'IowanOldStyleBT-BlackItalic', sans-serif;
          color: $color-red;
          text-transform: capitalize;
        }

        .alliances-product-description-separator {
          width: 56px;
          height: 5px;
          margin: 0 0 8px;
          transform: scale(0.5);
          background: url('/static/img/separator-green.png') center center no-repeat;
        }

        .alliances-product-description-status {
          font: 1.3em 'Karla-Italic', sans-serif;
          color: $color-text;
          text-transform: capitalize;
        }
</style>
