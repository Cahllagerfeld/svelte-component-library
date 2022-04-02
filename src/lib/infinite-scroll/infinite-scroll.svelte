<script lang="ts">
	import { createEventDispatcher, onDestroy } from 'svelte';

	export let threshold: number = 0;
	export let hasMore: boolean = true;

	const dispatch = createEventDispatcher();
	let isLoadMore = false;
	let component: HTMLElement;

	$: {
		if (component) {
			const element = component.parentNode;

			element.addEventListener('scroll', onScroll);
			element.addEventListener('resize', onScroll);
		}
	}

	const onScroll = (e) => {
		const offset = e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop;

		if (offset <= threshold) {
			if (!isLoadMore && hasMore) {
				dispatch('loadMore');
			}
			isLoadMore = true;
		} else {
			isLoadMore = false;
		}
	};

	onDestroy(() => {
		if (component) {
			const element = component.parentNode;

			element.removeEventListener('scroll', null);
			element.removeEventListener('resize', null);
		}
	});
</script>

<div bind:this={component} style="width:0px" />
