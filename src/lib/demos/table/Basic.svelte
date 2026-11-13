<script lang="ts">
	import { Chip, Table, type RenColor } from '@renui/svelte';

	interface Order {
		id: number;
		customer: string;
		total: string;
		status: 'paid' | 'pending';
	}

	const STATUS: Record<Order['status'], { label: string; color: RenColor }> = {
		paid: { label: 'Paid', color: 'success' },
		pending: { label: 'Pending', color: 'warning' }
	};

	const orders: Order[] = [
		{ id: 1, customer: 'Ana Torres', total: '$120', status: 'paid' },
		{ id: 2, customer: 'Bruno Díaz', total: '$89', status: 'pending' },
		{ id: 3, customer: 'Carla Ruiz', total: '$240', status: 'paid' },
		{ id: 4, customer: 'Diego Silva', total: '$63', status: 'pending' },
		{ id: 5, customer: 'Elena Paz', total: '$310', status: 'paid' }
	];
</script>

<Table data={orders} hover aria-label="Orders">
	{#snippet thead()}
		<th scope="col">Customer</th>
		<th scope="col">Status</th>
		<th scope="col" class="ren-text--right">Total</th>
	{/snippet}

	{#snippet row({ row })}
		<td class="ren-font--medium">{row.customer}</td>
		<td><Chip color={STATUS[row.status].color} size="sm">{STATUS[row.status].label}</Chip></td>
		<td class="ren-text--right">{row.total}</td>
	{/snippet}
</Table>
