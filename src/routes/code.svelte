<script lang="ts">
	import Highlight from 'svelte-highlight';
	import yaml from 'svelte-highlight/languages/yaml';
	import github from 'svelte-highlight/styles/github-dark-dimmed';
	import type { GitpodConfig, Task } from '$lib/code/code';
	import Yaml from 'yaml';
	import Button from '$lib/Button/button.svelte';
	import prettier from 'prettier/standalone';
	import parser from 'prettier/esm/parser-yaml.mjs';
	import { slide } from 'svelte/transition';

	let active: string = 'Tasks';

	const handleActive = () => {
		active = 'TEST';
	};

	const newTerminal: Task = {
		init: '',
		command: ''
	};

	const config: GitpodConfig = {
		tasks: []
	};

	const handleInit = () => {
		config.tasks = [...config.tasks, newTerminal];
		console.log(config);
	};

	const handleCommand = () => {
		config.tasks = [...config.tasks, newTerminal];
	};

	const convertJSONtoYaml = (obj: any) => {
		const doc = new Yaml.Document();
		doc.contents = obj;
		return doc.toString();
	};

	$: yamlFile = prettier.format(convertJSONtoYaml(config), { parser: 'yaml', plugins: [parser] });
</script>

<svelte:head>
	{@html github}
</svelte:head>

<div class="m-8">
	<div class="bg-[#ece7e5]">
		{#if active === 'Tasks'}
			<div transition:slide={{ duration: 200 }}>
				<h2 class="text-bold text-lg">Tasks</h2>
				<div class="flex flex-wrap">
					<div class="md:w-3/4 w-full">
						<div class="mt-8 gap-8 p-8 flex">
							<div class="md:w-1/2 flex flex-col w-full">
								<p>
									Please define your Init-Steps.<br /> This command will only run once, during the
									prebuild of your project.<br /><br /> Use this command for e.g installing your
									dependencies. See a full description for this step
									<a
										class="hover:no-underline transition-all duration-200 underline"
										href="https://www.gitpod.io/docs/references/gitpod-yml#tasksninit"
									>
										in our docs</a
									>
								</p>

								<input
									bind:value={newTerminal.init}
									placeholder="Your Init Script e.g. 'npm install' "
									class="font-mono mt-8 shadow-lg rounded-2xl px-4 w-full py-2"
								/>
								<Button on:click={handleInit} class="mt-4 self-end" variant="primary">Add</Button>
							</div>
							<div class="md:w-1/2 flex flex-col w-full">
								<p>
									Please define your command step. <br /> This command is the main command that runs
									once the workspace started and doesn’t need to terminate. <br /><br />See a full
									description for this step in our docs
									<a
										class="hover:no-underline transition-all duration-200 underline"
										href="https://www.gitpod.io/docs/references/gitpod-yml#tasksninit"
									>
										in our docs</a
									>
								</p>

								<input
									bind:value={newTerminal.command}
									placeholder="Your Init Script e.g. 'npm run dev' "
									class="font-mono mt-8 shadow-lg rounded-2xl px-4 w-full py-2"
								/>
								<Button on:click={handleCommand} class="mt-4 self-end" variant="primary">Add</Button
								>
							</div>
						</div>
					</div>
					<div class="relative overflow-y-scroll  w-full md:w-1/4">
						<Highlight class="flex-shrink-0" language={yaml} code={yamlFile} />
					</div>
				</div>
			</div>
		{/if}
		{#if active === 'TEST'}
			<div transition:slide={{ duration: 200 }}>
				<div class="h-lg bg-red-700">TEST</div>
			</div>
		{/if}
	</div>
</div>

<button on:click={handleActive}>Switch</button>
