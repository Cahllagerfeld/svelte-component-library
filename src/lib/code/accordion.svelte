<script lang="ts">
	import { slide } from 'svelte/transition';
	export let heading: string = '';
	export let active: boolean = false;

	const toggleActive = () => {
		active = !active;
	};
</script>

<div class="bg-[#ece7e5]">
	<h2 on:click={toggleActive} class="text-bold text-lg p-4 cursor-pointer">{@html heading}</h2>
	{#if active}
		<div transition:slide={{ duration: 200 }} class="flex flex-col">
			<slot />
		</div>
	{/if}
</div>
