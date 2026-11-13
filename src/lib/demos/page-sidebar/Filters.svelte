<script lang="ts">
	import { Button, Input, PageSidebar } from '@renui/svelte';

	let filtersOpen = $state(false);
</script>

<div class="ren-layout--two-columns ren-page-sidebar-layout">
	<PageSidebar bind:mobileOpen={filtersOpen} mobileTitle="Filters">
		{#snippet sidebar()}
			<div class="ren-page-sidebar__section ren-stack ren-stack--sm">
				<Input label="Search" placeholder="Search customers" />
				<Button variant="border">Apply filters</Button>
			</div>
		{/snippet}
	</PageSidebar>

	<section class="ren-layout--content-right">
		<Button variant="border" onclick={() => (filtersOpen = true)}>Filters</Button>
	</section>
</div>
