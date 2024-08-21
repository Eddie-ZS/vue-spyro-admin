const IframeView = () => import('@/layouts/iframeView.vue');
// iframe 内嵌的使用方式
export default {
	path: '/iframe',
	redirect: '/iframe/v3',
	meta: {
		icon: 'ant-design:select-outlined',
		title: '文档（内嵌）',
		sort: 4
	},
	children: [
		{
			// path 必须以 / 开始，后面随意编写
			path: '/iframe/v3',
			// 随意编写，不能重复
			name: 'Vue3',
			// 内嵌iframe组件
			component: IframeView,
			meta: {
				icon: 'logos:vue',
				title: 'Vue3 官网',
				// showParent: true, // 只有一个子级需要开启该配置
				iframeSrc: 'https://cn.vuejs.org/guide/quick-start.html',
				keepAlive: true
			}
		},
		{
			// path 必须以 / 开始，后面随意编写
			path: '/iframe/vite',
			// 随意编写，不能重复
			name: 'Vite',
			// 内嵌iframe组件
			component: IframeView,
			meta: {
				icon: 'logos:vitejs',
				title: 'Vite 官网',
				iframeSrc: 'https://cn.vitejs.dev/',
				keepAlive: true
			}
		}
	]
} satisfies RouteOption;