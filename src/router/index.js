
import { createRouter, createWebHistory } from 'vue-router';
const routerHistory = createWebHistory();

const router = createRouter({
    history: routerHistory,  // history
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../components/HelloWorld.vue'),
            meta: { title: '首页' }
        },

        {
            path: '/learn1',
            name: 'learn1',
            component: () => import('../views/learn1.vue'),
            meta: { title: '什么是组合API，初步了解' }
        },
        {
            path: '/learn2',
            name: 'learn2',
            component: () => import('../views/learn2.vue'),
            meta: { title: '组合API，代码抽离' }
        },
        {
            path: '/learn3',
            name: 'learn3',
            component: () => import('../views/learn3.vue'),
            meta: { title: '代码模块化，使代码看起来更加简洁' }
        },
        {
            path: '/learn4',
            name: 'learn4',
            component: () => import('../views/learn4.vue'),
            meta: { title: 'vue2编写方式和vue3编写方式的混合使用' }
        },
        {
            path: '/learn5',
            name: 'learn5',
            component: () => import('../views/learn5.vue'),
            meta: { title: 'setup执行时机和注意点' }
        },
        {
            path: '/learn6',
            name: 'learn6',
            component: () => import('../views/learn6.vue'),
            meta: { title: 'reactive使用的注意点' }
        },
        {
            path: '/learn7',
            name: 'learn7',
            component: () => import('../views/learn7.vue'),
            meta: { title: 'ref的本质' }
        },
        {
            path: '/learn8',
            name: 'learn8',
            component: () => import('../views/learn8.vue'),
            meta: { title: 'watchEffect与watch' }
        },
        {
            path: '/learn9',
            name: 'learn9',
            component: () => import('../views/learn9.vue'),
            meta: { title: '路由参数传递和接收' }
        },
        {
            path: '/learn10',
            name: 'learn10',
            component: () => import('../views/learn10.vue'),
            meta: { title: 'css样式根据变量改变,v-bind(color)' }
        },
        {
            path: '/learn11',
            name: 'learn11',
            component: () => import('../views/learn11.vue'),
            meta: { title: '渲染函数 render h' }
        },
        {
            path: '/learn12',
            name: 'learn12',
            component: () => import('../views/learn12.vue'),
            meta: { title: '父子组件数据双向绑定 v-model' }
        },
        {
            path: '/learn13',
            name: 'learn13',
            component: () => import('../views/learn13.vue'),
            meta: { title: '父子组件传值 $ref的使用' }
        },
        {
            path: '/learn14',
            name: 'learn14',
            component: () => import('../views/learn14.vue'),
            meta: { title: '新特性 <teleport> 标签UI' }
        },
        {
            path: '/other',
            name: 'other',
            component: () => import('../components/other.vue'),
            meta: { title: '其他' }
        },
    ]
});
router.beforeEach((to, from) => {
    // ...
    // 显式返回false以取消导航
    // return false
})
export default router;