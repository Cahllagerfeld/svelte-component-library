<script lang="ts">
	import type { Task } from '$lib/code/code';
	import Init from '$lib/code/tasks/init.svelte';
	import Command from '$lib/code/tasks/command.svelte';

	export let taskObject: Task = {};
</script>

<div
	class="border-dashed border-4 border-spacing border-gray-800 border-collapse gap-8 m-8 p-4 flex"
>
	<div class="md:w-1/2 flex justify-between space-y-4 flex-col w-full">
		<Init bind:taskObject />
	</div>
	<div class="md:w-1/2 justify-between flex space-y-4 flex-col w-full">
		<Command bind:taskObject />
	</div>
</div>
