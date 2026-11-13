<script lang="ts">
	import { Button, Card } from '@renui/svelte';
</script>

<Card title="Team plan" subtitle="Up to ten people" spaced>
	<p class="ren-margin--none">Shared workspaces and priority support.</p>

	{#snippet footer()}
		<div class="ren-flex ren-justify--end ren-flex--gap-sm">
			<Button variant="ghost">Compare plans</Button>
			<Button variant="filled">Choose plan</Button>
		</div>
	{/snippet}
</Card>
