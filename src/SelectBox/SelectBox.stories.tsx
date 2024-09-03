import type { Meta, StoryObj } from '@storybook/react';

import SelectBox from './SelectBox';

const meta = {
  title: 'Form Component/Select Box',
  component: SelectBox,
  argTypes: {
    size: {
      description: 'Size select box',
      control: 'radio',
      options: ['sm', 'md'],
    },
    placeholder: {
      description: 'Placeholder for selectbox',
      control: 'text',
    },
    options: {
      description:
        'List for option value, you can use string of array / object of array',
      control: 'object',
    },
    position: {
      description: 'Position option value list',
      control: 'radio',
      options: ['top', 'bottom'],
    },
    value: {
      description: 'Default value',
      control: 'text',
    },
    text: {
      description:
        'To define text display in options list, use it if options are <b>Object</b>',
    },
    style: {
      table: { disable: true },
    },
    className: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof SelectBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    position: 'bottom',
    value: 'Option 1',
    size: 'sm',
  },
};

export const OptionsObject: Story = {
  args: {
    options: [
      { value: 'Option1', text: 'Option 1' },
      { value: 'Option2', text: 'Option 2' },
    ],
    position: 'bottom',
    value: 'Option 1',
    text: 'text',
    size: 'md',
  },
};
