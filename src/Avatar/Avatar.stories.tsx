import type { Meta, StoryObj } from '@storybook/react';

import Avatar from './Avatar';

const meta = {
  title: 'Data Display/Avatar',
  component: Avatar,
  argTypes: {
    color: {
      description: 'Avatar Color',
      control: 'color',
    },
    size: {
      description: 'Avatar Size',
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    children: {
      table: { disable: true },
    },
    style: {
      description: 'Custom styles if needed',
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: '#39A2FD',
    size: 'small',
    children: 'A',
  },
};
