<script>
	import { loremIpsum } from '$lib/consts/loremipsum';
</script>

<div class="sticky top-0 h-24 bg-indigo-50" />
<div class="bg-indigo-100  lg:fixed lg:left-0 lg:h-full lg:w-1/5">Left</div>
<div class="bg-indigo-300 lg:fixed lg:h-full lg:right-0 lg:w-1/5">Right</div>
<div class="bg-indigo-200 lg:overflow-scroll lg:w-3/5" style="margin: 0 auto;">{loremIpsum}</div>
