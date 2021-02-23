<template>
  <div>
    <input type="text" :value="modelValue" @input="changeText($event.target.value)" />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String | Number
  },
  emits: ['update:modelValue'],
  methods: {
    changeText(text) {
      console.log(text)
      this.$emit('update:modelValue', text) // 以前是 `this.$emit('input', title)`
    }
  }
}
</script>

<style>
</style>