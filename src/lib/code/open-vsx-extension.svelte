<script lang="ts">
	import type { OpenVsxExtension } from './code';

	export let extension: OpenVsxExtension.Extension;
</script>

<div
	class="bg-[#f9f9f9] shadow-md rounded-2xl p-4 space-y-4 cursor-pointer flex flex-col justify-between items-center"
>
	<img
		width="72px"
		height="72px"
		src={extension.files.icon ? extension.files.icon : '/gitpod-g.svg'}
		alt={extension.name + ' icon'}
	/>
	<h3 class="text-lg truncate font-semibold" style="min-width: 0">{extension.displayName}</h3>
	<p>{extension.averageRating}</p>
</div>
