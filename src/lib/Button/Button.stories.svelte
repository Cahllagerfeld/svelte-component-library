<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Button from './Button.svelte';
</script>

<Meta title="Button" component={Button} />

<Template let:args>
	<Button {...args} />
</Template>

<Story name="Default" args={{ color: 'cta', label: 'Text' }} />
