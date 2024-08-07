import type { Meta, StoryObj } from '@storybook/react';

import { ButtonComponent } from './index';

const meta = {
  title: 'Form Component/Button',
  component: ButtonComponent,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: {
      control: 'text',
      name: 'Text',
      description: 'Label text for button',
    },
    color: {
      control: 'radio',
      options: ['primary', 'danger', 'light-grey'],
      description: 'Color of button',
    },
    variant: {
      control: 'radio',
      options: ['solid', 'outlined', 'text'],
      description: 'Variant of button',
    },
    onClick: {
      action: 'clicked',
      description: 'Function when button clicked',
    },
    prependIcon: {
      description: 'Use if want add prepend icon (use icon from Icon List)',
      control: 'text',
      name: 'Prepend Icon',
    },
    appendIcon: {
      description: 'Use if want add append icon (use icon from Icon List)',
      control: 'text',
      name: 'Append Icon',
    },
    iconColor: {
      description:
        'Define color of Prepend / Append Icon (only use with Prepend and Append Icon)',
      control: 'color',
      name: 'Icon Color',
    },
    iconSize: {
      description:
        'Define size of Prepend / Append Icon (only use with Prepend and Append Icon)',
      control: 'number',
      name: 'Icon Size',
    },
    style: {
      description: 'Custom style if needed',
      name: 'Custom Styles',
    },
  },
} satisfies Meta<typeof ButtonComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Save',
    color: 'primary',
    variant: 'solid',
  },
};

export const WithIcon: Story = {
  args: {
    ...Default.args,
    prependIcon: 'ic-plus',
    appendIcon: 'ic-ion-apps',
    iconColor: '#FFF',
    iconSize: 14,
  },
};

export const IconButton: Story = {
  args: {
    btnIcon: 'ic-plus',
    iconColor: '#2671D9',
    iconSize: 8,
  },
};
