<template>
  <div class="filter-date">Aujourd'hui</div>
  <div class="products-container">
    <template v-for="alliance in alliances | orderBy 'name' ">
      <div class="alliance-item-wrapper" v-bind:class="{ 'inactive': alliance.status }" v-link="{ path: '/alliances/alliance' }" v-for="product in alliance.product">
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
        <div class="alliance-item-product-icon-wrapper">
          <svg viewBox="0 0 50 50" class="alliance-product-link-more">
            <use xlink:href="#header-icon-previous"></use>
          </svg>
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
@import './../../styles/fonts.scss';

.products-container {
  text-align: center;
  font-family: 'Karla-BoldItalic';
  color: $color-text;
}

  .alliance-item-wrapper {
    display: flex;
    flex-direction: row;
    flex: 1 100%;
    padding: 20px 15px;
    border-bottom: 2px solid $color-sepia;
  }

    .alliance-item-wrapper.inactive .alliance-product-item-icon {
      filter: grayscale(1);
      background-color: $color-white;
    }

      .alliance-item-wrapper.inactive .alliance-item-product-name,
      .alliance-item-wrapper.inactive .alliance-item-status{
        color: $color-gray;
      }

      .alliance-item-wrapper.inactive .alliance-product-link-more{
        opacity: 0.5;
      }

  .profile-infos-separator {
    width: 28px;
    height: 2.5px;
    margin: 8px 0;
    background: url('/static/img/separator-red.png') center left no-repeat;
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
    padding-left: 2.5em;
  }

  .alliance-product-item-icon {
    width: 50px;
    margin: auto;
  }

  .alliance-item-status {
    font-size: 1.3em;
    font-family: 'Karla-BoldItalic';
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
    font-family: 'Karla-Bold';
    font-size: 1.3em;
    text-transform: uppercase;
    text-align: center;
    padding: 15px 0px;
    color: $color-text;
  }

  .alliance-product-link-more{
    width: (60px / 2);
    height: (60px / 2);
    margin-top: (10px / 2);
    fill: $color-red;
    transform: rotate(180deg);
    margin: auto;
  }

  </style>
