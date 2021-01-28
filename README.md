
## 1.vue3.0的6大亮点

性能比Vue2快1.2～2倍

按需编译，体积比vue2更小

组合API(类似`React Hooks`)

更好的ts支持

暴漏了自定义渲染API

更先进的组件

## diff 算法：DOM节点(树形结构)对比操作，实现前端渲染

vue diff,在创建虚拟DOM的时候，会添加一个静态标记，以便于后来对比时，只更新对应静态标记的DOM

## 静态提升

vue2中无论元素是否参与更新，每次都会重新创建，然后再渲染

vue3中对于不参与更新的元素，会做静态提升，只会被创建一次，再渲染时直接服用即可

## 事件监听器缓存

默认情况袈`onClick`会被视为动态绑定，所以每次都会去追踪他的变化

但是因为是同一个函数，所以没有追踪变化，直接缓存起来复用即可

## ref和reactive的区别

1.ref储存的是数值，reactive储存的只能是个对象或数组

2.如果在template里面使用的是ref类型的数据，那么vue会自动给我们添加.value
如果在template里面使用的是reative类型的数据，那么vue不会自动帮我们添加.value

vue是如何决定是否需要添加`.value`的？--- 根据ref类型特有的 `__v_ref` 属性，如果有这个私有属性，并且为true，那么就代表是一个ref类型数据

可以通过特有的API，`{isRef,isReactive}` 来区分类型

## 递归监听

`https://www.bilibili.com/video/BV14k4y117LL?p=15`

1.默认情况下，无论是通过`ref`还是`reactive`都是递归监听，对会把每一层封装成一个`Proxy对象`

2.如果数据量比较大，非常消耗性能

## 非递归监听 {shallowReactive}{shallowRef,triggerRef}

`shallowReactive`,第一层改变时，进而会实现所有的改变,实现页面更新

`shallowRef`,第一层改变，并不会改变所有,只有value改变时才会改变(`value:{a:'a',gf:{b:'b}}`)

`triggerRef`,用来在修改指定层数值后，通过triggerRef('数据')重新赋值，实现页面更新

**应用场景：**

一般情况下使用 ref和reactive 即可，只有在需要监听的数据量比较大时才使用 `shallow...`