<template>
  <div class="alliance-details-container" >
    <div class="alliance-summary">
      <div class="profile-container animated bounceInRight">
        <div class="profile-infos">
          <div class="profile-infos-photo">
            <div class="profile-infos-photo-img">
              <img v-if="alliance.type == 'giver'" :src="alliance.users.applicant.picture" v-link="{ name: 'MemberProfile', params: { id: alliance.users.applicant._id }}" />
              <img v-else :src="alliance.users.giver.picture" v-link="{ name: 'MemberProfile', params: { id: alliance.users.giver._id }}"/>
            </div>
          </div>
          <h3 v-if="alliance.type == 'giver'" class="profile-infos-name">{{ alliance.users.applicant.name.first }}</h3>
          <h3 v-else class="profile-infos-name">{{ alliance.users.giver.name.first }}</h3>
        </div>
      </div>
      <div class="product animated bounceInLeft">
        <div class="product-item-circle {{ alliance.product.type }}">
          <svg viewBox="0 0 100 100" class="foods-icon animated tada">
            <use xlink:href="#foods-icon-{{ alliance.product.icon }}"></use>
          </svg>
          <div class="product-quantity">{{ alliance.quantity }}</div>
        </div>
        <div class="product-name">{{ alliance.product.name }}</div>
      </div>
    </div>

    <template v-if="alliance.type == 'applicant'">
      DEMANDEUR

      <template v-if="alliance.steps.length == 0">
        --> VOTRE DEMANDE A ÉTÉ ENVOYÉ
      </template>
    </template>

    <template v-if="alliance.type == 'giver'">
      DONNEUR

      <template v-if="alliance.steps.length == 0">
        --> NOUVELLE DEMANDE REÇU (ACCEPTER LA DEMANDE ?)
      </template>
    </template>



    <div class="steps-summary">
    </div>
  </div>

</template>

<script>
import Profile from './../commons/Profile'

export default {
  components: {
    Profile,
  },
  data() {
    return {
      alliance: {
        type: '',
        product: {
          name: '',
        },
        users: {
          applicant: {
            name: {
              first: '',
              last: '',
            }
          },
          giver: {
            name: {
              first: '',
              last: '',
            }
          },
        },
        steps: [],
      },
    };
  },
  ready() {
    const allianceId = this.$route.params.id;

    // récupérer une alliance en fonction de son id
    this.$http({ url: `alliances/${allianceId}/user/${global.currentUserId}`, method: 'GET' })
      .then(response => this.alliance = response.data)
      .catch(err => console.log(err));
  }
};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';

.alliance-summary {
  display: flex;
  flex-direction: row;
  flex: 1 100%;
  padding: 45px 0 30px;
  position: fixed;
  background: url('/static/img/bg-3.jpg');
  z-index: 99;
  width: 100%;
  justify-content: center;
  top: 60px;
}

.profile-container,
.product {
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 150px;
}

.profile-container {
  text-align: center;
}

    .profile-infos-photo {
      position: relative;
      margin: 0 auto 20px;
      width: 110px;
      height: 115px;
      mask-image: url('/static/img/blason-1.png');
      -webkit-mask-image: url('/static/img/blason-1.png');
      mask-size: 100% 100%;
      -webkit-mask-size: 100% 100%;
    }

      .profile-infos-photo-img {
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;

        img {
          width: 125px;
          height: 125px;
          mix-blend-mode: multiply;
        }
      }

    .profile-infos-name,
    .profile-infos-status {
      margin: 5px 0;
      color: $color-text;
      z-index: 10;
    }

    .profile-infos-name {
      font: bold 1.8em 'IowanOldStyleBT-BlackItalic', sans-serif;
      text-transform: capitalize;
      color: $color-red;
    }

    .product {
      display: flex;
      .product-item-circle {
        vertical-align: middle;
        display: flex;
        justify-content: center;
        position: relative;
        width: 125px;
        height: 125px;
        border-radius: 50%;
        text-align: center;
        background: $color-white;
        border: 10px solid $color-white;
        box-sizing: border-box;
        margin: auto;
        .foods-icon {
          width: 80px;
        }
        .product-quantity {
          position: absolute;
          right: 0px;
          top: 10px;
          display: inline-block;
          background-color: $color-red;
          color: $color-white;
          text-align: center;
          border-radius: 50%;
          font-size: 1.3em;
          font-family: 'Karla-Bold';
          width: (55px /2);
          height: (55px /2);
          line-height: (55px / 2);

        }
      }

      .product-item-circle.raw {
        background: url('/static/img/product-raw.png') center center no-repeat $color-white;
      }

      .product-item-circle.homemade {
        background: url('/static/img/product-homemade.png') center center no-repeat $color-white;
      }

      .product-name {
        text-transform: capitalize;
        font-style: italic;
        color: $color-red;
        font-size: 1.8em;
        font-family: 'IowanOldStyleBT-BlackItalic';
        font-weight: 700;
        margin: 10px auto;
        text-align: center;
      }
    }

.title-section {
    text-transform: uppercase;
}

.steps-summary {
  font-size: 1.3em;
  font-family: 'Karla-Italic';
  margin-top: 280px;
}

.steps-summary-separator {
  width: 56px;
  height: 5px;
  margin: 8px auto;
  transform: scale(0.5);
  background: url('/static/img/separator-red.png') center left no-repeat;
}

.alliance-form-vote-select {
  margin: 20px 0 15px;
  width: 170px;
  height: 40px;
  background: $color-green-lite;
  box-sizing: border-box;
  border: none;
  border-radius: 20px;
  font-style: italic;
  text-align-last: center;
  text-transform: capitalize;
  color: $color-white;
  font-size: 1.1em;

  option {
    text-align: center;
    text-transform: capitalize;
  }
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

.alliance-icon {
  width: 40px;
  height: 40px ;
  margin: 5px 15px 0px;
  fill: $color-red;
}

.steps-summary {
  text-align: center;
  color: $color-text;
  font-family: 'Karla-Italic';
  padding-bottom: 20px;
}

.step {
  text-align: center;
  margin: 30px auto;
  width: 75%;
  padding-bottom: 15px;
  border: 0px;
}

  .step.my-side {
    background: url('/static/img/rectangle-green.png') no-repeat center;
    background-size: 100% 100%;
  }
  .step.user-side {
    background: url('/static/img/rectangle-red.png') no-repeat center;
    background-size: 100% 100%;
  }
  .step.user-side svg {fill: $color-green;}
  .step.final-step {
    border: 0px;
    background: url('/static/img/rectangle-beige.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
    .step.final-step svg {fill: $color-green;}


.date-hours {
  background-color: $color-green;
  height: 20px;
  border-radius: 20px;
  text-transform: uppercase;
  color: $color-white;
  font-family: 'Karla-Bold';
  font-size: 1.3em;
  box-sizing: border-box;
  line-height: 40px;
  width: 60%;
  min-width: 115px;
  margin: auto;
}

.user-address {
  margin-top: 40px;
}

.user-address-details {
  margin-top: 10px;
  font-family: 'Karla-BoldItalic';
  font-size: 1.8em;
  line-height: 1.4em;
}

.multiple-dates {
  text-align: center;
  line-height: 40px;
  .filter {
    display: none;
    &:first-child {
      + label {

      }
    }
    &:checked {
      + label .date-hours {
        background-color: white;
        border: 2px solid $color-green;
        color: $color-green
      }
    }
  }
}

legend {
  text-align: center;
}
</style>
