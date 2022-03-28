<script>
	import { Card, Button } from 'cahllagercomponents';
	import { animate } from '$lib/gsap';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<div use:animate={{ type: 'from', duration: 3, opacity: 0 }} class="flex justify-center ">
	<Card variant="extralarge">
		<Button class="mb-2" variant="primary">Text</Button>
		<Button class="mb-2" variant="secondary">Text</Button>
		<Button class="mb-2" variant="cta">Text</Button>
		<Button class="mb-2" variant="tertiary">Text</Button>
	</Card>
</div>
<img src="/gopher.png" alt="gopher" />
<img src="/go.png" alt="go" />
