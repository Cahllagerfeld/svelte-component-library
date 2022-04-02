<script lang="ts">
	import InfiniteScroll from '$lib/infinite-scroll/infinite-scroll.svelte';
	import { onMount } from 'svelte';
	import type { OpenVsxExtension } from './code';
	// export let searchString: string = '';
	let skip: number = 0;
	let data: OpenVsxExtension.Extension[] = [];
	let newData: OpenVsxExtension.Extension[] = [];

	onMount(async () => {
		performSearch('YAML');
	});

	const performSearch = async (string: string) => {
		const response = await fetch(
			`https://open-vsx.org/api/-/search?query=${string}&size=10&sortBy=relevance&sortOrder=desc&offset=${skip}`
		);
		const data = (await response.json()) as OpenVsxExtension.RootObject;
		console.log(data);
		newData = data.extensions;
	};

	$: data = [...data, ...newData];
</script>

<ul class="max-h-[400px] overflow-auto">
	{#each data as extension}
		<li><img src={extension.files.icon} alt="icon" width="48px" /></li>
	{/each}

	<InfiniteScroll
		threshold={0}
		on:loadMore={() => {
			skip = skip + 10;
			performSearch('YAML');
		}}
	/>
</ul>
