import type { Meta, StoryObj } from '@storybook/react';

import Sidebar from './Sidebar';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import React from 'react';
import Avatar from '../Avatar/Avatar';
import Flex from '../Flex/Flex';
import Text from '../Text/Text';

const meta = {
  title: 'Layout/Sidebar',
  component: Sidebar,
  argTypes: {
    children: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <Breadcrumb
        active="Detail"
        icon="ic-arrow-right"
        nodes={['Dashboard', 'Detail']}
      />,
      <Flex alignItems={'center'} gap={8}>
        <Avatar color="#9deeb9" size="medium">
          JD
        </Avatar>
        <Text color="#333333" size={14} weight="semibold">
          John Doe
        </Text>
      </Flex>,
    ],
  },
};
