<script lang="ts">
	import { Chip } from '@renui/svelte';

	const CATEGORIES = ['All', 'Shoes', 'Bags', 'Hats'];

	let category = $state('All');
</script>

<div class="ren-flex ren-flex--wrap ren-flex--gap-xs">
	{#each CATEGORIES as name (name)}
		<Chip color={name === category ? 'primary' : 'secondary'} onclick={() => (category = name)}>
			{name}
		</Chip>
	{/each}
</div>
