<template>
  <div></div>
</template>

<script>
import router from '../../router'

export default {
  ready () {
    setTimeout(() => router.go({ name: 'Market' }), 2000)
  },
}
</script>
