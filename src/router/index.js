import {createRouter, createWebHistory} from "vue-router";
import HomeComponent from "../public/pages/home.component.vue";
import ExaminerPerformanceOverviewComponent from "../public/pages/examiner-performance-overview.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/home',                    name: 'home', component: HomeComponent, meta: { title: 'Home' }},
        { path: '/examiner-performance-overview', name: 'examiner-performance-overview', component: ExaminerPerformanceOverviewComponent, meta: { title: 'Examiner Performance Overview' }},
        { path: '/',                        redirect: '/home'}
    ]
});

router.beforeEach((to, from, next) => {
    let baseTitle = 'HIGN';
    document.title = `${baseTitle} | ${to.meta['title']}`;
    next();
})

export default router;