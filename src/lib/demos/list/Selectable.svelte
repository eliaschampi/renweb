<script lang="ts">
	import { List, ListItem } from '@renui/svelte';

	const ROOMS = ['Sales', 'Support', 'Billing'];

	let room = $state('Sales');
</script>

<List>
	{#each ROOMS as name (name)}
		<ListItem title={name} selected={name === room} onclick={() => (room = name)} />
	{/each}
</List>
