<script lang="ts">
	import Lock from '@lucide/svelte/icons/lock';
	import { EmptyState } from '@renui/svelte';
</script>

<EmptyState
	icon={Lock}
	iconColor="warning"
	title="No access"
	description="Ask an administrator for permission to view these files."
/>
