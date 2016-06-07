<template>
  <div class="statistics-container">
    <div class="statistics-products-wrapper">
      <div class="statistics-product-text">Produits les plus échangés</div>
      <div class="statistics-product-data">
        <div class="statistics-product-data-lines">
          <div class="statistics-product-data-line"></div>
          <div class="statistics-product-data-line"></div>
          <div class="statistics-product-data-line"></div>
        </div>
        <div class="statistics-product-data-graphs">
          <template v-for="product in statistics.products">
            <div class="statistics-product-data-graph" style="height:{{ product.percent }}%;"><span class="top-{{ product.priority }}"></span></div>
          </template>
        </div>
        <div class="statistics-product-data-totals">
          <div class="statistics-product-data-total">0</div>
          <div class="statistics-product-data-total">5</div>
          <div class="statistics-product-data-total">10</div>
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
        <div class="statistics-infos-content-legend"><span class="underline"></span>Echanges effectuées </div>
        <div class="statistics-infos-content-legend"><span class="underline"></span>dans le mois</div>
      </div>
      <div class="statistics-infos-content">
        <div class="statistics-infos-content-bg">
          <div class="statistics-infos-content-value">{{ statistics.share.begin }}</div>
        </div>
        <div class="statistics-infos-content-legend"><span class="underline"></span>Echanges effectuées</div>
        <div class="statistics-infos-content-legend"><span class="underline"></span>depuis l’inscription</div>
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

      @keyframes increase {
        0% { height: 0px;}
        100% { height: 100%;}
      }

        .statistics-product-data-graph {
          width: 20%;
          position: relative;

          span {
            display: inline-block;
            width: 100%;
            height: 100%;
            background: $color-stats-line;
            animation: increase 1s normal;
            position: absolute;
            bottom: 0;
            &.top-1 { background: $color-stats-red1; }
            &.top-2 { background: $color-stats-red2; }
            &.top-3 { background: $color-stats-red3; }
            &.top-4 { background: $color-stats-red4; }
            &.top-5 { background: $color-stats-red5; }
          }

        }

      .statistics-product-data-names{
        position: absolute;
        top: 125px;
        left: 0;
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        width: 100%;
      }

      .statistics-product-data-totals {
        position: absolute;
        top: 5px;
        left: -15px;
        display: flex;
        justify-content: flex-start;
        flex-direction: column-reverse;
        width: 100%;
        height: 110px;
      }

        .statistics-product-data-name {
          width: 20%;
          font: 0.9em 'Karla-Regular', sans-serif;
          color: #9b9b9b;
        }

        .statistics-product-data-total {
          &:first-child{ height: 4%;}
          height: 49%;
          font: 0.9em 'Karla-Regular', sans-serif;
          color: #9b9b9b;
        }

  .statistics-infos-wrapper {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 15px;
  }

    @keyframes apparition {
      0% { opacity: 1; transform: translate3d(0,-200px,0);}
      100% { opacity: 1; transform: translate3d(0,0,0); }
    }

    .statistics-infos-content {
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 48%;
      height: 120px;
      background: $color-white;
      animation: apparition 1s normal;
    }

      .statistics-infos-content-bg {
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin: 0px auto 10px;
        width: 50px;
        height: 56px;
        background-color: $color-blue;
        mask-image: url('/static/img/blason-1.png');
        -webkit-mask-image: url('/static/img/blason-1.png');
        mask-size: 100% 100%;
        -webkit-mask-size: 100% 100%;
      }

      .statistics-infos-content-value {
        margin-top: -3px;
        text-align: center;
        font: 2em 'Karla-Bold', sans-serif;
        color: $color-white;
      }

      .statistics-infos-content-legend {
        display: flex;
        position: relative;
        margin: 0 10%;
        font: 1.2em 'Karla-Regular', sans-serif;
        color: $color-text;
        text-align: center;
        z-index: 1;
        flex-direction: column;
        align-self: center;
        justify-content: center;
        align-items: center;
        width: initial;
      }

      .underline {
        position: absolute;
        left: 0;
        bottom: 2px;
        height: 4px;
        width: 100%;
        background: $color-beige;
        z-index: -1;
      }
</style>
