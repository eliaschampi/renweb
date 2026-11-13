<script lang="ts">
	import House from '@lucide/svelte/icons/house';
	import type { Snippet } from 'svelte';
	import { Icon, Navbar, Sidebar, SidebarItem } from '@renui/svelte';

	const { children }: { children: Snippet } = $props();

	let collapsed = $state(false);
</script>

<div class="ren-dashboard-layout" class:ren-sidebar--is-collapsed={collapsed}>
	<Sidebar {collapsed} aria-label="Main navigation">
		<SidebarItem href="/" current {collapsed}>
			{#snippet icon()}<Icon icon={House} />{/snippet}
			Home
		</SidebarItem>
	</Sidebar>

	<Navbar ontogglesidebar={() => (collapsed = !collapsed)}>
		{#snippet title()}Home{/snippet}
	</Navbar>

	<main class="ren-dashboard-layout__content">
		{@render children()}
	</main>
</div>
