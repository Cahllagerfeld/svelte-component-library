<script lang="ts">
	import InfiniteScroll from '$lib/infinite-scroll/infinite-scroll.svelte';
	import { onMount } from 'svelte';
	import OpenVsxExtension from './open-vsx-extension.svelte';
	import type { OpenVsxExtension as VSXType } from './code';
	let skip: number = 0;
	let data: VSXType.Extension[] = [];
	let newData: VSXType.Extension[] = [];
	let component: HTMLElement;
	let search: string = '';
	let isLoadMore: boolean = false;

	let selectedExtensions: Map<string, VSXType.Extension> = new Map();

	onMount(async () => {
		performSearch('');
	});

	const changeHandler = async () => {
		isLoadMore = false;
		skip = 0;
		data = [];
		newData = [];
		performSearch(search);
	};

	const fetchData = async (search: string, offset: number) => {
		const response = await fetch(
			`https://open-vsx.org/api/-/search?query=${search}&size=10&sortBy=relevance&sortOrder=desc&offset=${offset}`
		);
		const data = (await response.json()) as VSXType.RootObject;
		return data;
	};

	const performSearch = async (string: string) => {
		const data = await fetchData(string, skip);
		newData = data.extensions;
	};

	$: data = [...data, ...newData];
</script>

<div class="grid  p-8 grid-cols-3 gap-4">
	{JSON.stringify(Array.from(selectedExtensions.values()))}
	<div class="flex flex-col gap-4">
		<input
			placeholder="search your extension"
			class="shadow-lg rounded-2xl px-4 w-full py-2"
			bind:value={search}
			on:input={changeHandler}
		/>
		<div bind:this={component} class="grid  grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-4">
			{#each data as extension (extension.url)}
				<input
					on:input={() => {
						if (selectedExtensions.has(extension.url)) {
							selectedExtensions.delete(extension.url);
							selectedExtensions = selectedExtensions;
						} else {
							selectedExtensions = selectedExtensions.set(extension.url, extension);
						}
					}}
					value={extension}
					type="checkbox"
					id={extension.name}
					class="hidden"
				/>
				<label for={extension.name}>
					<OpenVsxExtension {extension} checked={selectedExtensions.has(extension.url)} />
				</label>
			{/each}

			<InfiniteScroll
				bind:isLoadMore
				window={true}
				threshold={100}
				on:loadMore={() => {
					skip += 10;
					performSearch(search);
				}}
			/>
		</div>
	</div>
</div>
