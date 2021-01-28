<template>
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
/* 此种设计避免了vue2中数据分散问题，实现了模块化管理 */
/* 引入添加的方法 */
import useAddStudent from './js/addStu'
/* 引入移除的方法 */
import useRemoveStudent from './js/remStu'
export default {
  setup() {
    let { state, remStu } = useRemoveStudent()
    let { state2, addStu } = useAddStudent(state)
    return { state, remStu, state2, addStu }
  }
}
</script>

<style>
</style>