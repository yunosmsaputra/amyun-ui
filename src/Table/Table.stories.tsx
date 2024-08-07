import type { Meta, StoryObj } from '@storybook/react';

import TableComponent from './Table';
import React from 'react';
import Button from '../Button/Button';

const meta = {
  component: TableComponent,
  title: 'Data Display/Table',
  argTypes: {
    column: {
      description: 'Set column for table',
      control: 'object',
    },
    style: {
      table: { table: true },
    },
    columnSort: {
      description: `Get column and sort type<br>Return <b>columnKey</b> and <b>sortType</b>`,
      action: 'clicked',
    },
    className: {
      table: { disable: true },
    },
    data: {
      description:
        'Set Data to show in table body <br/>(key object must same as <b>column.key</b> / <br/>can use <b>renderKey</b> in column (<i>render(keyColumn)</i>)',
      control: 'object',
    },
  },
} satisfies Meta<typeof TableComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    column: [
      {
        title: 'Code',
        key: 'code',
        sort: true,
      },
      {
        title: 'Name',
        key: 'name',
        sort: true,
      },
      {
        title: 'description',
        key: 'description',
        sort: false,
      },
      {
        title: '',
        key: '',
        sort: false,
        width: 52,
        render: () => {
          return (
            <Button
              btnIcon="ic-three-dots"
              color="light-grey"
              iconColor="#9C9C9C"
              iconSize={12}
              onClick={() => {}}
              variant="solid"
            />
          );
        },
      },
    ],
    data: [],
  },
};
