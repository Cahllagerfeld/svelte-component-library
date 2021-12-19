<script lang="ts">
	export let cta: boolean;
	export let label: string;
</script>

<button class="button" class:cta>{label}</button>

<style lang="text/postcss">
	@apply text-2xl;
</style>
