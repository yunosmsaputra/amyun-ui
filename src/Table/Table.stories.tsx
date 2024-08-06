import type { Meta, StoryObj } from '@storybook/react';

import TableComponent from './Table';
import { Simulate } from 'react-dom/test-utils';
import click = Simulate.click;

const meta = {
  component: TableComponent,
  title: 'Data Display/Table',
  argTypes: {
    column: {
      description: 'Set column for table',
      control: 'object',
    },
    style: {
      description: 'Define custom style if needed',
    },
    columnSort: {
      description: `Get column and sort type<br>Return <b>columnKey</b> and <b>sortType</b>`,
      action: 'clicked',
    },
    className: {
      table: {disable: true}
    },
    data: {
      description: 'Set Data to show in table body <br/>(key object must same as <b>column.key</b>)',
      control: "object"
    }
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
    ],
    data: [{
      code: 'DT0001',
      name: 'Data 0001',
      description: 'Description for data 0001'
    },{
      code: 'DT0002',
      name: 'Data 0002',
      description: 'Description for data 0002'
    },{
      code: 'DT0003',
      name: 'Data 0003',
      description: 'Description for data 0003'
    },{
      code: 'DT0004',
      name: 'Data 0004',
      description: 'Description for data 0004'
    }]
  },
};
