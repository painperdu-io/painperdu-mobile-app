<template>
  <div class="details-market-members-container">

    <template v-for="user in users">
      <div class="details-market-members-item" v-link="">
        <div class="details-market-members-image">
          <img src="https://randomuser.me/api/portraits/men/{{ user.id }}.jpg"/>
        </div>
      </div>
    </template>



  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          id: 79,
          name: 'Firstname Lastname',
        },
        {
          id: 80,
          name: 'Firstname Lastname',
        },
        {
          id: 34,
          name: 'Firstname Lastname',
        },
        {
          id: 54,
          name: 'Firstname Lastname',
        },
        {
          id: 23,
          name: 'Firstname Lastname',
        },
        {
          id: 64,
          name: 'Firstname Lastname',
        },
        {
          id: 43,
          name: 'Firstname Lastname',
        },
        {
          id: 21,
          name: 'Firstname Lastname',
        },
      ]
    }
  }
};
</script>

<style lang="scss" scoped>

.details-market-members-container {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
}

.details-market-members-item {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-content: center;

  width: 60px;
  height: 60px;
  
}

  .details-market-members-image {
    display: flex;
    justify-content: center;
    flex-direction: column;

    img {
      width: 70px;
      height: 70px;
    }
  }

</style>
