<template>
  <div class="stats-container">
      <statistics></statistics>
  </div>
</template> 

<script>
import Statistics from './../commons/Statistics'

export default {
  data () {
    return {
      stats: {
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
  components : {
    Statistics,
  }
};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';

.stats-container {
  position: relative;
  width: 100%;
}

  .stats-products-wrapper {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 10px 20px;
    height: 170px;
    background: $color-white;
  }

    .stats-product-text {
      font: 1.2em 'Karla-Regular', sans-serif;
      color: $color-text;
    }

    .stats-product-data {
      position: relative;
      width: 100%;
      height: 140px;
    }

      .stats-product-data-lines,
      .stats-product-data-graphs {
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

      .stats-product-data-lines {
        flex-direction: column;
      }



        .stats-product-data-line {
          width: 100%;
          height: 1px;
          background: $color-stats-line;
        }

      .stats-product-data-graphs {
        flex-direction: row;
      }

      @keyframes increase {
        0% { height: 0px;}
        100% { height: 100%;}
      }

        .stats-product-data-graph {
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

      .stats-product-data-names{
        position: absolute;
        top: 125px;
        left: 0;
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        width: 100%;
      }

      .stats-product-data-totals {
        position: absolute;
        top: 5px;
        left: -15px;
        display: flex;
        justify-content: flex-start;
        flex-direction: column-reverse;
        width: 100%;
        height: 110px;
      }

        .stats-product-data-name {
          width: 20%;
          font: 0.9em 'Karla-Regular', sans-serif;
          color: #9b9b9b;
        }

        .stats-product-data-total {
          &:first-child{ height: 4%;}
          height: 49%;
          font: 0.9em 'Karla-Regular', sans-serif;
          color: #9b9b9b;
        }

  .stats-infos-wrapper {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 15px;
  }

    @keyframes apparition {
      0% { opacity: 1; transform: scale3d(0,0,0);  }
      100% { opacity: 1; transform: scale3d(1,1,1); }
    }

    .stats-infos-content {
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 48%;
      height: 120px;
      background: $color-white;
      animation: apparition 1s normal;
    }

      .stats-infos-content-bg {
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

      .stats-infos-content-value {
        margin-top: -3px;
        text-align: center;
        font: 1.6em 'Karla-Bold', sans-serif;
        color: $color-white;
      }

      .stats-infos-content-legend {
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
