import type { Meta, StoryObj } from '@storybook/react';

import MonthPicker from './MonthPicker';

const meta = {
  title: 'Form Component/Month Picker',
  component: MonthPicker,
  argTypes: {
    onChange: {
      description: `return value is <b>{month: number, year: number}</b>`,
    },
    value: {
      description: `set value with <b>{month: number, year: number}</b>`,
    },
  },
} satisfies Meta<typeof MonthPicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Pilih Bulan',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Pilih Bulan',
    value: { month: 9, year: 2024 },
    disabled: true,
  },
};
