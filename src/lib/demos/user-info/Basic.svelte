<script lang="ts">
	import { Chip, UserInfo } from '@renui/svelte';
</script>

<div class="ren-stack ren-stack--md">
	<UserInfo name="Ana Torres" description="ana@example.com" />
	<UserInfo name="Bruno Díaz" description="Sales" color="secondary">
		{#snippet trailing()}
			<Chip color="success" size="sm">Active</Chip>
		{/snippet}
	</UserInfo>
</div>
