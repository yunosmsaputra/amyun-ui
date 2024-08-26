import type { Meta, StoryObj } from '@storybook/react';

import Box from './Box';

const meta = {
  title: 'Layout/Box',
  component: Box,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    background: {
      control: 'color',
    },
    scrollY: {
      description: 'Make component scroll vertical',
    },
    scrollX: {
      description: 'Make component scroll horizontal',
    },
  },
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Box Component',
  },
};
