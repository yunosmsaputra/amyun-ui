import type { Meta, StoryObj } from '@storybook/react';

import CounterCard, { AmCounterCardIcon } from './CounterCard';
import { AmFlex, AmIcon, AmText } from '../index';
import React from 'react';
import { blueColorLib, neutralColorLib } from '../color';

const meta = {
  title: 'Data Display/Counter Card',
  component: CounterCard,
  argTypes: {
    color: {
      description: 'Color card counter',
      control: 'radio',
      options: ['blue', 'green', 'red', 'netral'],
    },
  },
} satisfies Meta<typeof CounterCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <AmFlex justifyContent={'space-between'} alignItems={'center'}>
        <AmCounterCardIcon color={'blue'}>
          <AmIcon color={'#2671D9'} size={14} name={'check'} />
        </AmCounterCardIcon>
        <AmFlex wrap>
          <AmText block size={12} color={neutralColorLib.label} align={'right'}>
            Meter Data
          </AmText>
          <AmText
            block
            size={18}
            color={blueColorLib.main}
            weight={'semibold'}
            align={'right'}
          >
            12.345
          </AmText>
        </AmFlex>
      </AmFlex>,
    ],
    color: 'blue',
  },
};
