<script lang="ts">
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Check from '@lucide/svelte/icons/check';
	import X from '@lucide/svelte/icons/x';
	import { Button, Card, Icon, PageHeader, Title } from '@renui/svelte';
	import CodeBlock from '$lib/CodeBlock.svelte';
	import { currentLang, link, sitePath } from '$lib/i18n';
	import { NAV_ITEMS, navItemFor } from '$lib/navigation';
	import type { Component } from 'svelte';
	import PageIndex from './PageIndex.svelte';
	import PropsList from './PropsList.svelte';
	import type { DocView } from './types';

	const { doc, demos }: { doc: DocView; demos: (Component | undefined)[] } = $props();

	const COPY = {
		en: {
			importLabel: 'Import',
			use: 'Use it for',
			avoid: 'Use something else for',
			props: 'Props',
			next: 'Next'
		},
		es: {
			importLabel: 'Importar',
			use: 'Úsalo para',
			avoid: 'Usa otra cosa para',
			props: 'Props',
			next: 'Siguiente'
		}
	} as const;

	const lang = $derived(currentLang());
	const t = $derived(COPY[lang]);
	const item = $derived(navItemFor(sitePath()));
	const position = $derived(NAV_ITEMS.indexOf(item));
	const previous = $derived(NAV_ITEMS[position - 1]);
	const next = $derived(NAV_ITEMS[position + 1]);
	const index = $derived([
		...doc.sections.map(({ id, title }) => ({ id, title })),
		...(doc.props ? [{ id: 'props', title: t.props }] : [])
	]);
</script>

<div class="doc">
	<article class="ren-stack ren-stack--xl ren-min-width--0">
		<PageHeader
			title={item.label[lang]}
			subtitle={item.description[lang]}
			icon={item.icon}
			size="xl"
		/>

		{#if doc.importLine}
			<CodeBlock code={doc.importLine} label={t.importLabel} />
		{/if}

		{#if doc.use && doc.avoid}
			<div class="ren-grid ren-grid--columns-2 ren-grid--gap-md">
				<Card title={t.use} spaced>
					<div class="ren-stack ren-stack--xs" role="list">
						{#each doc.use as entry (entry)}
							<div class="ren-flex ren-flex--gap-xs" role="listitem">
								<span class="ren-text--success"><Icon icon={Check} size="sm" /></span>
								<span>{entry}</span>
							</div>
						{/each}
					</div>
				</Card>
				<Card title={t.avoid} spaced>
					<div class="ren-stack ren-stack--xs" role="list">
						{#each doc.avoid as entry (entry)}
							<div class="ren-flex ren-flex--gap-xs" role="listitem">
								<span class="ren-text--muted"><Icon icon={X} size="sm" /></span>
								<span>{entry}</span>
							</div>
						{/each}
					</div>
				</Card>
			</div>
		{/if}

		{#each doc.sections as section, index (section.id)}
			{@const Demo = demos[index]}
			<section id={section.id} class="ren-stack ren-stack--md ren-min-width--0">
				<div class="ren-stack ren-stack--xs">
					<Title title={section.title} level={2} size="md" />
					<p class="ren-text--muted ren-margin--none">{section.text}</p>
				</div>
				{#if Demo}
					<Card><Demo /></Card>
				{/if}
				{#if section.code}
					<CodeBlock code={section.code} label={`${section.demo}.svelte`} />
				{/if}
				{#if section.snippet}
					<CodeBlock code={section.snippet.code} label={section.snippet.label} />
				{/if}
			</section>
		{/each}

		{#if doc.props}
			<section id="props" class="ren-stack ren-stack--md ren-min-width--0">
				<div class="ren-stack ren-stack--xs">
					<Title title={t.props} level={2} size="md" />
					{#if doc.propsNote}
						<p class="ren-text--muted ren-margin--none">{doc.propsNote}</p>
					{/if}
				</div>
				<PropsList props={doc.props} />
				{#each doc.moreProps ?? [] as group (group.title)}
					<Title title={group.title} level={3} size="sm" />
					<PropsList props={group.props} />
				{/each}
			</section>
		{/if}

		<nav class="ren-flex ren-justify--between ren-flex--gap-sm" aria-label={t.next}>
			{#if previous}
				<Button variant="border" icon={ArrowLeft} href={link(previous.path)}>
					{previous.label[lang]}
				</Button>
			{/if}
			{#if next}
				<Button variant="border" icon={ArrowRight} iconAfter href={link(next.path)}>
					{next.label[lang]}
				</Button>
			{/if}
		</nav>
	</article>
	<PageIndex entries={index} />
</div>

<style>
	/* RenUI no ofrece una columna de índice: dos columnas solo cuando hay ancho para ambas. */
	@media (min-width: 75rem) {
		.doc {
			display: grid;
			grid-template-columns: minmax(0, 1fr) var(--ren-layout-sidebar-min-width);
			gap: var(--ren-space-xl);
		}
	}
</style>
