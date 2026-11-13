<script lang="ts">
	import Pin from '@lucide/svelte/icons/pin';
	import { Button } from '@renui/svelte';

	let pinned = $state(false);
</script>

<Button variant="border" icon={Pin} pressed={pinned} onclick={() => (pinned = !pinned)}>
	Pin to top
</Button>
