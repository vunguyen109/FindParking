import Vue from 'vue'

import VueRouter from 'vue-router'
import Main from '@/views/main'
import Purchase from '@/views/Purchase'
import Err from '@/views/err'
import Index from '@/views/index'
import Login from '@/views/login'
import Register from '@/views/register'
import Mypage from '@/views/mypage/mypage'


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
                path: '/Purchase', ///path của route
                name: 'Purchase', // tên route
                component: Purchase // component route sử dụng
            },
            {
                path: '/login', ///path của route
                name: 'Login', // tên route
                component: Login // component route sử dụng
            },
            {
                path: '/register', ///path của route
                name: 'Register', // tên route
                component: Register // component route sử dụng
            },
            {
                path: '/mypage', ///path của route
                name: 'Mypage', // tên route
                component: Mypage // component route sử dụng
            },
        ]
    },
	{
		path: '',
		redirect: '/IF_MOBILEとは',
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
