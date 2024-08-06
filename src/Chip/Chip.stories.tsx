import type { Meta, StoryObj } from '@storybook/react';

import { ChipComponent } from './index';
import PropTypes from 'prop-types';

ChipComponent.propTypes = {
  type: PropTypes.oneOf(['primary', 'success', 'danger', 'warning']),
};

const meta = {
  title: 'Data Display/Chip',
  component: ChipComponent,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'radio',
      options: ['primary', 'success', 'danger', 'warning'],
      description: 'Define for type of Chip',
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: 'Size chips',
    },
    children: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof ChipComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'primary',
    children: 'Status',
    size: 'sm',
  },
};
