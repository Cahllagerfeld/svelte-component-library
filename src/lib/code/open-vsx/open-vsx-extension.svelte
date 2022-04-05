<script lang="ts">
	import type { OpenVsxExtension } from '$lib/code/code';

	export let extension: OpenVsxExtension.Extension;
	export let checked: boolean = false;
</script>

<div
	class:checked
	class="bg-[#f9f9f9] shadow-md rounded-2xl p-4 space-y-4 cursor-pointer flex flex-col justify-between items-center"
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

<style lang="postcss">
	.checked {
		@apply border-4 border-orange-400;
	}
</style>
