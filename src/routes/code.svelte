<script>
	import Highlight from 'svelte-highlight';
	import yaml from 'svelte-highlight/languages/yaml';
	import github from 'svelte-highlight/styles/gruvbox-dark-pale';
	import prettier from 'prettier/standalone';
	import parser from 'prettier/esm/parser-yaml.mjs';

	export const copy = () => {
		navigator.clipboard.writeText(test);
	};

	const code = `apiVersion: xl-deploy/v1
kind: Infrastructure
spec:
- name: Infrastructure/Apache  host
  type: overthere.SshHost
  os: UNIX
  address: tomcat-host.local
  username: tomcatuser
- name: Infrastructure/local-docker
  type: docker.Engine
  dockerHost: http://dockerproxy:2375
- name: aws
  type: aws.Cloud
  accesskey: YOUR ACCESS KEY
  accessSecret: YOUR SECRET`;

	$: test = prettier.format(code, { parser: 'yaml', plugins: [parser] });
</script>

<svelte:head>
	{@html github}
</svelte:head>

<div class="justify-center flex">
	<div class="relative">
		<button
			on:click={copy}
			class="right-8 top-4 cursor-pointer bg-slate-500 p-2 hover:bg-slate-400 transition-all duration-200 rounded-lg absolute"
			><img src="/copy.svg" alt="copy" width="24px" /></button
		>
		<Highlight language={yaml} code={test} />
	</div>
</div>
