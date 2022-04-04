<script lang="ts">
	import type { OpenVsxExtension } from './code';

	export let extension: OpenVsxExtension.Extension;

	let checked: boolean = false;
</script>

<input id={extension.name} bind:checked type="checkbox" />
<label for={extension.name}>
	<div
		class:border={checked}
		class="bg-[#f9f9f9] shadow-md box-border rounded-2xl p-4 space-y-4 cursor-pointer flex flex-col justify-between items-center"
	>
		<img
			width="72px"
			height="72px"
			src={extension.files.icon ? extension.files.icon : '/gitpod-g.svg'}
			alt={extension.name + ' icon'}
		/>
		<h3 class="text-lg text-center truncate min-w-0 font-semibold">
			{extension.displayName}
		</h3>
	</div>
</label>

<style lang="postcss">
	input {
		@apply hidden;
	}

	.border {
		@apply border-4 border-orange-400;
	}
</style>
