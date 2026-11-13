<script lang="ts">
	import { Progress } from '@renui/svelte';
</script>

<div class="ren-stack ren-stack--md">
	<Progress value={40} label="Uploading" showLabel />
	<Progress value={75} color="success" striped animated aria-label="Import" />
	<Progress indeterminate color="secondary" aria-label="Preparing" />
</div>
