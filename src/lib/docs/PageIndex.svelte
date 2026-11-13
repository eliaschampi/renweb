<script lang="ts">
	import { SidebarItem } from '@renui/svelte';
	import { currentLang } from '$lib/i18n';

	const { entries }: { entries: { id: string; title: string }[] } = $props();

	const LABEL = { en: 'On this page', es: 'En esta página' };

	let active = $state('');

	// La franja superior de la pantalla decide qué sección se está leyendo.
	$effect(() => {
		const observer = new IntersectionObserver(
			(records) => {
				for (const record of records) if (record.isIntersecting) active = record.target.id;
			},
			{ rootMargin: '-15% 0px -75% 0px' }
		);
		for (const { id } of entries) {
			const section = document.getElementById(id);
			if (section) observer.observe(section);
		}
		return () => observer.disconnect();
	});
</script>

<nav class="ren-page-sidebar__desktop ren-stack ren-stack--2xs" aria-label={LABEL[currentLang()]}>
	<p class="ren-text--sm ren-font--semibold ren-margin--none">{LABEL[currentLang()]}</p>
	{#each entries as { id, title } (id)}
		<SidebarItem href={`#${id}`} level="sub" current={id === active}>{title}</SidebarItem>
	{/each}
</nav>

<style>
	/* Mismo umbral que la columna que le reserva `DocPage`. */
	@media (max-width: 75rem) {
		nav {
			display: none;
		}
	}
</style>
