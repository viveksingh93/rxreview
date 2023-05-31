import HomeComp from "./components/HomeComp.vue"
import Signup from "./components/signUp.vue"
import LoginComp from './components/LoginComp.vue'
import HeaderComp from './components/HeaderComp.vue'
import AddReview from './components/AddReview.vue'
//import exampleModel from './components/exampleModel.vue'
import UpdateReview from './components/UpdateReview.vue'
import contactUS from './components/contactUs.vue'

import { createWebHistory, createRouter } from 'vue-router'

const routes=[{
    name: 'Home',
    path: '/',
    component: HomeComp
},
{
    name: 'Signup',
    path: '/Sign-up',
    component: Signup
},
{
    name: 'Login',
    path: '/Login',
    component: LoginComp
},
{
    name: 'Header',
    path: '/Header',
    component: HeaderComp
},
{
    name: 'Add',
    path: '/add-Review',
    component: AddReview
},
{
    name: 'Update',
    path: '/update-Review/:id',
    component: UpdateReview
},
{
    name:'contactUS',
    path:'/contact-US',
    component:contactUS
}
]

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;