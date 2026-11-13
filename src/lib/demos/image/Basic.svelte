<script lang="ts">
	import { asset } from '$app/paths';
	import { Image } from '@renui/svelte';
</script>

<Image src={asset('/favicon.svg')} alt="RenUI logo" ratio="16 / 9" fit="contain" radius="lg" />
