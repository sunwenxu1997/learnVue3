
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
            component: () => import('../components/learn1.vue'),
            meta: { title: '什么是组合API，初步了解' }
        },
        {
            path: '/learn2',
            name: 'learn2',
            component: () => import('../components/learn2.vue'),
            meta: { title: '组合API，代码抽离' }
        },
        {
            path: '/learn3',
            name: 'learn3',
            component: () => import('../components/learn3.vue'),
            meta: { title: '代码模块化，使代码看起来更加简洁' }
        },
        {
            path: '/learn4',
            name: 'learn4',
            component: () => import('../components/learn4.vue'),
            meta: { title: 'vue2编写方式和vue3编写方式的混合使用' }
        },
        {
            path: '/learn5',
            name: 'learn5',
            component: () => import('../components/learn5.vue'),
            meta: { title: 'setup执行时机和注意点' }
        },
        {
            path: '/learn6',
            name: 'learn6',
            component: () => import('../components/learn6.vue'),
            meta: { title: 'reactive使用的注意点' }
        },
        {
            path: '/learn7',
            name: 'learn7',
            component: () => import('../components/learn7.vue'),
            meta: { title: 'ref的本质' }
        },
        {
            path: '/learn8',
            name: 'learn8',
            component: () => import('../components/learn8.vue'),
            meta: { title: 'watchEffect与watch' }
        },
        {
            path: '/other',
            name: 'other',
            component: () => import('../components/other.vue'),
            meta: { title: '例子' }
        }
    ]
});
router.beforeEach((to, from) => {
    // ...
    // 显式返回false以取消导航
    // return false
})
export default router;