<script lang="ts">
	import { Button, type ButtonVariant, type RenColor } from '@renui/svelte';

	const VARIANTS: ButtonVariant[] = ['filled', 'gradient', 'border', 'flat', 'ghost'];
	const COLORS: RenColor[] = ['primary', 'secondary', 'success', 'warning', 'danger', 'info'];
</script>

<div class="ren-stack ren-stack--sm">
	{#each VARIANTS as variant (variant)}
		<div class="ren-flex ren-flex--wrap ren-flex--gap-sm">
			{#each COLORS as color (color)}
				<Button {variant} {color}>{color}</Button>
			{/each}
		</div>
	{/each}
</div>
