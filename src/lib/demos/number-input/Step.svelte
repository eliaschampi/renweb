<script lang="ts">
	import { NumberInput } from '@renui/svelte';

	let price = $state(2.5);
</script>

<NumberInput bind:value={price} label="Price" min={0} step={0.5} />
