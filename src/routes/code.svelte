<script lang="ts">
	import github from 'svelte-highlight/styles/github-dark-dimmed';
	import type { ConvertedConfig, GitpodConfig, OpenVsxExtension } from '$lib/code/code';
	import Yaml from 'yaml';
	import prettier from 'prettier/standalone.js';
	import parser from 'prettier/esm/parser-yaml.mjs';
	import Highlight from 'svelte-highlight';
	import yaml from 'svelte-highlight/languages/yaml';
	import Accordion from '$lib/code/accordion.svelte';
	import OpenVSX from '$lib/code/open-vsx/open-vsx.svelte';
	import Tasks from '$lib/code/tasks/tasks.svelte';
	import Button from '$lib/Button/button.svelte';
	import { validate } from '$lib/util/json-validate';
	let yamlInput: string = '';

	let config: GitpodConfig = {};

	const convertJSONtoYaml = (obj: any) => {
		const doc = new Yaml.Document();
		doc.contents = obj;
		return doc.toString({ lineWidth: -1 });
	};

	const convertYaml = async () => {
		const parsedConfig: GitpodConfig = {};
		const yaml = Yaml.parse(yamlInput) as ConvertedConfig;
		if (!yaml) return;
		if (!validate(yaml)) {
			console.log(validate.errors);
			return;
		}

		//tasks
		if (yaml.tasks) {
			parsedConfig.tasks = yaml.tasks?.map((task) => {
				let init = task.init?.split('\n').filter((el) => el);
				let command = task.command?.split('\n').filter((el) => el);
				return {
					init,
					command
				};
			});
		}

		//extensions
		if (yaml.vscode) {
			parsedConfig.vscode = { extensions: new Map() };
			const extensionMap = new Map<string, OpenVsxExtension.Extension>();
			await Promise.all(
				yaml.vscode.extensions.map(async (extension) => {
					try {
						await convertExtension(extension, extensionMap);
					} catch (e) {}
				})
			);

			parsedConfig.vscode.extensions = extensionMap;
		}
		config = parsedConfig;
	};

	const convertExtension = async (
		extension: string,
		map: Map<string, OpenVsxExtension.Extension>
	) => {
		const splitExtension = extension.split('.');
		const url = `https://open-vsx.org/api/${splitExtension[0]}/${splitExtension[1]}`;
		const resp = await fetch(url);
		const data = (await resp.json()) as VSXDetailResponse.RootObject;

		map.set(url, {
			version: data.version,
			name: data.name,
			url,
			averageRating: data.averageRating,
			displayName: data.displayName,
			namespace: data.namespace,
			timestamp: data.timestamp,
			files: {
				icon: data.files.icon
			}
		});
	};

	const prepareConfig = (obj: GitpodConfig): ConvertedConfig => {
		const converted: ConvertedConfig = {};

		converted.tasks = obj.tasks?.map((task) => {
			let init = task.init?.filter((el) => el).join('\n');
			if (task.init && task.init?.length > 1) {
				init = init.concat('\n');
			}
			let command = task.command?.filter((el) => el).join('\n');
			if (task.command && task.command?.length > 1) {
				command = command.concat('\n');
			}
			if (command === '') command = undefined;
			if (init === '') init = undefined;
			return {
				init,
				command
			};
		});

		if (obj.vscode) {
			const values = Array.from(obj.vscode.extensions.values());
			if (values.length > 0) {
				const extensions = values.map((extension) => `${extension.namespace}.${extension.name}`);
				converted.vscode = {
					extensions
				};
			}
		}

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
						<div class="gap-4 flex flex-col mb-4">
							<textarea bind:value={yamlInput} class="mono m-4 bg-slate-50 " rows="10" />
							<div class="self-end m-4">
								<Button on:click={convertYaml} variant="primary">Load</Button>
							</div>
						</div>
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
