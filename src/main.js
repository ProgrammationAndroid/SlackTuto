// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import firebase from 'firebase'
import Login from './pages/Login'
import Register from './pages/Register'
import Tchat from './pages/Tchat'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/',
    component: Tchat
  }
]
const router = new VueRouter({routes})

// Initialize Firebase
let config = {
  apiKey: "AIzaSyCo6qsgTrXQp2GjaEBOILr93ukdPNT-JrA",
  authDomain: "tutoslack-f24ce.firebaseapp.com",
  databaseURL: "https://tutoslack-f24ce.firebaseio.com",
  storageBucket: "tutoslack-f24ce.appspot.com",
  messagingSenderId: "718955453458"
};
firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
