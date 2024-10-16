import type { Meta, StoryObj } from '@storybook/react';

import { TableComponent, NoDataComponent, AmTableFooter } from './Table';
import React from 'react';
import Button from '../Button/Button';
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
    isStickyColumn: {
      name: 'Sticky Column',
      description:
        'To make 1 or more column sticky, can be furthest to the left or right or both<br/>Use <b>sticky: true</b> to the column that want to be sticky and set <b>left / right position</b><br/>All Column must have <b>width</b> property',
      control: 'boolean',
    },
    onClickRow: {
      description: 'Get return of row data clicked',
    },
    fixedHeader: {
      name: 'Fixed Header',
      description:
        'To make table header sticky / fixed when scrolling<br/>Define table weight when use fixed header',
    },
    tableHeight: {
      name: 'Table Height',
      description: 'Set table height when use fixed header',
    },
    withPagination: {
      name: 'Table With Pagination',
      description: 'Add Pagination with table',
    },
    summaryPagination: {
      description:
        'Summary for pagination, set only if <b>withPagination</b> is true',
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
        clickRow: true,
      },
      {
        title: 'Name',
        key: 'name',
        sort: true,
        clickRow: true,
      },
      {
        title: 'description',
        key: 'description',
        sort: false,
        clickRow: true,
      },
      {
        title: '',
        key: '',
        sort: false,
        width: 52,
        clickRow: false,
        render: (val: any) => {
          return (
            <>
              <Button
                btnIcon="three-dot"
                iconColor="#9C9C9C"
                iconSize={12}
                onClick={() => {}}
              />
            </>
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
    onClickRow: (value) => {
      console.log(value);
    },
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
              btnIcon="three-dot"
              iconColor="#9C9C9C"
              iconSize={12}
              onClick={() => {}}
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

export const HorizontalScroll: Story = {
  args: {
    horizontalScroll: true,
    column: [
      {
        title: 'Code',
        key: 'code',
        sort: true,
        width: 200,
      },
      {
        title: 'Name',
        key: 'name',
        sort: true,
        width: 200,
      },
      {
        title: 'description',
        key: 'description',
        sort: false,
        width: 300,
      },
      {
        title: '',
        key: '',
        sort: false,
        width: 52,
        render: () => {
          return (
            <Button
              btnIcon="three-dot"
              iconColor="#9C9C9C"
              iconSize={12}
              onClick={() => {}}
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

export const StickyColumn: Story = {
  args: {
    isStickyColumn: true,
    column: [
      {
        title: 'Code',
        key: 'code',
        sort: true,
        width: 200,
        sticky: true,
        left: '0px',
      },
      {
        title: 'Name',
        key: 'name',
        sort: true,
        width: 200,
      },
      {
        title: 'description',
        key: 'description',
        sort: false,
        width: 200,
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
              iconColor="#9C9C9C"
              iconSize={12}
              onClick={() => {}}
            />
          );
        },
        sticky: true,
        right: '0px',
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

export const FixedHeader: Story = {
  args: {
    fixedHeader: true,
    tableHeight: 150,
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
              iconColor="#9C9C9C"
              iconSize={12}
              onClick={() => {}}
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

export const WithPagination: Story = {
  args: {
    withPagination: true,
    summaryPagination: {
      totalData: 12,
      totalPages: 5,
      totalShowData: 10,
    },
    onChangePage: () => {},
    onChangeDataSize: () => {},
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
              btnIcon="three-dot"
              iconColor="#9C9C9C"
              iconSize={12}
              onClick={() => {}}
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

export const WithSearch: Story = {
  args: {
    withSearch: true,
    summarySearch: {
      placeholder: 'Cari Sesuatu',
      defaultSelected: 'Semua',
      listSearch: [
        {
          key: 'code',
          value: 'Code',
        },
        {
          key: 'name',
          value: 'Product Name',
        },
      ],
      popupWidth: '100px',
    },
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
              btnIcon="three-dot"
              iconColor="#9C9C9C"
              iconSize={12}
              onClick={() => {}}
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

export const WithFooter: Story = {
  args: {
    ...Default.args,
    children: [
      <tfoot>
        <tr>
          <th colSpan={2}>Total</th>
          <th>20.000</th>
        </tr>
      </tfoot>,
      <AmTableFooter>
        <tr>
          <th colSpan={2}>Total</th>
          <th>20.000</th>
        </tr>
      </AmTableFooter>,
    ],
  },
};
