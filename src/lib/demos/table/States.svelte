<script lang="ts">
	import { SegmentedControl, Table } from '@renui/svelte';

	const MODES = [
		{ value: 'loading', label: 'Loading' },
		{ value: 'empty', label: 'Empty' }
	];

	let mode = $state<string | number>('loading');
</script>

<div class="ren-stack ren-stack--sm">
	<SegmentedControl bind:value={mode} options={MODES} size="sm" aria-label="Table state" />
	<Table data={[]} loading={mode === 'loading'} noDataText="No orders yet" aria-label="Orders">
		{#snippet thead()}
			<th scope="col">Customer</th>
			<th scope="col">Total</th>
		{/snippet}
	</Table>
</div>
