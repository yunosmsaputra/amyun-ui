import type { Meta, StoryObj } from '@storybook/react';

import Flex from './Flex';
import React from 'react';

const meta = {
  component: Flex,
  title: 'Layout/Flex',
  argTypes: {
    children: {
      table: { disable: true },
    },
    justifyContent: {
      name: 'Justify Content',
      control: 'radio',
      options: [
        'center',
        'flex-start',
        'flex-end',
        'space-between',
        'space-around',
        'space-evenly',
      ],
    },
    alignItems: {
      name: 'Align Items',
      control: 'radio',
      options: ['center', 'flex-start', 'flex-end', 'stretch', 'baseline'],
    },
    gap: {
      name: 'Flex Gap',
      control: 'number',
    },
  },
} satisfies Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [<div>Left</div>, <div>Center</div>, <div>Right</div>],
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },
};
