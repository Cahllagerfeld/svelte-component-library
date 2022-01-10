<script lang="ts">
	import type { ButtonVariant } from './types';

	export let variant: ButtonVariant;
	export let disabled: true | false = false;
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
	class="inline-block text-center font-semibold rounded-xl leading-4 bg-sand-dark px-6 py-2 shadow-light border-none cursor-pointer {variant}"
	class:disabled
	{disabled}><slot /></button
>

<style lang="postcss">
	.primary {
		@apply bg-kumquat-ripe hover:bg-kumquat-almost-ripe;
	}
</style>
