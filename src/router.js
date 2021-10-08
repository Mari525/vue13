import Vue from "vue";
import VueRouter from "vue-router";
import main from "@/pages/main"

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: main
	},
	{
		path: '/gallery',
		component: () => import('./pages/gallery')
	},
	{
		path: '/news',
		component: () => import('./pages/news')
	},
	{
		path: '/new',
		component: () => import('./pages/new')
	}
]

export default new VueRouter({
	mode: 'history',
	routes
})