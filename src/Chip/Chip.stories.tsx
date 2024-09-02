import type { Meta, StoryObj } from '@storybook/react';

import { ChipComponent } from './index';

const meta = {
  title: 'Data Display/Chip',
  component: ChipComponent,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      control: 'radio',
      options: ['blue', 'green', 'orange', 'red'],
      description: 'Define for type of Chip',
    },
    size: {
      control: 'radio',
      options: ['sm', 'md'],
      description: 'Size chips',
    },
    children: {
      table: { disable: true },
    },
    className: {
      table: { disable: true },
    },
    style: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof ChipComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'blue',
    children: 'Status',
    size: 'md',
  },
};
