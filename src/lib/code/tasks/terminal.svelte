<script lang="ts">
	import type { Task } from '$lib/code/code';
	import Init from '$lib/code/tasks/init.svelte';
	import Command from '$lib/code/tasks/command.svelte';
	import RadioGroup from '$lib/radio-group.svelte';
	export let index: number;
	let step: string;

	export let taskObject: Task = {};
</script>

<div class="border-dashed border-4 border-spacing border-gray-800 border-collapse gap-8 m-8 p-4 ">
	<div class="flex">
		<div class:hidden={step !== 'init'} class="flex justify-between space-y-4 flex-col w-full">
			<Init bind:initSteps={taskObject.init} />
		</div>
		<div class:hidden={step !== 'command'} class="justify-between flex space-y-4 flex-col w-full">
			<!-- <Command bind:commandSteps={taskObject.command} /> -->
		</div>
	</div>
	<div class="text-center">
		<RadioGroup {index} bind:step />
	</div>
</div>
