<script lang="ts">
	import { Divider } from '@renui/svelte';
</script>

<div class="ren-stack ren-stack--xs">
	<p class="ren-margin--none">Before the line</p>
	<Divider />
	<p class="ren-margin--none">After the line</p>
	<Divider label="Or continue with" />
	<Divider variant="dashed" />
</div>
