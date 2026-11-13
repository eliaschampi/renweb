<script lang="ts">
	import { Message, MessageList } from '@renui/svelte';
</script>

<div class="ren-stack" style:height="16rem">
	<MessageList aria-label="Conversation">
		<Message name="Ana Torres" time="10:02">Is the report ready?</Message>
		<Message align="end" variant="filled" time="10:03">Yes, I just sent it.</Message>
		<Message name="Ana Torres" time="10:04">Thank you!</Message>
	</MessageList>
</div>
