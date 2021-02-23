<template>
  <blogTitle :text="text"></blogTitle>
</template>

<script>
import blogTitle from '../components/blogTitle.vue'
export default {
  components: {
    blogTitle
  },
  data() {
    return {
      text: '哈哈'
    }
  }
}
</script>

<style>
</style>