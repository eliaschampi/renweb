<script lang="ts">
	import { FileUpload, type FileUploadFile } from '@renui/svelte';

	let files = $state<FileUploadFile[]>([]);
</script>

<FileUpload bind:files accept="image/*" maxSize={2_000_000} multiple />
