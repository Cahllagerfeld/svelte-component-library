<script lang="ts">
	import Highlight from 'svelte-highlight';
	import yaml from 'svelte-highlight/languages/yaml';
	import github from 'svelte-highlight/styles/github-dark-dimmed';
	import type { GitpodConfig } from '$lib/code/code';
	import Button from '$lib/Button/button.svelte';
	import Yaml from 'yaml';
	import Terminal from '$lib/code/terminal.svelte';
	import prettier from 'prettier/standalone';
	import parser from 'prettier/esm/parser-yaml.mjs';
	import { slide } from 'svelte/transition';

	let config: GitpodConfig = {
		tasks: [{}]
	};

	let active: boolean = false;

	const toggleActive = () => {
		active = !active;
	};

	const addTask = async () => {
		config.tasks = [...config.tasks, {}];
	};

	const convertJSONtoYaml = (obj: any) => {
		const doc = new Yaml.Document();
		doc.contents = obj;
		return doc.toString();
	};

	$: yamlFile = prettier.format(convertJSONtoYaml(config), {
		parser: 'yaml',
		plugins: [parser]
	});
</script>

<svelte:head>
	{@html github}
</svelte:head>

<div class="m-8 ">
	<div class="bg-[#ece7e5]">
		<div class="space-y-4">
			<h2 on:click={toggleActive} class="text-bold text-lg cursor-pointer">Tasks</h2>
			{#if active}
				<div transition:slide={{ duration: 200 }} class="flex flex-col">
					<div class="flex justify-center items-center">
						<div>
							{#each config.tasks as task}
								<Terminal bind:taskObject={task} />
							{/each}
						</div>
						<div class="relative w-full md:w-1/4">
							<Highlight language={yaml} code={yamlFile} />
						</div>
					</div>
				</div>
				<div class="m-8">
					<Button on:click={addTask} variant="primary">Add</Button>
				</div>
			{/if}
		</div>
	</div>
</div>
