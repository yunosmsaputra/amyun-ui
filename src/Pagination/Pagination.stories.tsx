import type { Meta, StoryObj } from '@storybook/react';

import PaginationComponent from './Pagination';

const meta = {
  title: 'Data Display/Pagination',
  component: PaginationComponent,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    totalPage: {
      name: 'Total Page',
      description: 'Total Page of pagination',
      control: 'number',
    },
    activePage: {
      description: 'Active page pagination',
      control: 'number',
    },
    onChange: {
      description: 'Function to get active page',
    },
  },
} satisfies Meta<typeof PaginationComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    totalPage: 5,
  },
};
