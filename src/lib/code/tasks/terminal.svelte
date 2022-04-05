<script lang="ts">
	import type { Task } from '$lib/code/code';
	import Button from '$lib/Button/button.svelte';

	export let taskObject: Task = {};

	let commandArray = [''];
	let initArray = [''];
	const convertCommands = (array) => {
		if (array.length < 1) {
			return;
		}
		const sanitizedStrings = array.filter((el) => el);
		if (sanitizedStrings.length < 1) {
			return;
		}
		let joinedCommands = sanitizedStrings.join('\n');
		if (array.length > 1) {
			joinedCommands = joinedCommands.concat('\n');
		}
		return joinedCommands;
	};

	$: taskObject.command = convertCommands(commandArray);
	$: taskObject.init = convertCommands(initArray);

	const addCommandTask = () => {
		commandArray = [...commandArray, ''];
	};

	const addInitTask = () => {
		initArray = [...initArray, ''];
	};

	const removeCommandTaskByIndex = (index: number) => {
		commandArray = commandArray.filter((_, i) => i !== index);
	};
</script>

<div
	class="border-dashed border-4 border-spacing border-gray-800 border-collapse gap-8 m-8 p-4 flex"
>
	<div class="md:w-1/2 flex justify-between space-y-4 flex-col w-full">
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
		<div class="flex gap-4 flex-col">
			{#each initArray as init}
				<input
					bind:value={init}
					placeholder="Your Init Script e.g. 'npm install' "
					class="font-mono shadow-lg rounded-2xl px-4 w-full py-2"
				/>
			{/each}
			<Button on:click={addInitTask} class="inline-block self-end" variant="primary">+</Button>
		</div>
	</div>
	<div class="md:w-1/2 justify-between flex space-y-4 flex-col w-full">
		<p>
			Please define your command step. <br /> This command is the main command that runs once the
			workspace started and doesn’t need to terminate. Use this command for e.g starting your
			project<br /><br />See a full description for this step in our docs
			<a
				class="hover:no-underline transition-all duration-200 underline"
				href="https://www.gitpod.io/docs/references/gitpod-yml#tasksninit"
			>
				in our docs</a
			>
		</p>

		{#each commandArray as command, index}
			<div class="flex items-center gap-4">
				<input
					bind:value={command}
					placeholder="Your start command e.g. 'npm run dev' "
					class="font-mono shadow-lg rounded-2xl px-4 w-full py-2"
				/>
				<button
					on:click={() => {
						removeCommandTaskByIndex(index);
					}}
				>
					<img src="/trash.svg" alt="trash" width="32px" />
				</button>
			</div>
		{/each}
		<Button class="inline-block self-end" on:click={addCommandTask} variant="primary">+</Button>
	</div>
</div>
