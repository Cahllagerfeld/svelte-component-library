<script>
	import { loremIpsum } from '$lib/consts/loremipsum';
</script>

<div class="flex ">
	<div class="h-43 w-1/3 bg-indigo-500 sticky top-0" style="align-self: flex-start;">
		<span class="text-white">Left Nav</span>
	</div>
	<div class="bg-cyan-300 w-1/3" />
	<div class="w-1/3">
		<p>
			{loremIpsum}
		</p>
		<div class="sticky top-0 bg-red-400" style="align-self: flex-start;">Sticky Ding</div>
		<p>
			{loremIpsum}
		</p>
		<p>
			{loremIpsum}
		</p>
		<div class="sticky top-0 bg-blue-700" style="align-self: flex-start;">Sticky Ding</div>
		<p>
			{loremIpsum}
		</p>
		<p>
			{loremIpsum}
		</p>
	</div>
</div>
