import type { Meta, StoryObj } from '@storybook/react';

import FileInput from './FileInput';

const meta = {
  title: 'Form Component/File Input',
  component: FileInput,
  argTypes: {
    maxFileSize: {
      description: 'Max file size allowed to upload (input in <b>KB</b>)',
    },
    style: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof FileInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
