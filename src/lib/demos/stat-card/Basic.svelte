<script lang="ts">
	import Coins from '@lucide/svelte/icons/coins';
	import Users from '@lucide/svelte/icons/users';
	import { StatCard } from '@renui/svelte';
</script>

<div class="ren-grid ren-grid--cards ren-grid--gap-md">
	<StatCard title="Customers" value={128} icon={Users} color="primary" />
	<StatCard title="Sales" value="$4,210" subtitle="This month" icon={Coins} color="success" />
</div>
