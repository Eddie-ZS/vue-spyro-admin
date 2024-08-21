const LinkView = () => import('@/layouts/linkView.vue');

// 外链的使用方式
export default [
	{
		// path 必须以 / 开始，后面随意编写
		path: '/v3',
		// name 为 外链地址(不能重复)
		name: 'https://cn.vuejs.org/guide/quick-start.html',
		component: LinkView,
		meta: {
			icon: 'mdi:about',
			title: '关于本站',
			sort: 99
		}
	},
	{
		path: '/link',
		redirect: '/link/strapi',
		meta: {
			icon: 'ant-design:export-outlined',
			title: '文档（外链）',
			sort: 5
		},
		children: [
			{
				// path 必须以 / 开始，后面随意编写
				path: '/link/strapi',
				// name 为 外链地址(不能重复)
				name: 'https://www.strapi.cn/',
				component: LinkView,
				meta: {
					icon: 'logos:strapi-icon',
					title: 'strapi 官网',
					showParent: true
				}
			},
			{
				// path 必须以 / 开始，后面随意编写
				path: '/link/element-plus',
				// name 为 外链地址(不能重复)
				name: 'https://element-plus.org/zh-CN/component/menu.html',
				component: LinkView,
				meta: {
					icon: 'logos:element',
					title: 'element-plus 官网'
				}
			}
		]
	}
] satisfies RouteOption[];