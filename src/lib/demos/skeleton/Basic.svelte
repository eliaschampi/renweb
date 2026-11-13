<script lang="ts">
	import { Skeleton } from '@renui/svelte';
</script>

<div class="ren-flex ren-flex--gap-sm">
	<Skeleton shape="circle" />
	<div class="ren-flex-item--grow ren-stack ren-stack--xs">
		<Skeleton shape="text" width="40%" />
		<Skeleton lines={3} />
	</div>
</div>
