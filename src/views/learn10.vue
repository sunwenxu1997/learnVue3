<template>
  <div>
    <h1>123</h1>
    <button @click="change">颜色改变</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: 'red'
    }
  },
  methods: {
    change() {
      this.color = 'yellow'
    }
  }
}
</script>

<style>
/* https://github.com/vuejs/rfcs/pull/231 */
h1 {
  color: v-bind(color);
}
</style>