<script lang="ts">
	import Calendar from '@lucide/svelte/icons/calendar';
	import { InfoItem } from '@renui/svelte';
</script>

<div class="ren-grid ren-grid--columns-2-lg ren-grid--gap-md">
	<InfoItem icon={Calendar} label="Horizontal" value="March 12" />
	<InfoItem icon={Calendar} layout="vertical" label="Vertical" value="March 12" />
</div>
