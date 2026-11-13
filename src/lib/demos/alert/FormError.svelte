<script lang="ts">
	import { Alert, Button, Input } from '@renui/svelte';

	let error = $state('');
</script>

<form
	class="ren-stack ren-stack--md"
	onsubmit={(event) => {
		event.preventDefault();
		error = 'We could not sign you in. Check your details and try again.';
	}}
>
	{#if error}
		<Alert color="danger">{error}</Alert>
	{/if}
	<Input label="Email" type="email" placeholder="you@example.com" />
	<div class="ren-flex ren-justify--end">
		<Button type="submit" variant="filled">Sign in</Button>
	</div>
</form>
