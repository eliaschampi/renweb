<script lang="ts">
	import BookOpen from '@lucide/svelte/icons/book-open';
	import { QuickAccessCard } from '@renui/svelte';
</script>

<div class="ren-grid ren-grid--cards ren-grid--gap-md">
	<QuickAccessCard
		href="https://svelte.dev/docs"
		title="Documentation"
		description="Read the guide"
		icon={BookOpen}
	/>
</div>
