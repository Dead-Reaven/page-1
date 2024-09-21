import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'

const routes = [
	{ path: '/', name: 'Головна', component: Home },
	{ path: '/about', name: 'Про нас', component: About },
]
const router = createRouter({
	routes,
	history: createWebHistory(import.meta.env.BASE_URL),
})

export { router, routes }
