<template>
  <div class="filter-date">Aujourd'hui</div>
  <div class="products-container">
    <template v-for="alliance in alliances | orderBy 'name' ">
      <div class="alliance-item-wrapper" v-bind:class="{ 'inactive': !alliance.status }" v-link="{ path: '/alliances/alliance' }" v-for="product in alliance.product">
        <div class="alliance-item-product-icon-wrapper">
          <svg viewBox="0 0 100 100" class="alliance-product-item-icon">
            <use xlink:href="#foods-icon-{{ product.name }}"></use>
          </svg>
        </div>
        <div class="alliance-item-product-text-wrapper">
          <div class="alliance-item-product-name">{{ product.name }}</div>
          <div class="profile-infos-separator"></div>
          <div class="alliance-item-status">{{ alliance.statusName }}</div>
        </div>
      </div>
    </template>
  </div>
  <div class="filter-date">Plus tôt dans la semaine</div>
  <div class="filter-date">Plus tôt dans le mois</div>
</template>

<script>
import * as lists from './../../vuex/getters'

export default {
  vuex: {
    getters: {
      alliances: lists.alliancesList,
    },
  },
};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';

.products-container {
  text-align: center;
  margin: 20px 0;
}

  .alliance-item-wrapper {
    display: flex;
    flex-direction: row;
    flex: 1 100%;
    padding: 20px 15px;
    border-bottom: 2px solid $color-sepia;
  }

  .profile-infos-separator {
    width: 28px;
    height: 2.5px;
    margin: 8px 0;
    background: url('/static/img/separator-green.png') center left no-repeat;
  }

  .alliance-item-product-icon-wrapper {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .alliance-item-product-text-wrapper {
    display: flex;
    flex-direction: column;
    flex: 2;
    text-align: left;
    justify-content: center;
  }

  .alliance-product-item-icon {
    width: 50px;
    margin: auto;
  }

  .alliance-item-product-name {
    font: bold 2.5em 'IowanOldStyleBT-BlackItalic', sans-serif;
    text-transform: capitalize;
    color: $color-red;
    justify-content: center;
  }


  .filter-date {
    background-color: $color-white;
    border-bottom: 1px solid $color-sepia;
  }

  </style>
