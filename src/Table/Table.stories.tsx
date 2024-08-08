import type { Meta, StoryObj } from '@storybook/react';

import { TableComponent, NoDataComponent } from './Table';
import React from 'react';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';

const meta = {
  component: TableComponent,
  title: 'Data Display/Table',
  argTypes: {
    column: {
      description: 'Set column for table',
      control: 'object',
    },
    style: {
      table: { disable: true },
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
    children: {
      table: { disable: true },
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
    data: [
      {
        code: 'DT0001',
        name: 'Data 0001',
        description: 'Description for data 0001',
      },
      {
        code: 'DT0002',
        name: 'Data 0002',
        description: 'Description for data 0002',
      },
      {
        code: 'DT0003',
        name: 'Data 0003',
        description: 'Description for data 0003',
      },
      {
        code: 'DT0004',
        name: 'Data 0004',
        description: 'Description for data 0004',
      },
    ],
  },
};

export const EmptyData: Story = {
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
    children: (
      <NoDataComponent>
        <Text weight={'semibold'} color={'#333'} size={14}>
          Tidak ada data untuk ditampilkan
        </Text>
      </NoDataComponent>
    ),
  },
};
