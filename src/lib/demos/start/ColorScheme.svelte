<script lang="ts">
	import { onMount } from 'svelte';
	import { Button } from '@renui/svelte';
	import { ColorSchemeScript, createColorScheme } from '@renui/svelte/color-scheme';

	const theme = createColorScheme();
	onMount(theme.start);
</script>

<ColorSchemeScript />
<Button onclick={theme.cyclePreference}>Change theme</Button>
