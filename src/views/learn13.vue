<template>
  <div>
    <text-button ref="root" :text="text" @submit="toSubmit"></text-button>
    <br />
    <br />
    <button @click="changeText">修改</button>
  </div>
</template>

<script>
import textButton from '../components/textButton.vue'
import { ref, onMounted } from 'vue'
export default {
  components: {
    textButton
  },
  setup() {
    //  创建一个组件的 ref 引用
    //  变量名对应上文中 ref="root"
    const root = ref(null)
    let text = ref('按钮')

    function toSubmit(val) {
      text.value = val
    }

    function changeText() {
      text.value = '父组件修改了子组件的props值'
      //  等同于 vue2.0 中的 this.$refs.root.btnText
      root.value.btnText = '父组件修改了子组件的setup值'
      console.log(root.value.btnText)
    }
    // onMounted(() => {
    //   // DOM元素将在初始渲染后分配给ref
    //   //   console.log(root.value.btnText) // <div>这是根元素</div>
    // })

    // 把创建的引用 return 出去
    return { text, toSubmit, changeText, root }
  }
}
</script>

<style>
</style>