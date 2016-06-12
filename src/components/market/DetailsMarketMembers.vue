<template>
  <div class="details-market-members-wrapper">
    <members-list :members="ally" type="ally" add="false"></members-list>
  </div>
</template>

<script>
import MembersList from './../commons/MembersList'

export default {
  components: {
    MembersList,
  },
  data() {
    return {
      ally: [],
    };
  },
  ready() {
    const marketId = this.$route.params.id;

    // récupérer les informations du market en fonction de son id
    this.$http({ url: `markets/${marketId}/ally`, method: 'GET' })
      .then(response => this.ally = response.data)
      .catch(err => console.log(err));
  }
};
</script>

<style lang="scss" scoped>
.details-market-members-wrapper {
  overflow-y: scroll;
}
</style>
