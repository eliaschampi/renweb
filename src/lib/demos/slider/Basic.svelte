<script lang="ts">
	import { Slider } from '@renui/svelte';

	let volume = $state(40);
</script>

<Slider bind:value={volume} label="Volume" showValue />
