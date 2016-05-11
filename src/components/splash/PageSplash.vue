<template>
  <div>
    PAGE LOGIN / REGISTER --> DIRECTION HOME
  </div>
</template>

<script>
import router from '../../router'

export default {
  ready () {
    setTimeout(() => router.go({ name: 'market' }), 2000)
  },
}
</script>
