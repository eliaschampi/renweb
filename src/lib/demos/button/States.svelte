<script lang="ts">
	import { Button } from '@renui/svelte';

	let saving = $state(false);

	function save(): void {
		saving = true;
		setTimeout(() => (saving = false), 1500);
	}
</script>

<div class="ren-flex ren-flex--wrap ren-flex--gap-sm">
	<Button variant="filled" loading={saving} onclick={save}>Save changes</Button>
	<Button variant="filled" disabled>Not available</Button>
	<Button variant="border" loading>Sending</Button>
</div>
