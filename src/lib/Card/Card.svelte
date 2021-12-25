<script lang="ts">
	/**
	 * Controls the border-radius of the component
	 */
	export let variant: 'small' | 'medium' | 'large'| 'extralarge';
</script>

<div class="card card__{variant}">
	<slot />
</div>

<style lang="postcss">
	.card {
		@apply text-center bg-off-white shadow-md p-8 flex flex-col;
	}

	.card__small {
		@apply rounded-sm;
	}

	.card__medium {
		@apply rounded-md;
	}

	.card__large {
		@apply rounded-xl;
	}
	.card__extralarge{
		@apply rounded-2xl
	}
</style>
