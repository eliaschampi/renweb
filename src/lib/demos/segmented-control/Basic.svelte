<script lang="ts">
	import { SegmentedControl } from '@renui/svelte';

	const PERIODS = [
		{ value: 'day', label: 'Day' },
		{ value: 'week', label: 'Week' },
		{ value: 'month', label: 'Month' }
	];

	let period = $state<string | number>('week');
</script>

<SegmentedControl bind:value={period} options={PERIODS} aria-label="Period" />
