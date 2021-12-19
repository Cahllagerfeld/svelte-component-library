<script lang="ts">
	import type { ButtonColor } from './button.types';

	export let color: ButtonColor;
	export let label: string;
</script>

<button class={`button ${color}`} {...$$restProps}>{label}</button>

<style lang="postcss">
	.button {
		@apply inline-block text-center font-semibold rounded-xl leading-4 bg-sand-dark px-6 py-2 shadow-light border-none cursor-pointer;
	}

	.cta {
		@apply hover:bg-brand-almost-ripe;
	}
</style>
