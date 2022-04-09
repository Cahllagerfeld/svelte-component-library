<script lang="ts">
	import InfiniteScroll from '$lib/infinite-scroll/infinite-scroll.svelte';
	import { onMount } from 'svelte';
	import debounce from 'lodash.debounce';
	import OpenVsxExtension from './open-vsx-extension.svelte';
	import type { OpenVsxExtension as VSXType, GitpodConfig } from '../code';
	let skip: number = 0;
	let data: VSXType.Extension[] = [];
	let newData: VSXType.Extension[] = [];
	let component: HTMLElement;
	let search: string = '';
	let isLoadMore: boolean = false;
	export let config: GitpodConfig;

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

	$: {
		if (!config.vscode) config.vscode = { extensions: new Map() };
	}

	const fetchData = async (search: string, offset: number) => {
		const response = await fetch(
			`https://open-vsx.org/api/-/search?query=${search}&size=10&sortBy=relevance&sortOrder=desc&offset=${offset}`
		);
		const data = (await response.json()) as VSXType.RootObject;
		return data;
	};

	const handleInput = (extension: VSXType.Extension) => {
		if (config.vscode.extensions.has(extension.url)) {
			config.vscode.extensions.delete(extension.url);
			config.vscode.extensions = config.vscode.extensions;
		} else {
			config.vscode.extensions = config.vscode.extensions.set(extension.url, extension);
		}
	};
	const performSearch = async (string: string) => {
		const data = await fetchData(string, skip);
		newData = data.extensions;
	};

	const debouncedSearch = debounce(changeHandler, 500);

	const handleSelected = (extension: VSXType.Extension) => {
		config.vscode.extensions.delete(extension.url);
		config.vscode.extensions = config.vscode.extensions;
	};

	$: data = [...data, ...newData];
</script>

<div class="flex gap-4 flex-wrap md:flex-nowrap p-8">
	<div class="flex w-full md:w-1/2 flex-col gap-4">
		<input
			placeholder="search your extension"
			class="shadow-lg rounded-2xl px-4 w-full py-2"
			bind:value={search}
			on:input={debouncedSearch}
		/>
		<div bind:this={component} class="grid  grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-4">
			{#each data as extension}
				<input
					on:input={() => {
						handleInput(extension);
					}}
					value={extension}
					type="checkbox"
					id={extension.name}
					class="hidden"
				/>
				<label for={extension.name}>
					<OpenVsxExtension {extension} checked={config.vscode.extensions.has(extension.url)} />
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
	<div class="md:w-1/2 w-full">
		<div class="flex flex-col gap-4">
			<div class="grid grid-cols-3 gap-4">
				{#if [...config.vscode.extensions.values()].length > 0}
					{#each [...config.vscode.extensions] as [_, extension]}
						<input
							class="hidden"
							id={extension.name}
							type="checkbox"
							on:input={() => {
								handleSelected(extension);
							}}
						/>
						<label for={extension.name}>
							<OpenVsxExtension
								{extension}
								checked={config.vscode.extensions.has(extension.url)}
							/></label
						>
					{/each}
				{/if}
			</div>
		</div>
	</div>
</div>
