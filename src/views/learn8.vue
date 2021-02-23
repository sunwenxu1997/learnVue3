<template>
  <h2>{{num}}</h2>
</template>

<script>
// watchEffect
// 在响应式地跟踪其依赖项时立即运行一个函数，并在更改依赖项时重新运行它。

// 与 watchEffect 比较，watch 允许我们：
// 懒执行副作用；
// 更具体地说明什么状态应该触发侦听器重新运行；
// 访问侦听状态变化前后的值。
import { ref, onMounted, watch, watchEffect } from 'vue'
export default {
  methods: {},
  setup() {
    let num = ref(5)
    // watchEffect(()=>{
    //     console.log(num.value);
    // })
    setTimeout(() => {
      num.value++
    }, 1000)
    watch(num, (newVal, oldVal) => {
      console.log(newVal, oldVal)
    })
    return { num }
  }
}
</script>

<style  scoped>
</style>