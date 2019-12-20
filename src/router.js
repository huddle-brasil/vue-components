import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard'
import Flow from './views/Flow'
import FlowGames from './views/FlowGames'
import RegisterCompleted from './views/RegisterCompleted'


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
        },
        {
            path: '/flow-games',
            name: 'flow-games',
            component: FlowGames
        },
        {
            path: '/register-completed',
            name: 'register-completed',
            component: RegisterCompleted
        }
    ]
})

export default router