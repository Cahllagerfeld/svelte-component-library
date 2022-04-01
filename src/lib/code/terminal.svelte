<script lang="ts">
	import type { Task } from './code';
	import Button from '$lib/Button/button.svelte';

	export let taskObject: Task = {};
	let commandArray = [''];

	const convertCommands = () => {
		if (commandArray.length < 1) {
			return;
		}
		return commandArray.join('\n');
	};

	$: taskObject.command = convertCommands();

	const addCommandTask = () => {
		commandArray = [...commandArray, ''];
	};
</script>

<div
	class="border-dashed border-4 border-spacing border-gray-800 border-collapse gap-8 m-8 p-4 flex"
>
	<div class="md:w-1/2 flex space-y-4 flex-col w-full">
		<p>
			Please define your Init-Steps.<br /> This command will only run once, during the prebuild of
			your project.Use this command for e.g installing your dependencies. <br /><br />See a full
			description for this step
			<a
				class="hover:no-underline transition-all duration-200 underline"
				href="https://www.gitpod.io/docs/references/gitpod-yml#tasksninit"
			>
				in our docs</a
			>
		</p>

		<input
			bind:value={taskObject.init}
			placeholder="Your Init Script e.g. 'npm install' "
			class="font-mono shadow-lg rounded-2xl px-4 w-full py-2"
		/>
	</div>
	<div class="md:w-1/2 flex space-y-4 flex-col w-full">
		<p>
			Please define your command step. <br /> This command is the main command that runs once the
			workspace started and doesn’t need to terminate. <br /><br />See a full description for this
			step in our docs
			<a
				class="hover:no-underline transition-all duration-200 underline"
				href="https://www.gitpod.io/docs/references/gitpod-yml#tasksninit"
			>
				in our docs</a
			>
		</p>

		{#each commandArray as command}
			<input
				bind:value={command}
				placeholder="Your start command e.g. 'npm run dev' "
				class="font-mono mt-8 shadow-lg rounded-2xl px-4 w-full py-2"
			/>
		{/each}
		<Button class="inline-block self-end" on:click={addCommandTask} variant="primary">+</Button>
	</div>
</div>
