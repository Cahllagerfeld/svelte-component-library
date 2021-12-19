<script lang="ts">
	let clazz: string;
	export { clazz as class };
</script>

<button
	class={`inline-block text-center font-semibold rounded-xl leading-4 bg-sand-dark px-6 py-2 shadow-light border-none cursor-pointer ${clazz}`}
	on:click
	{...$$restProps}
>
	<slot />
</button>

<style lang="postcss">
	:global(button.cta) {
		@apply hover:bg-brand-almost-ripe;
	}
</style>
