import Home from '@/components/home/Home'
import Sites from '@/components/sites/Sites'
import Profile from '@/components/profile/Profile'
import Login from '@/components/authentication/Login'
import Register from '@/components/authentication/Register'


export const routes = [{
        path: '/',
        component: Home
    },
    {
        path: '/sites',
        component: Sites
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    }
]