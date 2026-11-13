<script lang="ts">
	import { Textarea } from '@renui/svelte';

	let bio = $state('');
</script>

<Textarea
	bind:value={bio}
	label="Short bio"
	rows={3}
	placeholder="Tell us about yourself"
	maxlength={120}
	showCount
/>
