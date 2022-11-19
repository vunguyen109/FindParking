import Vue from 'vue'

import VueRouter from 'vue-router'
import Main from '@/components/layout/main'
import Err from '@/views/err'
import Index from '@/views/home/index'
import Login from '@/views/login'
import Register from '@/views/register'


Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        component: Main,
        redirect: 'index',
        children: [
            {
                path: '/index', ///path của route
                name: 'index', // tên route
                component: Index // component route sử dụng
            },
            {
                path: '/login', ///path của route
                name: 'login', // tên route
                component: Login // component route sử dụng
            },
            {
                path: '/register', ///path của route
                name: 'register', // tên route
                component: Register // component route sử dụng
            },
        ]
    },
    {
		path: '/err',
        name: 'Err', // tên route
        component: Err,
	},
]



const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
