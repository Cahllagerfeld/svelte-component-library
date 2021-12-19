<script lang="ts">
	import BaseButton from './button-base.svelte';
	let clazz = '';
	export { clazz as class };
</script>

<BaseButton on:click {...$$restProps} {clazz} class="cta">
	<slot />
</BaseButton>
