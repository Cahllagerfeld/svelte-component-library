<script lang="ts">
	export let cta: boolean = false;
	export let label: string;
</script>

<button class="button" class:cta {...$$restProps}>{label}</button>

<style lang="postcss">
	.button {
		@apply inline-block text-center font-semibold rounded-xl leading-4 bg-sand-dark px-6 py-2 shadow-light;
	}

	.cta {
		@apply hover:bg-brand-almost-ripe;
	}
</style>
