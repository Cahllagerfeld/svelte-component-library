<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Card from './Card.svelte';

	const argTypes = {
		variant: { control: { type: 'select', options: ['small', 'medium', 'large'] } }
	};
</script>

<Meta title="Card" component={Card} />

<Template {argTypes} let:args>
	<Card {...args}>
		<div>This is a Card</div>
	</Card>
</Template>

<Story name="Small" args={{ variant: 'small' }} />
<Story name="Medium" args={{ variant: 'medium' }} />
<Story name="Large" args={{ variant: 'large' }} />
