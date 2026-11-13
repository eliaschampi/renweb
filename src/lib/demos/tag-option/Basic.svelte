<script lang="ts">
	import { TagOption } from '@renui/svelte';

	const SIZES = ['Small', 'Medium', 'Large'];

	let size = $state('Medium');
</script>

<div class="ren-flex ren-flex--wrap ren-flex--gap-xs">
	{#each SIZES as name (name)}
		<TagOption label={name} selected={name === size} onclick={() => (size = name)} />
	{/each}
</div>
