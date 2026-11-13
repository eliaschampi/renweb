<script lang="ts">
	import Mail from '@lucide/svelte/icons/mail';
	import Search from '@lucide/svelte/icons/search';
	import { Input } from '@renui/svelte';
</script>

<div class="ren-grid ren-grid--columns-2-lg ren-grid--gap-md">
	<Input label="Email" type="email" placeholder="you@example.com" icon={Mail} />
	<Input label="Search" type="search" placeholder="Search customers" icon={Search} clearable />
</div>
