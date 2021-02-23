<template>
  <div>
    <!-- 注意点：
    如果是通过ref创建的数据，在使用的时候不用通过 .value来获取
    因为vue会自动给我们添加 age.value
     -->
    <p>{{age}}</p>
    <button @click="myFun">按钮</button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    /* 
    ref本质：
    ref本质其实还是reactive
    当我们给ref函数传递一个值后，ref函数底层会自动将ref转换成reactive
    ref(18) -> reactive({value:18})
    */
    let age = ref(18)
    function myFun() {
      //  age = 66 //直接通过改变age，不可行
      age.value = 66
    }
    return { age, myFun }
  }
}
</script>

<style>
</style>