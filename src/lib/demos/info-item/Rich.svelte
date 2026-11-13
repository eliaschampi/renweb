<script lang="ts">
	import CircleCheck from '@lucide/svelte/icons/circle-check';
	import { Chip, InfoItem } from '@renui/svelte';
</script>

<InfoItem icon={CircleCheck} iconColor="success" label="Status">
	<Chip color="success" size="sm">Active</Chip>
</InfoItem>
