<template>
  <div>
    PAGE LOGIN / REGISTER --> DIRECTION HOME
  </div>
</template>

<script>
import router from '../../router'

export default {
  ready () {
    setTimeout(() => router.go({ name: 'home' }), 2000)
  },
}
</script>
