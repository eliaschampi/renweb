<script lang="ts">
	import { Button, Fieldset, Input, Select } from '@renui/svelte';
</script>

<form class="ren-stack ren-stack--lg">
	<Fieldset legend="Personal details">
		<div class="ren-grid ren-grid--columns-2-lg ren-grid--gap-md">
			<Input label="First name" placeholder="Ana" />
			<Input label="Last name" placeholder="Torres" />
		</div>
	</Fieldset>

	<Fieldset legend="Delivery">
		<div class="ren-grid ren-grid--columns-2-lg ren-grid--gap-md">
			<Input label="Address" placeholder="Street and number" />
			<Select label="City" placeholder="Choose a city" options={['Lima', 'Cusco']} />
		</div>
	</Fieldset>

	<div class="ren-flex ren-justify--end ren-flex--gap-sm">
		<Button variant="ghost">Cancel</Button>
		<Button type="submit" variant="filled">Save</Button>
	</div>
</form>
