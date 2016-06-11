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

    <!-- Alliance en cours -->
    <template v-if="alliance.status == 'current'">

      <!-- DEMANDEUR -->
      <template v-if="alliance.type == 'applicant'">

        <!-- Demande envoyée -->
        <template v-if="alliance.request.completed && !alliance.availability.completed">
          <div class="steps-summary">
            Ta requête à bien été envoyé à {{ alliance.users.giver.name.first }}
          </div>
        </template>

        <!-- Nouvelle réponse donneeur -->
        <template v-if="alliance.request.completed && alliance.availability.completed && !alliance.exchange">
          <div class="steps-summary">

            <div v-if="alliance.availability.giver || alliance.availability.applicant">
                <div v-if="alliance.availability.applicant">
                  {{ alliance.users.giver.name.first }}
                  est disponible pour le créneau:
                  {{ alliance.availability.date }}
                  {{ alliance.availability.timeStart }}
                  {{ alliance.availability.timeEnd }}
                </div>
                <div v-else>
                  Tu es un sacré vénard ! {{ alliance.users.giver.name.first }}
                  est disponible pour le créneau:
                  {{ alliance.request.date }}
                  {{ alliance.request.timeStart }}
                  {{ alliance.request.timeEnd }}
                </div>

              Tu le trouveras à l'adresse suivante:
                {{ foodkeeper.location.street }}
                {{ foodkeeper.location.additional }}
                {{ foodkeeper.location.zipcode }}
                {{ foodkeeper.location.city }}

              <div v-if="foodkeeper.location.infos">
                Voici des informations complèmentaires:
                {{ foodkeeper.location.infos }}
              </div>

            </div>
            <div v-else>
              Fichtre, {{ alliance.users.giver.name.first }} n'est pas disponible
              <template v-if="alliance.request.delayed">pour le créneau horaire que tu lui a indiqué</template>
              <template v-else>maintenant</template>

              <br />
              Mais il te propose le créneau horaire suivant:
                {{ alliance.availability.date }}
                {{ alliance.availability.timeStart }}
                {{ alliance.availability.timeEnd }}

              <br />
              Ce créneau te convient-il ?
              <div class="alliance-action-button" v-on:click="allianceAvailability(true)">Oui</div>
              <div class="alliance-action-button" v-on:click="allianceAvailability(false)">Non</div>
            </div>
          </div>
        </template>

        <template v-if="alliance.request.completed && alliance.availability.completed && alliance.exchange">
          <div class="steps-summary">
            Qu'à tu pensé de cette alliance ?
            Elle était :

            <select class="market-add-form-select" v-model="form.review">
                <option value="0">Naze</option>
                <option value="1">Bof</option>
                <option value="2">Ça va</option>
                <option value="3" selected>Passable</option>
                <option value="4">Bien</option>
                <option value="5">Très bien</option>
                <!-- MARION côté back: DE 0 à 5 uniquement !!!! -->
            </select>

            <div class="alliance-action-button" v-on:click="allianceReview">Valider</div>
          </div>
        </template>


      </template>


      <!-- Intéractions du donneur -->
      <template v-if="alliance.type == 'giver'">

        <!-- Nouvelle demande -->
        <template v-if="alliance.request.completed && !alliance.availability.completed">
          <div class="steps-summary">
            Tu viens de recevoir une requête de {{ alliance.users.applicant.name.first }}
            (ATTENTION WORDING !) GARDE MANGER --> {{ foodkeeper.name }}
            <div v-if="alliance.request.delayed">
              Pour la récupération de ta denrée, {{ alliance.users.applicant.name.first }}
              te propose le créneau suivant:
              {{ alliance.request.date }}
              {{ alliance.request.timeStart }}
              {{ alliance.request.timeEnd }}
            </div>
            <div v-else>Es-tu disponible dès maintenant ?</div>

            <div class="alliance-action-button" v-on:click="allianceRequest(true)">Oui</div>
            <div class="alliance-action-button" v-on:click="allianceRequest(false)">Non</div>
          </div>
        </template>

        <!-- Produit échangé -->
        <template v-if="alliance.request.completed && alliance.availability.completed && !alliance.exchange">
          <template v-if="alliance.availability.applicant || alliance.availability.giver">
            <div class="steps-summary">
              As-tu donné la denrée desirée ?

              <div class="alliance-action-button" v-on:click="allianceExchange(true)">Oui</div>
              <div class="alliance-action-button" v-on:click="allianceExchange(false)">Non</div>
            </div>
          </template>
          <template v-else>
            <div class="steps-summary">
              En attante de la confirmation de la disponibilité du demandeur...
            </div>
          </template>
        </template>

        <!-- En attente d'évaluation -->
        <template v-if="alliance.request.completed && alliance.availability.completed && alliance.exchange">
          <div class="steps-summary">
            Ton allié ne t'a toujours pas évalué pour cet échange (VALIDER CE TEXTE)
          </div>
        </template>
      </template>
    </template>


    <!-- Produit échangé, fin de l'alliance -->
    <template v-if="alliance.status == 'terminated'">
      <div class="steps-summary">
        <template alliance.type == 'applicant'>
          <h3>Hip Hip Hip Houra !</h3>
          Une étape de plus a été franchie dans la quête du Pain Perdu !
        </template>
        <template v-else>
          <h3>Hip Hip Hip Houra !</h3>
          Une étape de plus a été franchie dans la quête du Pain Perdu !
          --> LIEN GARGE MANGER NOTATION
        </template>
      </div>
    </template>

    <!-- Produit non échangé, fin de l'alliance -->
    <template v-if="alliance.status == 'abandoned'">
      <div class="steps-summary">
        <h3>Diantre,</h3>
        votre alliance s'avère compliquée pour aujourd'hui,
        réessayer plus tard lorsque les conditions seront plus favorable !
      </div>
    </template>

    <!-- popups-->
    <slot-popup
      :alliance-id="$route.params.id"
      :update-alliance="updateCurrentAlliance">
    </slot-popup>
    <confirmation-popup
      :user-selection="userSelection"
      :update-alliance="updateCurrentAlliance">
    </confirmation-popup>
  </div>
</template>

<script>
import Profile from './../commons/Profile'
import ConfirmationPopup from './../commons/popup/Confirmation'
import SlotPopup from './../commons/popup/Slot'


export default {
  components: {
    Profile,
    SlotPopup,
    ConfirmationPopup
  },
  methods: {
    allianceRequest(response) {
      const allianceId = this.$route.params.id;
      this.userSelection = response;

      // si non, on doit définir des horaires,
      // si oui, c'est terminé on affiche l'adresse au demandeur :)
      if (response) {
        this.openConfirmation();
        const datas = JSON.stringify({ availability: { completed: true, giver: true } });
        this.$http.put(`alliances/${allianceId}`, datas, { emulateJSON: true })
          .catch(err => console.log(err));
      } else {
        this.openSlot(); // TODO: a gerer
      }
    },
    allianceAvailability(response) {
      const allianceId = this.$route.params.id;

      // ouvrir la popup de confirmation
      this.userSelection = response;
      this.openConfirmation();

      // définir si le demandeur accepte le créneau horaire du donneur
      if (response) {
        this.$http.put(`alliances/${allianceId}/applicant/accepted`)
          .catch(err => console.log(err));
      } else {
        // si non, on abandonne l'alliance
        const abandoned = JSON.stringify({ status: 'abandoned' });
        this.$http.put(`alliances/${allianceId}`, abandoned, { emulateJSON: true })
          .catch(err => console.log(err));
      }
    },
    allianceExchange(response) {
      const allianceId = this.$route.params.id;
      const datas = JSON.stringify({ exchange: response });

      // ouvrir la popup de confirmation
      this.userSelection = response;
      this.openConfirmation();

      // définir si le produit a été échangé
      this.$http.put(`alliances/${allianceId}`, datas, { emulateJSON: true })
        .then(() => {
          if (!response) {
            // si non, on abandonne cette alliance
            const abandoned = JSON.stringify({ status: 'abandoned' });
            this.$http.put(`alliances/${allianceId}`, abandoned, { emulateJSON: true })
              .catch(err => console.log(err));
          } else {
            // on met également à jour la quantité restante du produit
            const product = JSON.stringify({ quantity: this.alliance.quantity });
            this.$http.put(`products/${this.alliance.product._id}/quantity`, product, { emulateJSON: true })
              .catch(err => console.log(err));
          }
        })
        .catch(err => console.log(err));
    },
    allianceReview() {
      const allianceId = this.$route.params.id;
      const datas = JSON.stringify({
        note: this.form.review,
        foodkeeper: this.foodkeeper._id,
      });

      // ajouter une note pour le garde manger
      this.$http.post(`reviews`, datas, { emulateJSON: true })
        .then(() => {
          // une fois noté, l'alliance est terminé
          const terminated = JSON.stringify({ status: 'terminated' });
          this.$http.put(`alliances/${allianceId}`, terminated, { emulateJSON: true })
            .catch(err => console.log(err));

          // on redirige sur les alliances
          this.$route.router.go({ name: 'Alliances' });
        })
        .catch(err => console.log(err));
    },
    openConfirmation() {
      // ouverture popup confirmation
      document.getElementsByClassName('confirmation-popup-container')[0].classList.add('active');
      document.getElementsByClassName('confirmation-popup-overlay')[0].classList.add('active');
    },
    openSlot() {
      // ouverture popup créneau horaire
      document.getElementsByClassName('slot-popup-container')[0].classList.add('active');
      document.getElementsByClassName('slot-popup-overlay')[0].classList.add('active');
    },
    updateCurrentAlliance() {
      const allianceId = this.$route.params.id;

      // récupérer une alliance en fonction de son id
      this.$http({ url: `alliances/${allianceId}/user/${global.currentUserId}`, method: 'GET' })
        .then(response => {
          this.alliance = response.data;

          // récupére le 1er foodkeeper associé au produit
          this.$http({ url: `products/${this.alliance.product._id}`, method: 'GET' })
            .then(response => this.foodkeeper = response.data.foodkeepers[0])
            .catch(err => console.log(err));

          // on met à jour la date de lecture
          let datas;
          if (this.alliance.type == 'applicant') {
            this.$http({ url: `alliances/${allianceId}/read/applicant`, method: 'PUT' })
              .catch(err => console.log(err));
          } else {
            this.$http({ url: `alliances/${allianceId}/read/giver`, method: 'PUT' })
              .catch(err => console.log(err));
          }
        })
        .catch(err => console.log(err));
    }
  },
  data() {
    return {
      userSelection: false,
      foodkeeper: {},
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
        request: {
          completed: false,
        },
        availability: {
          completed: false,
        },
        exchange: false,
      },
    };
  },
  ready() {
    // lorsque le componsant est prêt, mettre à jour les données
    this.updateCurrentAlliance();
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
