<script lang="ts">
	import { Input } from '@renui/svelte';
</script>

<div class="ren-stack ren-stack--md">
	<Input label="Full name" placeholder="Ana Torres" />
	<Input label="Email" type="email" placeholder="you@example.com" autocomplete="email" required />
	<Input label="Birth date" type="date" />
</div>
