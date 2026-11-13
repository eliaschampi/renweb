<script lang="ts">
	import { Button, Tooltip } from '@renui/svelte';
</script>

<div class="ren-flex ren-flex--wrap ren-flex--gap-sm">
	<Tooltip text="Above" placement="top"><Button variant="border">Top</Button></Tooltip>
	<Tooltip text="Below" placement="bottom"><Button variant="border">Bottom</Button></Tooltip>
	<Tooltip text="To the left" placement="left"><Button variant="border">Left</Button></Tooltip>
	<Tooltip text="To the right" placement="right"><Button variant="border">Right</Button></Tooltip>
</div>
