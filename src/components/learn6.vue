<template>
  <div>
    <!-- <p>{{state.num}}</p> -->
    <!-- <p>{{state}}</p> -->
    <p>{{state.time}}</p>
    <button @click="myFun">按钮</button>
  </div>
</template>

<script>
/* 
1.什么是reactive？
  -reactive是cue3中提供的实现响应式数据的方法
  -在vue2中响应式数据是通过defineProperty来实现的
   而在vue3中响应式数据是通过ES6的Proxy来实现的

2.reactive注意点：
  -reactive参数必须是对象（json/arr）
  -如果给reactive传递了其他对象
   + 默认情况下修改对象，但是界面不会自动更新
   + 如果想更新，可以通过重新赋值的方式
*/
import { reactive } from 'vue'
export default {
  setup() {
    // let state = reactive(1) //数值 不可行
    // let state = reactive({  //对象
    //   num:1
    // })
    // let state = reactive([1, 2, 3]) //数组
    let state = reactive({
      time: new Date()
    })
    function myFun() {
      // 传入时间对象时 其他对象 ，页面不会更新，需要重新赋值
      // state.time.setDate(state.time.getDate() + 1)
      // 重新赋值
      const newTime = new Date(state.time.getTime())
      newTime.setDate(state.time.getDate()+1)
      state.time = newTime
      console.log(state.time)
    }
    return { state, myFun }
  }
}
</script>

<style>
</style>