import { createRouter, createWebHistory } from 'vue-router';
import CafePages from '../pages/CafePages';
import CafeRandomPage from '../pages/CafeRandomPage.vue';

const routes = [
    {
        path: '/',
        name: 'CafePages',
        component: CafePages,
    },
    {
        path: '/cafe/:id',
        name: 'CafeRandomPage',
        component: CafeRandomPage,
        props: true,
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;