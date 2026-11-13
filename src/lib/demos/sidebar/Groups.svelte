<script lang="ts">
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import ChevronUp from '@lucide/svelte/icons/chevron-up';
	import Package from '@lucide/svelte/icons/package';
	import Tag from '@lucide/svelte/icons/tag';
	import { Icon, Sidebar, SidebarItem } from '@renui/svelte';

	let open = $state(true);
</script>

<Sidebar aria-label="Main navigation">
	<SidebarItem expanded={open} onclick={() => (open = !open)}>
		{#snippet icon()}<Icon icon={Package} />{/snippet}
		<span class="ren-sidebar-nav-label">
			<span>Catalog</span>
			<Icon icon={open ? ChevronUp : ChevronDown} size="xs" />
		</span>
	</SidebarItem>

	{#if open}
		<div class="ren-sidebar-subitems">
			<SidebarItem href="/products" level="sub">
				{#snippet icon()}<Icon icon={Tag} size="sm" />{/snippet}
				Products
			</SidebarItem>
		</div>
	{/if}
</Sidebar>
