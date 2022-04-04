<script lang="ts">
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';

	export let threshold: number = 0;
	export let hasMore: boolean = true;
	export let elementScroll: HTMLElement = null;
	export let window: boolean = false;
	export let isLoadMore = false;

	const dispatch = createEventDispatcher();
	let referenceElement: Document | HTMLElement | ParentNode;
	let component: HTMLElement;

	onMount(() => {
		if (window) {
			referenceElement = document;
		} else if (elementScroll) {
			referenceElement = elementScroll;
		} else {
			referenceElement = component.parentNode;
		}
	});

	$: {
		if (referenceElement) {
			referenceElement.addEventListener('scroll', onScroll);
			referenceElement.addEventListener('resize', onScroll);
		}
	}

	const onScroll = (e) => {
		const element: HTMLElement = e.target.documentElement ? e.target.documentElement : e.target;
		const offset = element.scrollHeight - element.clientHeight - element.scrollTop;

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
		if (referenceElement) {
			referenceElement.removeEventListener('scroll', null);
			referenceElement.removeEventListener('resize', null);
		}
	});
</script>

{#if !window && !elementScroll}
	<div bind:this={component} style="width:0px" />
{/if}
