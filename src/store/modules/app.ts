import type { LocaleKey } from '@/plugins/i18n/locales';
import { defineStore } from 'pinia';
import type { AppStateType } from '../types';
import Cookies from 'js-cookie';

export const useAppStore = defineStore('app', {
	state: (): AppStateType => ({
		// 菜单是否收缩 是: false, 否: true
		isCollapse: false,
		// 移动端适配
		isMobile: false,
		// 刷新
		reload: true,
		// i18n
		language: Cookies.get('language') || 'zh-CN'
	}),
	getters: {},
	actions: {
		setLanguage(language: LocaleKey) {
			this.language = language;
			Cookies.set('language', language);
		},
		// 刷新页面
		reloadPage() {
			this.reload = false;
			nextTick(() => {
				this.reload = true;
			});
		}
	}
});
