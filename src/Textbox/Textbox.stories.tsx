import type { Meta, StoryObj } from '@storybook/react';

import Textbox from './Textbox';

const meta = {
  title: 'Form Component/Textbox',
  component: Textbox,
} satisfies Meta<typeof Textbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
