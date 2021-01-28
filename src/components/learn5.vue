<template>
  <div>
    <p>{{name}}</p>
    <button @click="myFun1">按钮</button>
    <p>{{age}}</p>
    <button @click="myFun2">按钮</button>
  </div>
</template>

<script>
/* 
1.setup执行时机
beforeCreate:表示组建刚刚被创建出来，组件的data和methods还没有初始化好
setup
Created:     表示组件甘冈被创建出来，并且组件的data和methods已经初始化好

2.setup注意点
-由于在执行setup函数的时候，还没有执行Created生命周期方法
 所以在setup函数中，是无法使用data和methods
-由于我们不能在setup函数中使用data和methods，
 所以vue为了避免我们错误的使用，他直接将setup函数中this修改成了undfined
-setup函数只能是同步的，不能是异步的 所以 async setup()是不可行的
*/
import { ref } from 'vue'
export default {
  data() {
    return {
      name: 'swx'
    }
  },
  created(){
   console.log(this.age);
   
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
    console.log(this);
    return { age, myFun2 }
  }
}
</script>

<style>
</style>