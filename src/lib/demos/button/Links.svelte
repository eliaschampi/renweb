<script lang="ts">
	import ExternalLink from '@lucide/svelte/icons/external-link';
	import { Button } from '@renui/svelte';
</script>

<div class="ren-flex ren-flex--wrap ren-flex--gap-sm">
	<Button variant="border" href="https://svelte.dev/docs/svelte">Read the guide</Button>
	<Button
		variant="flat"
		icon={ExternalLink}
		iconAfter
		href="https://www.npmjs.com/package/@renui/svelte"
		target="_blank"
		rel="noreferrer"
	>
		Open npm
	</Button>
</div>
