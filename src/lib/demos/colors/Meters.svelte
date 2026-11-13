<script lang="ts">
	import { Progress, Slider, type RenColor } from '@renui/svelte';

	const ROLES: RenColor[] = ['primary', 'secondary', 'success', 'warning', 'danger', 'info'];

	let values = $state([75, 60, 90, 45, 30, 65]);
</script>

<div class="ren-grid ren-grid--columns-2-lg ren-grid--gap-lg">
	{#each ROLES as color, index (color)}
		<div class="ren-stack ren-stack--xs">
			<Slider bind:value={values[index]} label={color} {color} showValue />
			<Progress value={values[index]} {color} striped animated aria-label={color} />
		</div>
	{/each}
</div>
