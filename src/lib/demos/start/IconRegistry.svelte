<script lang="ts">
	import type { Snippet } from 'svelte';
	import { registerIcons } from '@renui/svelte';
	import { renIcons } from '@renui/svelte/icons';

	const { children }: { children: Snippet } = $props();

	// Only if you store icon names as data, for example from an API.
	registerIcons(renIcons);
</script>

{@render children()}
