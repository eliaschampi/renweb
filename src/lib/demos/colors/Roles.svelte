<script lang="ts">
	import { Button, Card, Chip, type RenColor } from '@renui/svelte';

	const ROLES: { role: RenColor; meaning: string }[] = [
		{ role: 'primary', meaning: 'Your brand and the main action' },
		{ role: 'secondary', meaning: 'Supporting identity and contrast' },
		{ role: 'success', meaning: 'Completed, confirmed, positive' },
		{ role: 'warning', meaning: 'Needs attention soon' },
		{ role: 'danger', meaning: 'Errors and destructive actions' },
		{ role: 'info', meaning: 'Neutral information' }
	];
</script>

<div class="ren-grid ren-grid--cards ren-grid--gap-md">
	{#each ROLES as { role, meaning } (role)}
		<Card title={role} subtitle={meaning} spaced>
			<div class="ren-flex ren-flex--wrap ren-align-items--center ren-flex--gap-xs">
				<Button color={role} size="sm">solid</Button>
				<Chip color={role} size="sm">soft</Chip>
				<span class="ren-text--sm ren-font--medium ren-text--{role}">accent</span>
			</div>
		</Card>
	{/each}
</div>
