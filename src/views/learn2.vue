<template>
  <!-- 组合API -->
  <div>
    <form>
      <input type="text" v-model="state2.stu.id" />
      <input type="text" v-model="state2.stu.name" />
      <input type="text" v-model="state2.stu.age" />
      <input type="submit" @click="addStu" />
    </form>
    <ul>
      <li
        @click="remStu(index)"
        v-for="(i,index) in state.stus"
        :key="index"
      >{{i.name}} -- {{i.age}}</li>
    </ul>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  //setup函数是组合API的入口函数
  setup() {
    /*  //ref函数的注意点
    //ref函数只能监听简单的类型的变化，不能监听复杂类型的变化(对象/数组)
    let state = reactive({
      stus: [
        { id: 1, name: 'zs', age: 10 },
        { id: 2, name: 'ls', age: 20 },
        { id: 3, name: 'ww', age: 30 }
      ]
    })
    function remStu(index) {
      // state.stus = state.stus.filter((stu, idx) => idx !== index)
      state.stus.splice(index, 1)
    } */

    let { state, remStu } = useRemoveStudent()
    let { state2, addStu } = useAddStudent(state)
    return { state, remStu, state2, addStu }
  }
}
//把放在入口函数处的代码抽离出来，解决vue2中数据分散的问题
function useRemoveStudent() {
  let state = reactive({
    stus: [
      { id: 1, name: 'zs', age: 10 },
      { id: 2, name: 'ls', age: 20 },
      { id: 3, name: 'ww', age: 30 }
    ]
  })
  function remStu(index) {
    // state.stus = state.stus.filter((stu, idx) => idx !== index)
    state.stus.splice(index, 1)
  }
  return { state, remStu }
}
//把添加的方法抽离出来
function useAddStudent(state) {
  let state2 = reactive({
    stu: {
      id: '',
      name: '',
      age: ''
    }
  })
  function addStu(e) {
    e.preventDefault()
    console.log(state2.stu)
    const st = { ...state2.stu }
    state.stus.push(st)
    state2.stu.id = ''
    state2.stu.name = ''
    state2.stu.age = ''
  }
  return { state2, addStu }
}
</script>

<style>
</style>