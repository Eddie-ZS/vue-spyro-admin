const Layout = () => import('@/layouts/index.vue');

export default {
	path: '/',
	name: 'Home',
	component: Layout,
	redirect: '/index',
	meta: {
		title: '首页'
	},
	children: [
		{
			path: '/index',
			name: 'Index',
			component: () => import('@/views/home/index.vue'),
			meta: {
				icon: 'ep:home-filled',
				title: '首页'
			}
		}
	]
} satisfies RouteOption;
