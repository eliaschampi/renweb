<script lang="ts">
	import Plus from '@lucide/svelte/icons/plus';
	import { Button, Title } from '@renui/svelte';
</script>

<div class="ren-flex ren-flex--wrap ren-justify--between ren-align-items--center ren-flex--gap-sm">
	<Title title="Customers" level={3} size="sm" />
	<div class="ren-flex ren-flex--gap-xs">
		<Button variant="border" size="sm">Export</Button>
		<Button variant="filled" size="sm" icon={Plus}>New customer</Button>
	</div>
</div>
