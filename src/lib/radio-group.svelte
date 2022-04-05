<script lang="ts">
	export let index: number;
	export let step = 'env';
</script>

<div
	class="inline-flex overflow-hidden items-center justify-center bg-white space-x-2 rounded-2xl transition-all duration-200"
>
	<label class="cursor-pointer px-4 py-2" class:active={step == 'env'}>
		<input type="radio" class="hidden" bind:group={step} value="env" name={`${index}`} />
		Env
	</label>
	<label class="cursor-pointer px-4 py-2" class:active={step == 'before'}>
		<input type="radio" class="hidden" bind:group={step} value="before" name={`${index}`} />
		Before
	</label>
	<label class="cursor-pointer px-4 py-2" class:active={step == 'init'}>
		<input type="radio" class="hidden" bind:group={step} value="init" name={`${index}`} />
		Init
	</label>
	<label class="cursor-pointer px-4 py-2" class:active={step == 'command'}>
		<input type="radio" class="hidden" bind:group={step} value="command" name={`${index}`} />
		Command
	</label>
	<label class="cursor-pointer px-4 py-2" class:active={step == 'openMode'}>
		<input type="radio" class="hidden" bind:group={step} value="openMode" name={`${index}`} />
		Open Mode
	</label>
</div>

<style lang="postcss">
	.active {
		@apply bg-orange-400;
	}
</style>
