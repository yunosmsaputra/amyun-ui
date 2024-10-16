import type { Meta, StoryObj } from '@storybook/react';

import Text from './Text';

const meta = {
  component: Text,
  title: 'Data Display/Text',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      control: 'color',
    },
    size: {
      control: 'number',
    },
    weight: {
      control: 'radio',
      options: ['normal', 'bold', 'semibold'],
    },
    children: {
      table: { disable: true },
    },
    style: {
      table: { disable: true },
    },
    onClick: {
      table: { disable: true },
    },
    block: {
      description: '<b>True</b> if want set width with 100%',
    },
    align: {
      description: 'Text align',
      control: 'radio',
      options: ['left', 'center', 'right'],
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: '#333',
    size: 12,
    weight: 'normal',
    children: 'Text Display',
  },
};
