import type { Meta, StoryObj } from '@storybook/react';

import Icon from './Icon';

const meta = {
  component: Icon,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    size: {
      description: 'Size Icon',
      control: 'number'
    },
    color: {
      description: 'Color icon',
      control: 'text'
    },
    name: {
      description: 'Icon name',
      control: 'select',
      options: ['ic-plus']
    }
  }
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 14,
    color: '#2671D9',
    name: 'ic-plus'
  }
};