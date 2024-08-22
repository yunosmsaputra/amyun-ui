import type { Meta, StoryObj } from '@storybook/react';

import Breadcrumb from '../Breadcrumb/Breadcrumb';
import React from 'react';
import Navbar from './Navbar';
import { AmAvatar, AmButton, AmFlex, AmText } from '../index';

const meta = {
  title: 'Layout/Navbar',
  component: Navbar,
  argTypes: {
    children: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <Breadcrumb
        active="Detail"
        icon="ic-arrow"
        nodes={['Dashboard', 'Detail']}
        key={'breadcrumb'}
      />,
      <AmButton
        type={'nude'}
        key={'button'}
        popup
        popupActionList={[
          <AmText
            onClick={() => {
              console.log('logout');
            }}
          >
            Logout
          </AmText>,
        ]}
      >
        <AmFlex alignItems={'center'} gap={8}>
          <AmAvatar size={'medium'} color={'#C7E5D7'} style={{ color: '#333' }}>
            JD
          </AmAvatar>
          <AmText color={'#333'} size={14} weight={'semibold'}>
            John Doe
          </AmText>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <rect width="16" height="16" rx="8" fill="#E5E7E9" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.13743 9.84196C7.92622 10.0532 7.58378 10.0532 7.37257 9.84196L4.66841 7.13779C4.4572 6.92658 4.4572 6.58415 4.66841 6.37294C4.87962 6.16173 5.22205 6.16173 5.43326 6.37294L7.755 8.69468L10.0767 6.37294C10.2879 6.16173 10.6304 6.16173 10.8416 6.37294C11.0528 6.58415 11.0528 6.92658 10.8416 7.13779L8.13743 9.84196Z"
              fill="#2671D9"
            />
          </svg>
        </AmFlex>
      </AmButton>,
    ],
  },
};
