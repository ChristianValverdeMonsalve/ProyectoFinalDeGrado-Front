import { createWebHistory, createRouter } from "vue-router"

import LandingPage from "../views/LandingPage.vue"
import Login from "../views/Login.vue"
import Contact from "../views/Contact.vue"
import Activities from "../views/Activities.vue"
import BookingClasses from "../views/BookingClasses.vue"
import Profile from "../views/Profile.vue"


const routes = [
  { path: "/", component: LandingPage },
  { path: "/login", component: Login },
  { path: "/contact", component: Contact },
  { path: "/activities", component: Activities },
  { path: "/booking", component: BookingClasses },
  { path: "/profile", component: Profile }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router