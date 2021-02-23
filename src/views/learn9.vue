<template>
  <div>
    <p>传递的参数：{{routerQuery}}</p>
    <button @click="skip">跳转</button>
  </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    let routerQuery = route.query
    function skip() {
      router.push({
        path: '/',
        query: {
          from: route.name
        }
      })
    }
    return { routerQuery, skip }
  }
}
</script>

<style>
</style>