import type { Meta, StoryObj } from '@storybook/react';

import Textbox, {
  AmTextBoxAppendInner,
  AmTextBoxPrependInner,
} from './Textbox';
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
    defaultValue: {
      description: 'For set default Value without use onChange',
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
    type: 'text',
  },
};

export const Disabled: Story = {
  args: {
    type: 'text',
    disabled: true,
  },
};

export const Number: Story = {
  args: {
    type: 'number',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
  },
};

export const AppendIcon: Story = {
  args: {
    type: 'text',
    children: [
      <AmTextBoxAppendInner>
        <AmIcon name={'search'} size={12} color={blueColorLib.main}></AmIcon>
      </AmTextBoxAppendInner>,
    ],
  },
};

export const PrependIcon: Story = {
  args: {
    type: 'text',
    children: [
      <AmTextBoxPrependInner>
        <AmIcon name={'user'} size={12} color={blueColorLib.main}></AmIcon>
      </AmTextBoxPrependInner>,
    ],
  },
};
