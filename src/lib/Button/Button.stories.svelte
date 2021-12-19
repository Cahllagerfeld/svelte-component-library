<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Button from './Button.svelte';
</script>

<Meta title="Button" component={Button} />

<Template let:args>
	<Button {...args} />
</Template>

<Story name="Default" args={{ cta: false, label: 'Text' }} />
<Story name="Call To Action" args={{ cta: true, label: 'Text' }} />
