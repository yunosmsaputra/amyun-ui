import type { Meta, StoryObj } from '@storybook/react';

import CounterCard, {
  AmCounterCardData,
  AmCounterCardDataContent,
  AmCounterCardDataSummary,
  AmCounterCardIcon,
  AmCounterCardTitle,
} from './CounterCard';
import React from 'react';

const meta = {
  title: 'Data Display/Counter Card',
  component: CounterCard,
  argTypes: {
    color: {
      description: 'Color card counter',
      control: 'radio',
      options: ['blue', 'green', 'red', 'yellow', 'purple', 'netral'],
    },
  },
} satisfies Meta<typeof CounterCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <AmCounterCardIcon>TD</AmCounterCardIcon>,
      <AmCounterCardData>
        <AmCounterCardTitle>Total Data</AmCounterCardTitle>
        <AmCounterCardDataContent>100</AmCounterCardDataContent>
        <AmCounterCardDataSummary>Tiket</AmCounterCardDataSummary>
      </AmCounterCardData>,
    ],
    color: 'blue',
  },
};
