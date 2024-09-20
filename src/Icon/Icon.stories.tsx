import type { Meta, StoryObj } from '@storybook/react';

import Icon from './Icon';

const meta = {
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      description: 'Size Icon',
      control: 'number',
    },
    color: {
      description: 'Color icon',
      control: 'color',
    },
    name: {
      description: 'Icon name',
      control: 'select',
      options: [
        'plus',
        'sort-inactive',
        'sorting-ascend',
        'sorting-descend',
        'three-dot',
        'check',
        'cross-reject',
        'filter',
        'search',
        'chevron-down',
        'chevron-right',
        'chevron-left',
        'document',
        'key',
        'user',
        'calendar',
        'upload',
          'download',
        'view-column',
        'eye',
        'eye-outline',
        'eye-slash',
        'eye-slash-outline',
        'edit',
        'edit-outline',
        'delete',
        'delete-outline',
          'home',
          'users',
          'document-2',
          'master',
          'material',
          'setting'
      ],
    },
    className: {
      table: { disable: true },
    },
    style: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 20,
    color: '#2671D9',
    name: 'plus',
  },
};
