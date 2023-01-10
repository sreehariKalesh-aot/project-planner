import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddProject from '../views/AddProject.vue'
import EditProject from '../views/EditProject.vue'
import Login from "../views/Login.vue"

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// auth guards
const requireAuth = (to, from, next) => {
  let user = firebase.auth().currentUser
  console.log('current user in auth guard: ', user)
  if (!user) {
    next({ name: 'login' })
  } else {
    next()
  }
}

const requireNoAuth = (to, from, next) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      next({ name: 'home' })
    } else {
      next()
    }
  });


}



const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
    beforeEnter: requireNoAuth
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/add',
    name: 'AddProject',
    component: AddProject,
     beforeEnter: requireAuth
  } ,
  {
    path: '/projects/:id',
    name: 'EditProject',
    component: EditProject,
    props: true
  } 

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
