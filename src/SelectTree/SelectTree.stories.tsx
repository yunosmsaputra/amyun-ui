import type { Meta, StoryObj } from '@storybook/react';

import SelectTree from './SelectTree';

const meta = {
  title: 'Form Component/Select Tree',
  component: SelectTree,
  argTypes: {
    data: {
      description: 'Add child inside object array to have tree children',
    },
    text: {
      description: 'Define text value from data object',
    },
    id: {
      description: 'Define key id from data object',
    },
  },
} satisfies Meta<typeof SelectTree>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Pilih data',
    data: [
      {
        id: 1,
        name: 'Data 1',
        child: [
          {
            id: 3,
            name: 'Child 1',
            child: [
              {
                id: 3,
                name: 'Grand Child 1',
              },
              {
                id: 3,
                name: 'Grand Child 2',
              },
            ],
          },
          {
            id: 3,
            name: 'Child 2',
          },
        ],
      },
      { id: 2, name: 'Data 2' },
    ],
    text: 'name',
    id: 'id',
  },
};
