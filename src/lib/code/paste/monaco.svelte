<script lang="ts">
	import type monaco from 'monaco-editor';
	import { onMount } from 'svelte';
	let Monaco: typeof monaco;
	let editorElement: HTMLElement;
	export let value: string = '';
	let editor: monaco.editor.IStandaloneCodeEditor;

	onMount(async () => {
		Monaco = await import('monaco-editor');
		editor = Monaco.editor.create(editorElement, {
			language: 'yaml',
			minimap: {
				enabled: false
			},
			theme: 'vs'
		});
		window.addEventListener('resize', () => {
			editor.layout();
		});
		editor.onDidChangeModelContent(() => {
			value = editor.getValue();
		});
		return () => {
			editor.dispose;
		};
	});
</script>

<div bind:this={editorElement} class="h-96" />
