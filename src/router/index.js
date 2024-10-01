import {createRouter, createWebHistory} from "vue-router";
import HomeComponent from "../public/pages/home.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/home',                    name: 'home', component: HomeComponent, meta: { title: 'Home' }},
        { path: '/',                        redirect: '/home'}
    ]
});

router.beforeEach((to, from, next) => {
    let baseTitle = 'HIGN';
    document.title = `${baseTitle} | ${to.meta['title']}`;
    next();
})

export default router;