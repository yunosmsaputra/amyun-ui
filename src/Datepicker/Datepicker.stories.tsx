import type { Meta, StoryObj } from '@storybook/react';

import Datepicker from './Datepicker';

const meta = {
  title: 'Form Component/Datepicker',
  component: Datepicker,
} satisfies Meta<typeof Datepicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
