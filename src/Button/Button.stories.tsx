import type { Meta, StoryObj } from '@storybook/react';

import { ButtonComponent } from './index';

const meta = {
  component: ButtonComponent,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    label: {
      control: 'text',
      name: 'Text',
      description: 'Label text for button'
    },
    color: {
      control: 'radio',
      options: ['primary', 'danger'],
      description: 'Color of button'
    },
    variant: {
      control: 'radio',
      options: ['solid', 'outlined'],
      description: 'Variant of button'
    },
    onClick: {
      action: 'clicked',
      description: 'Function when button clicked'
    }
  }
} satisfies Meta<typeof ButtonComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Save',
    color: 'primary',
    variant: 'solid'
  },
};