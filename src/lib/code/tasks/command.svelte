<script lang="ts">
	import Button from '$lib/Button/button.svelte';
	export let commandSteps: string[] = [];

	const addCommandTask = () => {
		commandSteps = [...commandSteps, ''];
	};

	const removeCommandTaskByIndex = (index: number) => {
		commandSteps = commandSteps.filter((_, i) => i !== index);
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

{#each commandSteps as command, index}
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
