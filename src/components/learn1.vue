<template>
  <!-- 组合API -->
  <div>
    <p>{{count}}</p>
    <button @click="myFun()">添加</button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  //setup函数是组合API的入口函数
  setup() {
    //let count = 0
    //定义了一个名称叫做count变量，这个变量的初始值是0
    let count = ref(0)
    //在组合API中定义一个方法，不用定义到methods中，可以直接定义到入口函数中
    function myFun() {
      // console.log(count)
      count.value++
    }
    return { count, myFun }
    //注意点：
    //在组合API定义的变量/方法，要想在外界使用，必须通过return {} 暴漏出去使用
  }
}
</script>

<style>
</style>