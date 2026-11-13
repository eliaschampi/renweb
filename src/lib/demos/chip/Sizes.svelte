<script lang="ts">
	import Check from '@lucide/svelte/icons/check';
	import { Chip } from '@renui/svelte';
</script>

<div class="ren-flex ren-flex--wrap ren-align-items--center ren-flex--gap-xs">
	<Chip color="success" size="sm">Small</Chip>
	<Chip color="success">Medium</Chip>
	<Chip color="success" size="sm" icon={Check}>Paid</Chip>
	<Chip color="success" icon={Check}>Paid</Chip>
</div>
