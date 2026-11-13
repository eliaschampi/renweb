<script lang="ts">
	import { Card, Chip } from '@renui/svelte';
	import { currentLang } from '$lib/i18n';
	import type { DocPropView } from './types';

	const { props }: { props: DocPropView[] } = $props();

	const DEFAULT = { en: 'default', es: 'por defecto' };
</script>

<Card spaced>
	<div class="ren-stack ren-stack--md" role="list">
		{#each props as prop (prop.name)}
			<div class="ren-stack ren-stack--2xs" role="listitem">
				<div class="ren-flex ren-flex--wrap ren-align-items--center ren-flex--gap-xs">
					<code class="ren-font--semibold ren-text--primary">{prop.name}</code>
					<code class="ren-text--sm ren-text--muted ren-text-break">{prop.type}</code>
					{#if prop.default}
						<Chip color="secondary" size="sm">{DEFAULT[currentLang()]}: {prop.default}</Chip>
					{/if}
				</div>
				<span class="ren-text--sm">{prop.text}</span>
			</div>
		{/each}
	</div>
</Card>
