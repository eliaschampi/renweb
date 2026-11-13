<script lang="ts">
	import { Select, type SelectValue } from '@renui/svelte';

	let city = $state<SelectValue | null>(null);
</script>

<Select
	bind:value={city}
	label="City"
	placeholder="Choose a city"
	options={['Lima', 'Cusco', 'Arequipa', 'Trujillo']}
/>
