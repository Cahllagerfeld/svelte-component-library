<script lang="ts">
	import { radioButtons } from '$lib/contents/radio-buttons';
	export let index: number;
	export let step = 'env';
</script>

<div
	class="inline-flex overflow-hidden items-center justify-center bg-white space-x-2 rounded-2xl transition-all duration-200"
>
	{#each radioButtons as { label, value }}
		<label class="cursor-pointer px-4 py-2" class:active={step == value}>
			<input type="radio" class="hidden" bind:group={step} {value} name={`${index}`} />
			{label}
		</label>
	{/each}
</div>

<style lang="postcss">
	.active {
		@apply bg-orange-400;
	}
</style>
