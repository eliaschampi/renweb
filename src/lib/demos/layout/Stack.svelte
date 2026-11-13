<script lang="ts">
	import { Button, Input } from '@renui/svelte';
</script>

<form class="ren-stack ren-stack--md">
	<Input label="Full name" placeholder="Ana Torres" />
	<Input label="Email" type="email" placeholder="you@example.com" />
	<div class="ren-flex ren-justify--end">
		<Button type="submit" variant="filled">Create account</Button>
	</div>
</form>
