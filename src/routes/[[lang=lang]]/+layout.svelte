<script lang="ts">
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import ChevronUp from '@lucide/svelte/icons/chevron-up';
	import Languages from '@lucide/svelte/icons/languages';
	import Sparkles from '@lucide/svelte/icons/sparkles';
	import X from '@lucide/svelte/icons/x';
	import { onMount, tick, type Snippet } from 'svelte';
	import {
		Button,
		Dropdown,
		DropdownItem,
		Icon,
		IconBadge,
		Navbar,
		SegmentedControl,
		Sidebar,
		SidebarItem,
		Toaster,
		renEs,
		setRenLocale
	} from '@renui/svelte';
	import { ColorSchemeScript } from '@renui/svelte/color-scheme';
	import '@renui/svelte/styles';
	import {
		colorScheme,
		colorSchemeOptions,
		setThemePreference,
		themeChoices
	} from '$lib/color-scheme.svelte';
	import { navigationMode, setNavigationMode } from '$lib/navigation-mode.svelte';
	import { LANGS, currentLang, link, sitePath, type Lang } from '$lib/i18n';
	import { NAVIGATION, isGroup, navItemFor, pageTitle, type NavGroup } from '$lib/navigation';
	import {
		libraryUrl,
		renVersion,
		packageUrl,
		repositoryUrl,
		siteLocales,
		siteUrl
	} from '$lib/site';
	import { toaster } from '$lib/toaster';

	const { children }: { children: Snippet } = $props();

	// Mismo umbral que el shell de RenUI (GUIDE §4): por debajo, el menú es un panel móvil.
	const MOBILE_MEDIA_QUERY = '(max-width: 64rem)';

	const COPY = {
		en: {
			navigation: 'Main navigation',
			home: 'RenUI, home',
			closeNavigation: 'Close navigation',
			theme: 'Interface theme',
			otherLanguage: 'Leer en español',
			issue: 'Report an issue',
			contribute: 'Contribute to this site'
		},
		es: {
			navigation: 'Navegación principal',
			home: 'RenUI, inicio',
			closeNavigation: 'Cerrar navegación',
			theme: 'Tema de la interfaz',
			otherLanguage: 'Read in English',
			issue: 'Reportar un problema',
			contribute: 'Contribuir a este sitio'
		}
	} as const;
	const OG_LOCALE: Record<Lang, string> = { en: 'en_US', es: 'es_PE' };

	const lang = $derived(currentLang());
	const t = $derived(COPY[lang]);
	const otherLang = $derived<Lang>(lang === 'en' ? 'es' : 'en');

	setRenLocale(() =>
		currentLang() === 'es' ? { ...siteLocales.es, messages: renEs } : siteLocales.en
	);

	let isMobile = $state(false);
	let mobileOpen = $state(false);
	let shell: HTMLDivElement;
	let navigationTrigger: HTMLElement | null = null;

	const path = $derived(sitePath());
	const item = $derived(navItemFor(path));
	const themeOptions = $derived(
		themeChoices.map(({ value, icon, label }) => ({ value, icon, ariaLabel: label[lang] }))
	);
	const collapsed = $derived(navigationMode.preference === 'collapsed' && !isMobile);
	const drawerOpen = $derived(mobileOpen && isMobile);
	const title = $derived(pageTitle(item, lang));

	/** Grupos abiertos a mano; sin elección, se abre el que contiene la página actual. */
	let openedGroups = $state<Record<string, boolean>>({});
	const groupHasPage = (group: NavGroup): boolean => group.items.some((entry) => entry === item);
	const groupOpen = (group: NavGroup): boolean => openedGroups[group.id] ?? groupHasPage(group);

	function toggleGroup(group: NavGroup): void {
		openedGroups[group.id] = !groupOpen(group);
	}

	const absoluteUrl = (target: Lang): string => {
		const prefix = target === 'es' ? '/es' : '';
		return `${siteUrl}${prefix}${path === '/' ? (prefix ? '' : '/') : path}`;
	};

	// La navegación cliente no recarga `app.html`: el idioma del documento se mantiene aquí.
	$effect(() => {
		document.documentElement.lang = lang;
	});

	onMount(colorScheme.start);

	onMount(() => {
		const query = window.matchMedia(MOBILE_MEDIA_QUERY);
		const sync = (): void => {
			isMobile = query.matches;
			if (!isMobile) mobileOpen = false;
		};
		sync();
		query.addEventListener('change', sync);
		return () => query.removeEventListener('change', sync);
	});

	function drawerControls(): HTMLElement[] {
		return [...shell.querySelectorAll<HTMLElement>('nav a[href], nav button:not([disabled])')];
	}

	async function toggleSidebar(): Promise<void> {
		if (!isMobile) {
			setNavigationMode(collapsed ? 'expanded' : 'collapsed');
			return;
		}
		if (mobileOpen) {
			closeDrawer();
			return;
		}
		navigationTrigger =
			document.activeElement instanceof HTMLElement ? document.activeElement : null;
		mobileOpen = true;
		await tick();
		drawerControls()[0]?.focus();
	}

	function closeDrawer(): void {
		if (!mobileOpen) return;
		mobileOpen = false;
		navigationTrigger?.focus();
		navigationTrigger = null;
	}

	/** El panel móvil es modal: Escape lo cierra y Tab no sale de él. */
	function handleDrawerKeydown(event: KeyboardEvent): void {
		if (!drawerOpen) return;
		if (event.key === 'Escape') {
			event.preventDefault();
			closeDrawer();
			return;
		}
		if (event.key !== 'Tab') return;
		const controls = drawerControls();
		const first = controls[0];
		const last = controls.at(-1);
		if (event.shiftKey && document.activeElement === first) {
			event.preventDefault();
			last?.focus();
		} else if (!event.shiftKey && document.activeElement === last) {
			event.preventDefault();
			first?.focus();
		}
	}
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={item.description[lang]} />
	<link rel="canonical" href={absoluteUrl(lang)} />
	{#each LANGS as target (target)}
		<link rel="alternate" hreflang={target} href={absoluteUrl(target)} />
	{/each}
	<link rel="alternate" hreflang="x-default" href={absoluteUrl('en')} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={item.description[lang]} />
	<meta property="og:url" content={absoluteUrl(lang)} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="RenUI" />
	<meta property="og:locale" content={OG_LOCALE[lang]} />
</svelte:head>

<ColorSchemeScript {...colorSchemeOptions} />
<svelte:window onkeydown={handleDrawerKeydown} />

<div
	bind:this={shell}
	class="ren-dashboard-layout"
	class:ren-sidebar--is-collapsed={collapsed}
	class:ren-sidebar--mobile-open={drawerOpen}
>
	<Sidebar {collapsed} mobileOpen={drawerOpen} aria-label={t.navigation}>
		{#snippet header()}
			<div
				class="ren-flex ren-align-items--center ren-flex--gap-sm ren-min-width--0"
				class:ren-justify--between={isMobile}
				class:ren-justify--center={collapsed}
			>
				<a
					href={link('/')}
					class="ren-flex ren-align-items--center ren-flex--gap-sm ren-min-width--0 ren-text-decoration--none"
					aria-label={collapsed ? t.home : undefined}
					onclick={closeDrawer}
				>
					<IconBadge icon={Sparkles} color="primary" size="md" />
					{#if !collapsed}
						<span class="ren-stack ren-stack--2xs ren-min-width--0">
							<strong class="ren-text--lg">RenUI</strong>
							<span class="ren-text--xs ren-text--muted">v{renVersion} · Svelte 5</span>
						</span>
					{/if}
				</a>
				{#if isMobile}
					<Button
						variant="ghost"
						size="sm"
						icon={X}
						aria-label={t.closeNavigation}
						onclick={closeDrawer}
					/>
				{/if}
			</div>
		{/snippet}

		{#each NAVIGATION as entry (isGroup(entry) ? entry.id : entry.path)}
			{#if isGroup(entry)}
				{#if collapsed}
					<Dropdown placement="right-start" class="ren-width--full">
						{#snippet trigger(props)}
							<SidebarItem {...props} collapsed current={groupHasPage(entry)}>
								{#snippet icon()}<Icon icon={entry.icon} />{/snippet}
								{entry.label[lang]}
							</SidebarItem>
						{/snippet}
						{#each entry.items as child (child.path)}
							<DropdownItem href={link(child.path)} icon={child.icon}>
								{child.label[lang]}
							</DropdownItem>
						{/each}
					</Dropdown>
				{:else}
					{@const open = groupOpen(entry)}
					<SidebarItem expanded={open} onclick={() => toggleGroup(entry)}>
						{#snippet icon()}<Icon icon={entry.icon} />{/snippet}
						<span class="ren-sidebar-nav-label">
							<span>{entry.label[lang]}</span>
							<Icon icon={open ? ChevronUp : ChevronDown} size="xs" />
						</span>
					</SidebarItem>
					{#if open}
						<div class="ren-sidebar-subitems">
							{#each entry.items as child (child.path)}
								<SidebarItem
									href={link(child.path)}
									level="sub"
									current={child === item}
									onclick={closeDrawer}
								>
									{#snippet icon()}<Icon icon={child.icon} size="sm" />{/snippet}
									{child.label[lang]}
								</SidebarItem>
							{/each}
						</div>
					{/if}
				{/if}
			{:else}
				<SidebarItem
					href={link(entry.path)}
					current={entry === item}
					{collapsed}
					onclick={closeDrawer}
				>
					{#snippet icon()}<Icon icon={entry.icon} />{/snippet}
					{entry.label[lang]}
				</SidebarItem>
			{/if}
		{/each}
	</Sidebar>

	<Navbar ontogglesidebar={toggleSidebar}>
		{#snippet title()}{item.label[lang]}{/snippet}

		{#snippet actions()}
			<Button
				variant="ghost"
				size="sm"
				icon={Languages}
				href={link(path, otherLang)}
				aria-label={t.otherLanguage}
				title={t.otherLanguage}
			>
				{otherLang.toUpperCase()}
			</Button>
			<Button variant="ghost" size="sm" href={libraryUrl}>GitHub</Button>
			<SegmentedControl
				value={colorScheme.preference}
				options={themeOptions}
				iconOnly
				aria-label={t.theme}
				onchange={setThemePreference}
			/>
		{/snippet}
	</Navbar>

	<main class="ren-dashboard-layout__content" inert={drawerOpen}>
		<div class="ren-container ren-container--ultrawide ren-min-width--0">
			{#key lang}
				{@render children()}
			{/key}
			<footer
				class="ren-flex ren-flex--wrap ren-flex--gap-md ren-margin-top--lg ren-padding-y--md ren-text--sm ren-text--muted"
			>
				<span>RenUI v{renVersion} · MIT</span>
				<a class="ren-text--muted" href={packageUrl}>npm</a>
				<a class="ren-text--muted" href={`${libraryUrl}/issues`}>{t.issue}</a>
				<a class="ren-text--muted" href={`${repositoryUrl}/blob/main/CONTRIBUTING.md`}>
					{t.contribute}
				</a>
			</footer>
		</div>
	</main>

	<button
		type="button"
		class="ren-mobile-overlay ren-border--none"
		aria-label={t.closeNavigation}
		tabindex="-1"
		onclick={closeDrawer}
	></button>
</div>

<Toaster {toaster} placement="bottom-end" />
