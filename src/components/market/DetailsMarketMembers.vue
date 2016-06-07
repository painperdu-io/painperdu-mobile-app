<template>
  <div class="details-market-members-wrapper">
    <members-list :members="members" type="ally" add="false"></members-list>
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
      members: [],
    };
  },
  ready() {
    const foodkeeperId = this.$route.params.id;
    const userId = '575302fc5dacbac32540268d';

    // récupére les informations sur les compères
    this.$http({ url: `users/${userId}/foodkeeper/${foodkeeperId}`, method: 'GET' })
      .then((response) => { this.members = response.data; })
      .catch(err => { console.log(err); });
  }
};
</script>

<style lang="scss" scoped>
.details-market-members-wrapper {}
</style>
