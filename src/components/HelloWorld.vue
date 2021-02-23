<template>
  <div>
    <ol>
      <li @click="skip(item)" v-for="item in list" :key="item.name">{{item.meta.title}}</li>
    </ol>
  </div>
</template>

<script>
// 路由合成API
// https://next.router.vuejs.org/guide/advanced/composition-api.html
import { useRouter, useRoute } from 'vue-router'
// import Router from '../router/index'
export default {
  name: 'HelloWorld',
  /*   data() {
    return {
      list:Router.options.routes
    }
  },
  methods:{
    skip(router){
      this.$router.push({
        name:router.name
      })
    }
  } */
  setup() {
    const router = useRouter()
    const route = useRoute()
    let list = router.options.routes
    if (list[0].path === '/') {
      list.shift()
    }
    function skip(row) {
      router.push({
        name: row.name,
        query: {
          params: 123
        }
      })
    }
    return { list, skip }
  }
}
</script>
<style scoped>
ol {
  text-align: left;
}
ol li {
  cursor: pointer;
}
ol li:hover {
  font-weight: bold;
  color: #11bb74;
  text-decoration: underline;
}
</style>
