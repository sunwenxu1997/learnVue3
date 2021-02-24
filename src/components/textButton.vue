<template>
  <button @click="submit">{{text}}</button>
</template>

<script>
import { ref } from 'vue'
export default {
  props: {
    text: String | Number
  },
  setup() {
    let btnText = ref('子组件修改了父组件的数值')
    return { btnText }
  },
  methods: {
    submit() {
      this.$emit('submit', this.btnText)
    }
  }
}
</script>

<style>
</style>