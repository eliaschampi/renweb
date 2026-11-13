<script lang="ts">
	import { StatusIndicator } from '@renui/svelte';
</script>

<div class="ren-flex ren-align-items--center ren-flex--gap-md">
	<StatusIndicator status="success" tooltip="Online" />
	<StatusIndicator status="warning" pulse tooltip="Reconnecting" />
	<StatusIndicator status="danger" tooltip="Offline" />
</div>
