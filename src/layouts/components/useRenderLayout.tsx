import { Icon } from '@/components/Icon/index';
import { MainApp, Menu, Tabs, ToolLeft, ToolRight, CollapseIcon, BreadCrumb, VerticalMenu, HorizontalMenu } from './index';
import { useAppStore } from '@/store';
import { unref } from 'vue';
import { ElContainer, ElAside, ElHeader, ElScrollbar } from 'element-plus';
import router from '@/router';

const appTitle = import.meta.env.VITE_APP_TITLE;

const appStore = useAppStore();

const isMobile = computed(() => appStore.isMobile);
const isCollapse = computed(() => appStore.isCollapse);
const collapseWidth = computed(() =>
	unref(isMobile)
		? unref(isCollapse)
			? '!w-0'
			: '!w-[var(--left-menu-max-width)]'
		: unref(isCollapse)
			? '!w-[var(--left-menu-min-width)]'
			: '!w-[var(--left-menu-max-width)]'
);

const goHome = () => router.push('/index');

const Logo = () => (
	<div class={'flex-center shrink-0 h-14 w-full nowrap-hidden cursor-pointer'} onClick={goHome}>
		<Icon name="vx:logo" size={30} color="var(--el-color-primary)" />
		<h3 class="ml-2 text-4 text-primary truncate font-bold">{appTitle}</h3>
	</div>
);

const asideClass =
	'py-2 flex-col-stretch bg-background border-r-1 border-solid border-[var(--el-color-info-light-8)] transition-width duration-300';

const headerClass =
	'w-full flex-y-center justify-between border-b-1 border-solid border-[var(--el-color-info-light-8)] h-14 !p-x-2 bg-[var(--el-bg-color)]';

export const useRenderLayout = () => {
	const LayoutVertical = () => {
		return (
			<>
				<ElAside class={[asideClass, unref(collapseWidth), { 'p-0 fixed top-0 bottom-0 left-0 z-9999': unref(isMobile) }]}>
					<div class="flex-center shrink-0 h-14 w-full nowrap-hidden cursor-pointer" onClick={goHome}>
						<Icon name="vx:logo" size={30} color="var(--el-color-primary)" />
						{unref(isCollapse) ? undefined : <h3 class="ml-2 text-4 text-primary truncate font-bold">{appTitle}</h3>}
					</div>
					<ElScrollbar wrap-class="scrollbar-wrapper">
						<Menu />
					</ElScrollbar>
				</ElAside>
				<ElContainer direction="vertical" class="relative">
					<ElHeader class={headerClass}>
						<ToolLeft />
						<ToolRight />
					</ElHeader>
					<Tabs />
					<MainApp />
				</ElContainer>
			</>
		);
	};
	const LayoutBasic = () => {
		return (
			<div class="w-full">
				<ElHeader class="flex justify-between !p-0 border-b-1 border-[var(--el-color-info-light-8)]">
					{!unref(isMobile) ? <Logo class="!w-[var(--left-menu-max-width)]" /> : undefined}
					<ElHeader
						class={['!h-full !border-none', unref(isMobile) ? '!w-full' : '!w-[calc(100%-var(--left-menu-max-width))]', headerClass]}>
						<ToolLeft />
						<ToolRight />
					</ElHeader>
				</ElHeader>
				<ElContainer class="relative !h-[calc(100%-60px)]">
					<ElAside class={[asideClass, unref(collapseWidth), { 'p-0 fixed top-0 bottom-0 left-0 z-9999': unref(isMobile) }]}>
						{unref(isMobile) ? <Logo /> : undefined}
						<ElScrollbar wrap-class="scrollbar-wrapper">
							<Menu />
						</ElScrollbar>
					</ElAside>
					<ElContainer direction="vertical">
						<Tabs />
						<MainApp />
					</ElContainer>
				</ElContainer>
			</div>
		);
	};
	const LayoutHorizontal = () => {
		return (
			<div class="w-full">
				{unref(isMobile) ? (
					<ElAside class={[asideClass, unref(collapseWidth), 'p-0 fixed top-0 bottom-0 left-0 z-9999']}>
						<Logo />
						<ElScrollbar wrap-class="scrollbar-wrapper">
							<Menu />
						</ElScrollbar>
					</ElAside>
				) : undefined}
				<ElHeader class="flex-between !p-0 border-b-1 border-[var(--el-color-info-light-8)]">
					{unref(isMobile) ? (
						<CollapseIcon />
					) : (
						<>
							<Logo class="!w-[var(--left-menu-max-width)]" />
							<Menu class="flex-1 overflow-hidden" />
						</>
					)}
					<ToolRight />
				</ElHeader>
				<ElContainer direction="vertical" class="relative !h-[calc(100%-60px)]">
					<Tabs />
					<MainApp />
				</ElContainer>
			</div>
		);
	};
	const LayoutLattice = () => {
		return (
			<div class="w-full">
				{unref(isMobile) ? (
					<ElAside class={[asideClass, unref(collapseWidth), 'p-0 fixed top-0 bottom-0 left-0 z-9999']}>
						<Logo />
						<ElScrollbar wrap-class="scrollbar-wrapper">
							<Menu />
						</ElScrollbar>
					</ElAside>
				) : undefined}
				<ElHeader class="flex-between !p-0 border-b-1 border-[var(--el-color-info-light-8)]">
					{unref(isMobile) ? (
						<CollapseIcon />
					) : (
						<div class="flex-center">
							<Logo class="!w-[var(--left-menu-max-width)]" />
							<BreadCrumb />
						</div>
					)}
					<ToolRight />
				</ElHeader>
				<ElContainer class="relative !h-[calc(100%-60px)]">
					{unref(isMobile) ? undefined : <VerticalMenu />}
					<ElContainer direction="vertical" class="relative">
						<Tabs />
						<MainApp />
					</ElContainer>
				</ElContainer>
			</div>
		);
	};
	const LayoutMixins = () => {
		return (
			<div class="w-full">
				<ElHeader class="flex-between !p-0 border-b-1 border-[var(--el-color-info-light-8)]">
					{unref(isMobile) ? (
						<CollapseIcon />
					) : (
						<div class="flex-center h-full w-full">
							<Logo class="!w-[var(--left-menu-max-width)]" />
							<HorizontalMenu />
						</div>
					)}
					<ToolRight />
				</ElHeader>
				<ElContainer class="relative !h-[calc(100%-60px)]">
					<ElAside class={[asideClass, unref(collapseWidth), { 'p-0 fixed top-0 bottom-0 left-0 z-9999': unref(isMobile) }]}>
						{unref(isMobile) ? <Logo /> : undefined}
						<ElScrollbar wrap-class="scrollbar-wrapper">
							<Menu />
						</ElScrollbar>
					</ElAside>
					<ElContainer direction="vertical" class="relative">
						<Tabs />
						<MainApp />
					</ElContainer>
				</ElContainer>
			</div>
		);
	};

	return {
		LayoutVertical,
		LayoutBasic,
		LayoutHorizontal,
		LayoutLattice,
		LayoutMixins
	};
};