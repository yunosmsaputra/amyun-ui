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
      description: 'List for option value',
      control: 'object',
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
  },
};
