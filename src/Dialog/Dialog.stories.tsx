import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import {
  AmButton,
  AmDialogActions,
  AmDialogContent,
  AmDialogTitle,
  AmText,
} from '../index';
import DialogComponent from './Dialog';

const meta = {
  title: 'Layout/Dialog',
  component: DialogComponent,
  argTypes: {
    children: {
      table: { disable: true },
    },
    width: {
      description: 'Define width dialog',
    },
    expandable: {
      description: 'Set for expandable left dialog',
    },
  },
} satisfies Meta<typeof DialogComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: '540px',
    onClose: () => {},
    children: [
      <AmDialogTitle>
        <AmText size={20} weight={'semibold'}>
          Dialog Title
        </AmText>
      </AmDialogTitle>,
      <AmDialogContent>
        <AmText size={16} color={'#333'}>
          Dialog Content
        </AmText>
      </AmDialogContent>,
      <AmDialogActions>
        <AmButton color={'blue'} type={'fill'}>
          Simpan
        </AmButton>
      </AmDialogActions>,
    ],
    isShow: true,
  },
};

export const Expandable: Story = {
  args: {
    width: '540px',
    onClose: () => {},
    children: [
      <AmDialogTitle>
        <AmText size={20} weight={'semibold'}>
          Dialog Title
        </AmText>
      </AmDialogTitle>,
      <AmDialogContent>
        <AmText size={16} color={'#333'}>
          Dialog Content
        </AmText>
      </AmDialogContent>,
      <AmDialogActions>
        <AmButton color={'blue'} type={'fill'}>
          Simpan Data
        </AmButton>
      </AmDialogActions>,
    ],
    expandable: true,
    isShow: true,
  },
};

export const Confirmation: Story = {
  args: {
    type: 'confirmation',
    zIndex: 102,
    height: '200px',
    children: [
      <AmDialogTitle>
        <AmText size={16} weight={'semibold'}>
          Delete Data?
        </AmText>
      </AmDialogTitle>,
      <AmDialogContent>
        <AmText size={14}>Apakah yakin akan menghapus data?</AmText>
      </AmDialogContent>,
      <AmDialogActions>
        <AmButton color={'blue'} type={'outline'}>
          Batal
        </AmButton>
        <AmButton color={'red'} type={'fill'}>
          Hapus
        </AmButton>
      </AmDialogActions>,
    ],
  },
};

export const WithButtonEdit: Story = {
  args: {
    width: '540px',
    onClose: () => {},
    children: [
      <AmDialogTitle withButtonEdit onEdit={() => {}}>
        <AmText size={20} weight={'semibold'}>
          Dialog Title
        </AmText>
      </AmDialogTitle>,
      <AmDialogContent>
        <AmText size={16} color={'#333'}>
          Dialog Content
        </AmText>
      </AmDialogContent>,
      <AmDialogActions>
        <AmButton color={'blue'} type={'fill'}>
          Simpan
        </AmButton>
      </AmDialogActions>,
    ],
    isShow: true,
  },
};
