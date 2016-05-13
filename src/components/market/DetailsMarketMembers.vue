<template>
  <div class="users" v-for="user in users">
    <div class="user" v-link="">
      <div class="user-item">
        <img src="https://randomuser.me/api/portraits/men/{{ user.id }}.jpg"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          id: '79',
          name: 'Firstname Lastname',
          quantity: '3',
        },
        {
          id: '80',
          name: 'Firstname Lastname',
        },
        {
          id: '34',
          name: 'Firstname Lastname',
        },
        {
          id: '54',
          name: 'Firstname Lastname',
        },
        {
          id: '23',
          name: 'Firstname Lastname',
        },
        {
          id: '64',
          name: 'Firstname Lastname',
        },
        {
          id: '43',
          name: 'Firstname Lastname',
        },
        {
          id: '21',
          name: 'Firstname Lastname',
        },
      ]
    }
  }
};
</script>

<style lang="scss" scoped>


.users {
  //display: flex;

}

.user {
  display: flex;
  flex-flow: row wrap;
  //height: (120px / 2);
  //width: 100%;
}

  .user-item {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

</style>
