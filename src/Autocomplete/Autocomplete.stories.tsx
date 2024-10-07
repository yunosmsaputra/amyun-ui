import type { Meta, StoryObj } from '@storybook/react';

import Autocomplete from './Autocomplete';

const meta = {
  title: 'Form Component/Autocomplete',
  component: Autocomplete,
  argTypes: {
    isServerSide: {
      description: 'Use it if want set data from serverside',
    },
    id: {
      description: 'Deinition key id from data object',
    },
    text: {
      description: 'For define text value in list and selected Data',
    },
    onSelectedData: {
      description:
        'Set value from selected data, it will return <b>target:{name: $name, value: $value}</b>',
    },
    onChange: {
      description: 'Function to get value from type in autocomplete',
    },
    multiSelect: {
      description: 'Set to <b>true</b> if want use multi select data',
    },
  },
} satisfies Meta<typeof Autocomplete>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Cari data',
    data: [
      {
        id: 1,
        name: 'Data 1',
      },
      {
        id: 2,
        name: 'Data 2',
      },
      {
        id: 3,
        name: 'Data 3',
      },
      {
        id: 4,
        name: 'Data 4',
      },
      {
        id: 5,
        name: 'Data 5',
      },
      {
        id: 6,
        name: 'Data 6',
      },
    ],
    text: 'name',
    id: 'id',
    summaryNoData: 'Data tidak ditemukan',
    value: { id: 3, name: 'Data 3' },
  },
};

export const Multiselect: Story = {
  args: {
    placeholder: 'Cari data',
    data: [
      {
        id: 1,
        name: 'Data 1',
      },
      {
        id: 2,
        name: 'Data 2',
      },
      {
        id: 3,
        name: 'Data 3',
      },
      {
        id: 4,
        name: 'Data 4',
      },
      {
        id: 5,
        name: 'Data 5',
      },
      {
        id: 6,
        name: 'Data 6',
      },
    ],
    text: 'name',
    id: 'id',
    summaryNoData: 'Data tidak ditemukan',
    multiSelect: true,
  },
};

export const ServerSide: Story = {
  args: {
    placeholder: 'Cari data',
    data: [],
    text: 'name',
    id: 'id',
    summaryNoData: 'Data tidak ditemukan',
    isServerSide: true,
    summaryBeforeLoad: 'Masukkan kata kunci ..',
  },
};
