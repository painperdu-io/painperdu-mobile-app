<template>
  <div class="statistics-container">
    <div class="statistics-products-wrapper">
      <div class="statistics-product-text">Denrées les plus échangées</div>
      <div class="statistics-product-data">
        <div class="statistics-product-data-lines">
          <div class="statistics-product-data-line"></div>
          <div class="statistics-product-data-line"></div>
          <div class="statistics-product-data-line"></div>
        </div>
        <div class="statistics-product-data-graphs">
          <template v-for="product in statistics.products">
            <div class="statistics-product-data-graph  top-{{ product.priority }}" style="height:{{ product.percent }}%;"></div>
          </template>
        </div>
        <div class="statistics-product-data-names">
          <template v-for="product in statistics.products">
            <div class="statistics-product-data-name">{{ product.name }}</div>
          </template>
        </div>
      </div>
    </div>
    <div class="statistics-infos-wrapper">
      <div class="statistics-infos-content">
        <div class="statistics-infos-content-bg">
          <div class="statistics-infos-content-value">{{ statistics.share.month }}</div>
        </div>
        <div class="statistics-infos-content-legend">Alliances effectuées dans le mois</div>
      </div>
      <div class="statistics-infos-content">
        <div class="statistics-infos-content-bg">
          <div class="statistics-infos-content-value">{{ statistics.share.begin }}</div>
        </div>
        <div class="statistics-infos-content-legend">Alliances effectuées depuis l’inscription</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      statistics: {
        share: { month: '2', begin: '6' },
        products: [
          { name: 'Tomate', percent: '96', priority: '1' },
          { name: 'Chou', percent: '23', priority: '2' },
          { name: 'Laitue', percent: '38', priority: '3' },
          { name: 'Lasagne', percent: '67', priority: '4' },
          { name: 'Pomme', percent: '12', priority: '5' },
        ]
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';

.statistics-container {
  position: relative;
  width: 100%;
}

  .statistics-products-wrapper {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 10px 20px;
    height: 170px;
    background: $color-white;
  }

    .statistics-product-text {
      font: 1.2em 'Karla-Regular', sans-serif;
      color: $color-text;
    }

    .statistics-product-data {
      position: relative;
      width: 100%;
      height: 140px;
    }

      .statistics-product-data-lines,
      .statistics-product-data-graphs {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-top: 10px;
        width: 100%;
        height: 107px;
      }

      .statistics-product-data-lines {
        flex-direction: column;
      }

        .statistics-product-data-line {
          width: 100%;
          height: 1px;
          background: $color-stats-line;
        }

      .statistics-product-data-graphs {
        flex-direction: row;
      }

        .statistics-product-data-graph {
          width: 20%;
          background: $color-stats-line;

          &.top-1 { background: $color-stats-red1; }
          &.top-2 { background: $color-stats-red2; }
          &.top-3 { background: $color-stats-red3; }
          &.top-4 { background: $color-stats-red4; }
          &.top-5 { background: $color-stats-red5; }
        }

      .statistics-product-data-names {
        position: absolute;
        top: 125px;
        left: 0;
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        width: 100%;
      }

        .statistics-product-data-name {
          width: 20%;
          font: 0.9em 'Karla-Regular', sans-serif;
          color: $color-text;
        }

  .statistics-infos-wrapper {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 12px;
  }

    .statistics-infos-content {
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 48%;
      height: 120px;
      background: $color-white;
    }

      .statistics-infos-content-bg {
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 10px;
        height: 56px;
        background: url('/static/img/stats-value.png');
        background-size: 50px 56px;
        background-position: center center;
        background-repeat: no-repeat;
      }

      .statistics-infos-content-value {
        margin-top: -3px;
        text-align: center;
        font: 1.6em 'Karla-Bold', sans-serif;
        color: $color-green;
      }

      .statistics-infos-content-legend {
        padding: 0 10%;
        font: 1.2em 'Karla-Regular', sans-serif;
        color: $color-text;
        text-align: center;
      }
</style>
