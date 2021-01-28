
import { createRouter, createWebHistory } from 'vue-router';

const routerHistory = createWebHistory();

const router = createRouter({
    history: routerHistory,  // history
    routes: [
        {
            path: '/learn1',
            name: 'learn1',
            component: () => import('../components/learn1.vue')
        },
        {
            path: '/learn2',
            name: 'learn2',
            component: () => import('../components/learn2.vue')
        }
    ]
});

export default router;