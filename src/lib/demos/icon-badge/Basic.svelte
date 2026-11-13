<script lang="ts">
	import Bell from '@lucide/svelte/icons/bell';
	import { IconBadge } from '@renui/svelte';
</script>

<div class="ren-flex ren-flex--wrap ren-align-items--center ren-flex--gap-sm">
	<IconBadge icon={Bell} size="sm" />
	<IconBadge icon={Bell} color="success" />
	<IconBadge icon={Bell} color="warning" size="lg" />
	<IconBadge icon={Bell} color="danger" size="xl" />
</div>
