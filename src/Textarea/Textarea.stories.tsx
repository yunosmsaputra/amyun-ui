import type { Meta, StoryObj } from '@storybook/react';

import Textarea from './Textarea';

const meta = {
  title: 'Form Component/Textarea',
  component: Textarea,
  argTypes: {
    row: {
      description: 'Define row count textarea',
      control: 'number',
    },
    style: {
      table: {
        disabled: 'true',
      },
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
