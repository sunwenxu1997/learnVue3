<script>
// Vue 3 渲染函数示例
import { h, reactive } from 'vue'
export default {
  props: {
    text: String
  },

  //   Vue 2 渲染函数示例
  //   render(h) {
  //     return h('div')
  //   },
  //   在 3.x 中，h 现在是全局导入的，而不是作为参数自动传递。
  //   render() {
  //     return h('h1', '123')
  //   },

  /* 在 3.x 中，由于 render 函数不再接收任何参数，它将主要用于 setup() 函数内部。
  这还有一个好处：可以访问作用域中声明的响应式状态和函数，以及传递给 setup() 的参数。 */
  setup(props) {
    console.log(props)
    const state = reactive({
      count: 0
    })
    function increment() {
      state.count++
    }
    // 返回render函数
    /* 
    参数：
    h(
        一个 HTML 标签名、一个组件、一个异步组件，或者 null,
        {与 attribute、prop 和事件相对应的对象。} 可选,
        子 VNodes, 使用 `h()` 构建 可选
    )
    */
    return () =>
      h('div', {}, '文字：' + props.text, [
        h('h2', { class: ['blog-title'], onClick: increment }, state.count),
        ,
        h('h3', { style: { color: 'blue' } }, 'A headline')
      ])
  }
}
</script>

<style>
.blog-title {
  color: red;
}
</style>