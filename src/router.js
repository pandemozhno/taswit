import { createWebHistory, createRouter } from "vue-router"

import Login from "./pages/auth/Login.vue"
import Registration from "./pages/auth/Registration.vue"
import Vote from "./pages/Vote.vue"

const routes = [
    { path: '/login', name: "main", component: Login },
    { path: '/registration', name: "registration", component: Registration },
    { path: '/', name: "login", component: Vote }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router