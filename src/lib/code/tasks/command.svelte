<script lang="ts">
	import Button from '$lib/Button/button.svelte';
	import { convertCommands } from '$lib/util/tasks';
	export let commandSteps: string | undefined = undefined;

	let commandArray = [''];
	$: {
		if (commandSteps) {
			commandArray = commandSteps.split('\n').filter((el) => el);
		}
	}

	const inputHandler = () => {
		commandSteps = convertCommands(commandArray);
	};

	const addCommandTask = () => {
		commandArray = [...commandArray, ''];
	};

	const removeCommandTaskByIndex = (index: number) => {
		commandArray = commandArray.filter((__dirname, i) => i !== index);
		inputHandler();
	};
</script>

<p>
	Please define your command step. <br /> This command is the main command that runs once the
	workspace started and doesn’t need to terminate. Use this command for e.g starting your project<br
	/><br />See a full description for this step in our docs
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
			on:input={inputHandler}
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
