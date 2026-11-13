<script lang="ts">
	import { Input } from '@renui/svelte';

	let name = $state('');
	const greeting = $derived(name.trim() ? `Hello, ${name.trim()}!` : 'Type your name');
</script>

<div class="ren-stack ren-stack--sm">
	<Input bind:value={name} label="Name" placeholder="Your name" clearable />
	<p class="ren-text--muted ren-margin--none">{greeting}</p>
</div>
