<script lang="ts">
	import { Card } from '@renui/svelte';

	const PLANS = ['Monthly', 'Yearly'];

	let plan = $state('Monthly');
</script>

<div class="ren-grid ren-grid--cards ren-grid--gap-md">
	{#each PLANS as name (name)}
		<Card clickable selected={name === plan} title={name} spaced onclick={() => (plan = name)} />
	{/each}
</div>
