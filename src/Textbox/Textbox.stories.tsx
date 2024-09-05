import type { Meta, StoryObj } from '@storybook/react';

import Textbox from './Textbox';

const meta = {
  title: 'Form Component/Textbox',
  component: Textbox,
  argTypes: {
    placeholder: {
      description: 'Placeholder textbox',
    },
    value: {
      description: 'Textbox value',
    },
    name: {
      description: 'Textbox name index',
    },
    onChange: {
      description: 'Method to execute when textbox is change value',
    },
    style: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Textbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
