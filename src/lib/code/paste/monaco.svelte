<script lang="ts">
	import type monaco from 'monaco-editor';
	import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
	import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
	import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
	import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
	import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';
	import { onMount } from 'svelte';
	let Monaco: typeof monaco;
	let editorElement: HTMLElement;
	let editor: monaco.editor.IStandaloneCodeEditor;

	onMount(async () => {
		// @ts-ignore
		self.MonacoEnvironment = {
			getWorker(_, label) {
				if (label === 'json') {
					return new jsonWorker();
				}
				if (label === 'css' || label === 'scss' || label === 'less') {
					return new cssWorker();
				}
				if (label === 'html' || label === 'handlebars' || label === 'razor') {
					return new htmlWorker();
				}
				if (label === 'typescript' || label === 'javascript') {
					return new tsWorker();
				}
				return new editorWorker();
			}
		};

		Monaco = await import('monaco-editor');
		editor = Monaco.editor.create(editorElement, {
			language: 'yaml',
			minimap: {
				enabled: false
			},
			theme: 'vs'
		});
		return () => {
			editor.dispose;
		};
	});

	const clickHandler = () => {
		if (editor) {
			console.log(editor.getValue());
			return;
		}
		console.log('init');
	};
</script>

<div bind:this={editorElement} class="h-96" />
<button on:click={clickHandler}>test</button>
