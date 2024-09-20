import type { Meta, StoryObj } from '@storybook/react';

import Textbox, { AmTextBoxPrependInner } from './Textbox';
import React from 'react';
import { AmIcon } from '../index';
import { blueColorLib } from '../color';

const meta = {
  title: 'Form Component/Textbox',
  component: Textbox,
  argTypes: {
    placeholder: {
      description: 'Placeholder textbox',
    },
    value: {
      description: 'Textbox value',
    },
    name: {
      description: 'Textbox name index',
    },
    onChange: {
      description: 'Method to execute when textbox is change value',
    },
    style: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Textbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <AmTextBoxPrependInner>
        <AmIcon name={'search'} size={12} color={blueColorLib.main}></AmIcon>
      </AmTextBoxPrependInner>,
    ],
  },
};
