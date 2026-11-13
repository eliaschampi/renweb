<script lang="ts">
	import { Checkbox } from '@renui/svelte';

	let accepted = $state(false);
</script>

<Checkbox bind:checked={accepted} name="terms" label="I accept the terms" required />
