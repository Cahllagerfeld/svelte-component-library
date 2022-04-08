<script lang="ts">
	import github from 'svelte-highlight/styles/github-dark-dimmed';
	import type { ConvertedConfig, GitpodConfig } from '$lib/code/code';
	import Yaml from 'yaml';
	import prettier from 'prettier/standalone.js';
	import parser from 'prettier/esm/parser-yaml.mjs';
	import Highlight from 'svelte-highlight';
	import yaml from 'svelte-highlight/languages/yaml';
	import Accordion from '$lib/code/accordion.svelte';
	import OpenVSX from '$lib/code/open-vsx/open-vsx.svelte';
	import Tasks from '$lib/code/tasks/tasks.svelte';
	let yamlInput: string = '';

	let config: GitpodConfig = {};

	const convertJSONtoYaml = (obj: any) => {
		const doc = new Yaml.Document();
		doc.contents = obj;
		return doc.toString({ lineWidth: -1 });
	};

	const prepareConfig = (obj: GitpodConfig): ConvertedConfig => {
		const converted: ConvertedConfig = {};

		converted.tasks = obj.tasks?.map((task) => {
			let init = task.init?.filter((el) => el).join('\n');
			if (task.init?.length > 1) {
				init = init.concat('\n');
			}
			if (init === '') init = undefined;
			let command = task.command?.filter((el) => el).join('\n');
			if (task.command?.length > 1) {
				command = command.concat('\n');
			}
			if (command === '') command = undefined;
			return {
				init,
				command
			};
		});

		return converted;
	};

	$: yamlFile = prettier.format(convertJSONtoYaml(prepareConfig(config)), {
		parser: 'yaml',
		plugins: [parser]
	});
</script>

<svelte:head>
	{@html github}
</svelte:head>

<div class="m-8">
	<div class="flex gap-4 overflow-visible">
		<div class="w-2/3">
			<div>
				<div class="space-y-8">
					<Accordion heading="Paste your YAML">
						<textarea bind:value={yamlInput} class="mono m-4 bg-slate-50 " rows="10" />
					</Accordion>
					<Accordion active={true} heading="Tasks">
						<Tasks bind:config />
					</Accordion>
					<Accordion heading="TEST">
						<OpenVSX bind:config />
					</Accordion>
				</div>
			</div>
		</div>
		<div class="w-1/3 sticky self-start top-0">
			<div class="relative w-full">
				<Highlight class="overflow-auto" language={yaml} code={yamlFile} />
			</div>
		</div>
	</div>
</div>
