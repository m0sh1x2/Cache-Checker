import Home from '@/components/Home/Home'
import Sites from '@/components/Sites/Sites'
import Profile from '@/components/Profile/Profile'
import Login from '@/components/Authentication/Login'
import Register from '@/components/Authentication/Register'

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