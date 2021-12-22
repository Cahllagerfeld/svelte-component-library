<script lang="ts">
	export let variant: 'primary' | 'secondary' | 'cta';

	export let disabled: boolean = false;

	let clazz = '';
	export { clazz as class };
</script>

<button
	on:click
	on:blur
	on:focus
	on:dblclick
	on:contextmenu
	on:mousedown
	on:mouseup
	on:mouseover
	on:mouseout
	on:mouseleave
	on:keypress
	on:keydown
	on:keyup
	class="button {variant} {clazz ?? ''}"
	class:disabled
	{disabled}
	{...$$restProps}><slot /></button
>

<style lang="postcss">
	.button {
		@apply inline-block text-center font-semibold rounded-xl leading-4 bg-sand-dark px-6 py-2 shadow-light border-none cursor-pointer;
	}

	.cta {
		@apply hover:bg-brand-almost-ripe;
	}

	.disabled {
		@apply pointer-events-none text-gray-400;
	}
</style>
