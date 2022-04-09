<script lang="ts">
	import Button from '$lib/Button/button.svelte';
	import Terminal from '$lib/code/tasks/terminal.svelte';
	import type { GitpodConfig } from '../code';
	export let config: GitpodConfig;

	$: {
		if (!config.tasks) {
			config.tasks = [{}];
		}
	}

	const addTask = async () => {
		config.tasks = [...config.tasks, { init: [], command: [] }];
	};
</script>

<div class="flex justify-center items-center">
	<div class="w-full">
		{#each config.tasks as task, index}
			<Terminal {index} bind:taskObject={task} />
		{/each}
	</div>
</div>
<div class="m-8">
	<Button on:click={addTask} variant="primary">Add</Button>
</div>
