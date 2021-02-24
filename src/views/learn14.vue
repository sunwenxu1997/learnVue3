<template>
  <div>
    <button @click="alert = true">打开弹框</button>
    <div id="alert" class="alert-content" v-if="alert">
      <h3>我是一个弹框</h3>
      <!-- 插入到body标签内，脱离当前的HTML层 -->
      <teleport to="body">
        <div class="cover" v-if="alert" @click="alert=false"></div>
      </teleport>
    </div>
    <!-- 不生效 
    无法用选择器"#alert"定位传送目标。
    注意，目标元素必须在组件挂载之前存在——也就是说，目标不能由组件本身呈现，理想情况下应该在整个Vue组件树之外。-->
    <!-- <teleport to="#alert">
      <button class="close">关闭弹框</button>
    </teleport>-->
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    let alert = ref(false)
    return { alert }
  }
}
</script>

<style  scoped>
.alert-content {
  width: 400px;
  height: 300px;
  background: white;
  margin: 15vh auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
}
.close {
  margin: 20px auto;
}
.cover {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.521);
}
</style>