import type { Meta, StoryObj } from '@storybook/react';

import Breadcrumb from './Breadcrumb';

const meta = {
  component: Breadcrumb,
  title: 'Layout/Breadcrumb',
  argTypes: {
    nodes: {
      name: 'Node List',
      description: 'List of breadcrumb node',
      control: 'object',
    },
    icon: {
      name: 'Icon',
      description: 'Icon for divider list breadcrumb (use icon from Icon List)',
      control: 'text',
    },
    active: {
      name: 'Active Breadcrumb',
      description: 'Define active breadcrumb (must in node list)',
      control: 'text',
    },
  },
} satisfies Meta<typeof Breadcrumb>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    nodes: ['Dashboard', 'Detail'],
    icon: 'ic-arrow',
    active: 'Detail',
  },
};
