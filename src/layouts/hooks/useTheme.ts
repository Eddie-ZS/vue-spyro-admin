import { useLayoutStore } from '@/store';
import { getThemeLightOrDarkHexColor } from '@/utils/color';

export const useTheme = () => {
	const layoutStore = useLayoutStore();
	const isDark = computed(() => layoutStore.isDark);
	const menuTheme = computed(() => layoutStore.menuTheme);
	const themeColor = computed(() => layoutStore.themeColor);
	const html = document.documentElement as HTMLElement;

	/**主题切换 */
	const switchDark = () => {
		if (isDark.value) {
			html.className = 'dark';
		} else {
			html.classList.remove('dark');
		}
		html.className = `el-menu-layout`;
		setMenuTheme();
		setThemeColor(unref(themeColor));
	};

	/**设置菜单栏主题 */
	const setMenuTheme = () => {};

	/**设置主题颜色 */
	const setThemeColor = (val?: string) => {
		const colour: number = isDark.value ? 20.5 : 255;
		const colors = {
			// 设置 自定义主题颜色
			'--el-color-primary': val,
			// 设置 自定义主题下 active 颜色
			'--el-color-primary-dark-2': getThemeLightOrDarkHexColor(val as string, 0.1, colour) as string,
			// 设置 自定义主题下 hover 颜色
			...Array.from({ length: 9 }, (_: unknown, i: number) => ({
				[`--el-color-primary-light-${i + 1}`]: getThemeLightOrDarkHexColor(val as string, (i + 1) / 10, colour) as string
			})).reduce((acc, curr) => ({ ...acc, ...curr }), {})
		};
		const theme = (layoutStore.isDark ? 'html.dark' : ':root') + JSON.stringify(colors).replace(/,/g, ';').replace(/"/g, '');

		// 将主题style挂到head上
		let style = document.getElementById('theme-var');
		if (style) {
			style.innerHTML = theme;
		} else {
			style = document.createElement('style');
			style.textContent = theme;
			style.id = 'theme-var';
			document.head.append(style);
		}
		layoutStore.$patch({ themeColor: val });
	};

	/**灰色模式 */
	const setGrayMode = () => {
		html.classList.toggle('html-grey');
	};
	/**色弱模式 */
	const setWeakNessMode = () => {
		html.classList.toggle('html-weakness');
	};

	const initTheme = () => {
		switchDark();
		layoutStore.grayMode && setGrayMode();
		layoutStore.weakness && setWeakNessMode();
	};
	return {
		initTheme,
		switchDark,
		setMenuTheme,
		setThemeColor,
		setGrayMode,
		setWeakNessMode
	};
};