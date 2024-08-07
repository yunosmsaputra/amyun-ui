import type { Meta, StoryObj } from '@storybook/react';

import Icon from './Icon';

const meta = {
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      description: 'Size Icon',
      control: 'number',
    },
    color: {
      description: 'Color icon',
      control: 'color',
    },
    name: {
      description: 'Icon name',
      control: 'radio',
      options: [
        'ic-plus',
        'ic-sort-default',
        'ic-sort-ascending',
        'ic-sort-descending',
        'ic-arrow-right',
        'ic-ion-apps',
        'ic-three-dots',
      ],
    },
    className: {
      table: { disable: true },
    },
    style: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 14,
    color: '#2671D9',
    name: 'ic-plus',
  },
};
