import type { Meta, StoryObj } from '@storybook/react';

import Sidebar, {
  AmSidebarAppIcon,
  AmSidebarMenu,
  AmSideBarMenuIcon,
  AmSideBarMenuText,
} from './Sidebar';
import React from 'react';
import { AmIcon, AmText } from '../index';
import { neutralColorLib } from '../color';

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
    logoMini:
      'https://upload.wikimedia.org/wikipedia/commons/9/97/Logo_PLN.png',
    logoMain:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Logo_PLN.svg/2560px-Logo_PLN.svg.png',
    children: [
      <AmSidebarAppIcon></AmSidebarAppIcon>,
      <AmSidebarMenu menuIndex={'dashboard'}>
        <AmSideBarMenuIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9 19V13C9 12.7348 8.89464 12.4804 8.70711 12.2929C8.51957 12.1054 8.26522 12 8 12H4C3.73478 12 3.48043 12.1054 3.29289 12.2929C3.10536 12.4804 3 12.7348 3 13V19C3 19.2652 3.10536 19.5196 3.29289 19.7071C3.48043 19.8946 3.73478 20 4 20M9 19C9 19.2652 8.89464 19.5196 8.70711 19.7071C8.51957 19.8946 8.26522 20 8 20H4M9 19C9 19.2652 9.10536 19.5196 9.29289 19.7071C9.48043 19.8946 9.73478 20 10 20H14C14.2652 20 14.5196 19.8946 14.7071 19.7071C14.8946 19.5196 15 19.2652 15 19M9 19V9C9 8.73478 9.10536 8.48043 9.29289 8.29289C9.48043 8.10536 9.73478 8 10 8H14C14.2652 8 14.5196 8.10536 14.7071 8.29289C14.8946 8.48043 15 8.73478 15 9V19M4 20H18M15 19C15 19.2652 15.1054 19.5196 15.2929 19.7071C15.4804 19.8946 15.7348 20 16 20H20C20.2652 20 20.5196 19.8946 20.7071 19.7071C20.8946 19.5196 21 19.2652 21 19V5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H16C15.7348 4 15.4804 4.10536 15.2929 4.29289C15.1054 4.48043 15 4.73478 15 5V19Z"
              stroke="#697586"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </AmSideBarMenuIcon>
        <AmSideBarMenuText>Dashboard</AmSideBarMenuText>
      </AmSidebarMenu>,
    ],
  },
};
