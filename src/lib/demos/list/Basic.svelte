<script lang="ts">
	import FileText from '@lucide/svelte/icons/file-text';
	import { List, ListItem } from '@renui/svelte';
</script>

<List>
	<ListItem icon={FileText} title="Sales report" description="Updated today" />
	<ListItem icon={FileText} title="Inventory" description="Updated yesterday" />
</List>
