<script lang="ts">
	import Highlight from 'svelte-highlight';
	import yaml from 'svelte-highlight/languages/yaml';
	import Button from '$lib/Button/button.svelte';
	import Terminal from '$lib/code/tasks/terminal.svelte';
	import type { GitpodConfig } from '../code';
	export let config: GitpodConfig;
	export let yamlFile: string;

	$: {
		if (!config.tasks) {
			config.tasks = [{}];
		}
	}

	const addTask = async () => {
		config.tasks = [...config.tasks, {}];
	};
</script>

<div class="flex justify-center items-center">
	<div class="w-full md:w-3/4">
		{#each config.tasks as task, index}
			<Terminal {index} bind:taskObject={task} />
		{/each}
	</div>
	<div class="relative w-full md:w-1/4">
		<Highlight class="overflow-auto" language={yaml} code={yamlFile} />
	</div>
</div>
<div class="m-8">
	<Button on:click={addTask} variant="primary">Add</Button>
</div>
