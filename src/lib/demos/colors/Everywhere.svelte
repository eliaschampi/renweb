<script lang="ts">
	import CircleCheck from '@lucide/svelte/icons/circle-check';
	import { Alert, Button, Chip, IconBadge } from '@renui/svelte';
</script>

<div class="ren-stack ren-stack--md">
	<div class="ren-flex ren-flex--wrap ren-align-items--center ren-flex--gap-sm">
		<IconBadge icon={CircleCheck} color="success" />
		<Chip color="success">Paid</Chip>
		<Button variant="flat" color="success">Confirm</Button>
	</div>
	<Alert color="success" title="Payment received">The receipt was sent by email.</Alert>
</div>
