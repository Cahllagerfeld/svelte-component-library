<script lang="ts">
	import InfiniteScroll from '$lib/infinite-scroll/infinite-scroll.svelte';
	import { onMount } from 'svelte';
	import OpenVsxExtension from './open-vsx-extension.svelte';
	import type { OpenVsxExtension as VSXType } from './code';
	// export let searchString: string = '';
	let skip: number = 0;
	let data: VSXType.Extension[] = [];
	let newData: VSXType.Extension[] = [];
	let component: HTMLElement;

	onMount(async () => {
		performSearch('YAML');
	});

	const performSearch = async (string: string) => {
		const response = await fetch(
			`https://open-vsx.org/api/-/search?query=${string}&size=10&sortBy=relevance&sortOrder=desc&offset=${skip}`
		);
		const data = (await response.json()) as VSXType.RootObject;
		newData = data.extensions;
	};

	$: data = [...data, ...newData];
</script>

<div class="grid p-8 grid-cols-3 gap-4">
	<div bind:this={component} class="grid grid-cols-3 gap-4">
		{#each data as extension}
			<OpenVsxExtension {extension} />
		{/each}

		<InfiniteScroll
			window={true}
			threshold={100}
			on:loadMore={() => {
				skip = skip + 10;
				performSearch('YAML');
			}}
		/>
	</div>
</div>
