<script lang="ts">
	import type { Snippet } from 'svelte';
	import { renEs, setRenLocale } from '@renui/svelte';
	import '@renui/svelte/styles';

	const { children }: { children: Snippet } = $props();

	// Spanish built-in copy and Peruvian formats for the whole app.
	setRenLocale({
		locale: 'es-PE',
		currency: 'PEN',
		timeZone: 'America/Lima',
		messages: renEs
	});
</script>

{@render children()}
