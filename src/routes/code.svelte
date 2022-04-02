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
	import Accordion from '$lib/code/accordion.svelte';
	import OpenVSX from '$lib/code/open-vsx.svelte';
	import OpenVsx from '$lib/code/open-vsx.svelte';

	let config: GitpodConfig = {
		tasks: [{}]
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

<div class="m-8">
	<div class="min-h-screen ">
		<div class="space-y-8">
			<Accordion active={true} heading="Tasks">
				<div class="flex justify-center items-center">
					<div class="w-full md:w-3/4">
						{#each config.tasks as task}
							<Terminal bind:taskObject={task} />
						{/each}
					</div>
					<div class="relative w-full md:w-1/4">
						<Highlight class="overflow-auto" language={yaml} code={yamlFile} />
					</div>
				</div>
				<div class="m-8">
					<Button on:click={addTask} variant="primary">Add</Button>
				</div>
			</Accordion>
			<Accordion heading="TEST">
				<OpenVsx />
			</Accordion>
		</div>
	</div>
</div>
