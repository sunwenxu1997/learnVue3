<template>
  <div>
    <text-input v-model="text"></text-input>
    <button @click="submit">submit</button>
  </div>
</template>

<script>
import textInput from '../components/textInput.vue'
import { ref } from 'vue'
export default {
  components: {
    textInput
  },
  setup() {
    let text = ref(0)
    function submit() {
      console.log(text.value)
    }
    return { text, submit }
  }
}
</script>

<style>
</style>