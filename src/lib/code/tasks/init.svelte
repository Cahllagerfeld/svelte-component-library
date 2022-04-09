<script lang="ts">
	import Button from '$lib/Button/button.svelte';
	export let initSteps: string[] = [];

	const addInitTask = () => {
		initSteps = [...initSteps, ''];
	};
</script>

<p>
	Please define your Init-Steps.<br /> This command will only run once, during the prebuild of your
	project.Use this command for e.g installing your dependencies. <br /><br />See a full description
	for this step
	<a
		class="hover:no-underline transition-all duration-200 underline"
		href="https://www.gitpod.io/docs/references/gitpod-yml#tasksninit"
	>
		in our docs</a
	>
</p>
<div class="flex gap-4 flex-col">
	{#each initSteps as init}
		<input
			bind:value={init}
			placeholder="Your Init Script e.g. 'npm install' "
			class="font-mono shadow-lg rounded-2xl px-4 w-full py-2"
		/>
	{/each}
	<Button on:click={addInitTask} class="inline-block self-end" variant="primary">+</Button>
</div>
