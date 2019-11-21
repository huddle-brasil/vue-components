import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard'
import Flow from './views/Flow'


Vue.use(Router);

const router =  new Router({
    mode: 'history',
    routes: [
        {
            path: '*',
            redirect: '/',
        },
        {
            path: '/',
            name: 'dashboard',
            component: Dashboard,
        },
        {
            path: '/flow',
            name: 'flow',
            component: Flow
        }
    ]
})

export default router