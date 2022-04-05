<script lang="ts">
	import github from 'svelte-highlight/styles/github-dark-dimmed';
	import type { GitpodConfig } from '$lib/code/code';
	import Yaml from 'yaml';
	import prettier from 'prettier/standalone';
	import parser from 'prettier/esm/parser-yaml.mjs';
	import Accordion from '$lib/code/accordion.svelte';
	import OpenVSX from '$lib/code/open-vsx/open-vsx.svelte';
	import Tasks from '$lib/code/tasks/tasks.svelte';

	let config: GitpodConfig = {
		tasks: [{}],
		vscode: {
			extensions: []
		}
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
				<Tasks bind:config bind:yamlFile />
			</Accordion>
			<Accordion heading="TEST">
				<OpenVSX bind:config />
			</Accordion>
		</div>
	</div>
</div>
