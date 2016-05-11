<template>
  <div class="nav-left">
    <ul class="nav-menu">
      <li class="nav-item"><a href="#"><span class="icon icon-note"></span> Noter l'application</a></li>
      <li class="nav-item"><a href="#"><span class="icon icon-share"></span> Partager l'application</a></li>
      <li class="nav-item"><a href="#"><span class="icon icon-help"></span> Aide</a></li>
      <li class="nav-item"><a href="#"><span class="icon icon-cgu"></span> Conditions générales</a></li>
      <li class="nav-item"><a href="#"><span class="icon icon-partner"></span> Partenaires</a></li>
      <li class="nav-item"><a href="#"><span class="icon icon-contact"></span> Contacts</a></li>
    </ul>
    <div v-link="" class="nav-logout">Déconnexion</div>
  </div>
</template>

<script>
export default {}
</script>

<style lang='scss' scoped>
.nav-menu {

}

  .nav-item {
    line-height: 80px/2;

    & > a {
      text-decoration: none;
    }
  }

.nav-logout {
  //background:
}

.icon {
  width: 30px/2;
  height: 30px/2;
  display: block;
}

  .icon-note {
    background: url('/static/icons/nav-note.svg') center center no-repeat;
  }

  .icon-share {
    background: url('/static/icons/nav-share.svg') center center no-repeat;
  }

  .icon-help {
    background: url('/static/icons/nav-help.svg') center center no-repeat;
  }

  .icon-cgu {
    background: url('/static/icons/nav-cgu.svg') center center no-repeat;
  }

  .icon-partner {
    background: url('/static/icons/nav-partner.svg') center center no-repeat;
  }

  .icon-contact {
    background: url('/static/icons/nav-contact.svg') center center no-repeat;
  }
</style>
