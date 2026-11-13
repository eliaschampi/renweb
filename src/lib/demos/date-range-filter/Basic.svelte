<script lang="ts">
	import { DateRangeFilter } from '@renui/svelte';

	let from = $state('2026-01-01');
	let to = $state('2026-01-31');
</script>

<DateRangeFilter bind:fromValue={from} bind:toValue={to} fromLabel="From" toLabel="To" />
