<template>
  <div>
    <p>{{name}}</p>
    <button @click="myFun1">按钮</button>
    <p>{{age}}</p>
    <button @click="myFun2">按钮</button>
  </div>
</template>

<script>
/* Composition API 和 Opation API 混合使用 vue2编写方式和vue3编写方式的混合使用
Composition API本质(组合API/注入API)
*/
import { ref } from 'vue'
export default {
  data() {
    return {
      name: 'swx'
    }
  },
  methods: {
    myFun1() {
      alert(this.name)
    }
  },
  //里面的内容都会被注入到对应的data和methods里面
  setup() {
    let age = ref(18)
    function myFun2() {
      alert(age.value)
    }
    return { age, myFun2 }
  }
}
</script>

<style>
</style>