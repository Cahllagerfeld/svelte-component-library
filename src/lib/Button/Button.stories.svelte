<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Button from './button.svelte';

	const argTypes = {
		variant: { control: { type: 'select', options: ['primary', 'secondary', 'cta'] } },
		disabled: { control: { type: 'radio', options: [true, false] } }
	};
</script>

<Meta title="Button" component={Button} {argTypes} />

<Template let:args>
	<Button {...args}>Button</Button>
</Template>

<Story name="CTA" args={{ variant: 'cta', disabled: false }} />
