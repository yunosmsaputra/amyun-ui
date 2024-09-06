import type { Meta, StoryObj } from '@storybook/react';

import Sidebar, {
  AmSidebarAppIcon,
  AmSideBarAppIconMain,
  AmSidebarAppIconMini,
  AmSidebarMenu,
  AmSideBarMenuChild,
  AmSideBarMenuChildItem,
  AmSideBarMenuIcon,
  AmSideBarMenuIconActive,
  AmSideBarMenuIconState,
  AmSideBarMenuText,
} from './Sidebar';
import React from 'react';

const meta = {
  title: 'Layout/Sidebar',
  component: Sidebar,
  argTypes: {
    children: {
      table: { disable: true },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'For use router in sidemenu use function <b>onClick()</b> on tag <i>AmSidebarMenu</i>',
      },
    },
  },
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <AmSidebarAppIcon>
        <AmSideBarAppIconMain>
          <img
            alt={''}
            src={
              'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Logo_PLN.svg/2560px-Logo_PLN.svg.png'
            }
            style={{ maxHeight: '46px' }}
          />
        </AmSideBarAppIconMain>
        <AmSidebarAppIconMini>
          <img
            alt={''}
            src={
              'https://upload.wikimedia.org/wikipedia/commons/9/97/Logo_PLN.png'
            }
            width={'32px'}
            height={'46px'}
          />
        </AmSidebarAppIconMini>
      </AmSidebarAppIcon>,
      <AmSidebarMenu
        menuIndex={'dashboard'}
        onClick={() => {
          {
            /* This is a primary button */
          }
        }}
      >
        <AmSideBarMenuIcon>
          <AmSideBarMenuIconState>
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
          </AmSideBarMenuIconState>
          <AmSideBarMenuIconActive>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9 19V13C9 12.7348 8.89464 12.4804 8.70711 12.2929C8.51957 12.1054 8.26522 12 8 12H4C3.73478 12 3.48043 12.1054 3.29289 12.2929C3.10536 12.4804 3 12.7348 3 13V19C3 19.2652 3.10536 19.5196 3.29289 19.7071C3.48043 19.8946 3.73478 20 4 20M9 19C9 19.2652 8.89464 19.5196 8.70711 19.7071C8.51957 19.8946 8.26522 20 8 20H4M9 19C9 19.2652 9.10536 19.5196 9.29289 19.7071C9.48043 19.8946 9.73478 20 10 20H14C14.2652 20 14.5196 19.8946 14.7071 19.7071C14.8946 19.5196 15 19.2652 15 19M9 19V9C9 8.73478 9.10536 8.48043 9.29289 8.29289C9.48043 8.10536 9.73478 8 10 8H14C14.2652 8 14.5196 8.10536 14.7071 8.29289C14.8946 8.48043 15 8.73478 15 9V19M4 20H18M15 19C15 19.2652 15.1054 19.5196 15.2929 19.7071C15.4804 19.8946 15.7348 20 16 20H20C20.2652 20 20.5196 19.8946 20.7071 19.7071C20.8946 19.5196 21 19.2652 21 19V5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H16C15.7348 4 15.4804 4.10536 15.2929 4.29289C15.1054 4.48043 15 4.73478 15 5V19Z"
                stroke="#2671D9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </AmSideBarMenuIconActive>
        </AmSideBarMenuIcon>
        <AmSideBarMenuText>Dashboard</AmSideBarMenuText>
      </AmSidebarMenu>,
      <AmSidebarMenu menuIndex={'master'}>
        <AmSideBarMenuIcon>
          <AmSideBarMenuIconState>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
            >
              <path
                d="M1 4C1 4.79565 1.84285 5.55871 3.34315 6.12132C4.84344 6.68393 6.87827 7 9 7C11.1217 7 13.1566 6.68393 14.6569 6.12132C16.1571 5.55871 17 4.79565 17 4C17 3.20435 16.1571 2.44129 14.6569 1.87868C13.1566 1.31607 11.1217 1 9 1C6.87827 1 4.84344 1.31607 3.34315 1.87868C1.84285 2.44129 1 3.20435 1 4Z"
                stroke="#697586"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 4V10C1 10.7956 1.84285 11.5587 3.34315 12.1213C4.84344 12.6839 6.87827 13 9 13C11.1217 13 13.1566 12.6839 14.6569 12.1213C16.1571 11.5587 17 10.7956 17 10V4"
                stroke="#697586"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 10V16C1 16.7956 1.84285 17.5587 3.34315 18.1213C4.84344 18.6839 6.87827 19 9 19C11.1217 19 13.1566 18.6839 14.6569 18.1213C16.1571 17.5587 17 16.7956 17 16V10"
                stroke="#697586"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </AmSideBarMenuIconState>
          <AmSideBarMenuIconActive>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
            >
              <path
                d="M1 4C1 4.79565 1.84285 5.55871 3.34315 6.12132C4.84344 6.68393 6.87827 7 9 7C11.1217 7 13.1566 6.68393 14.6569 6.12132C16.1571 5.55871 17 4.79565 17 4C17 3.20435 16.1571 2.44129 14.6569 1.87868C13.1566 1.31607 11.1217 1 9 1C6.87827 1 4.84344 1.31607 3.34315 1.87868C1.84285 2.44129 1 3.20435 1 4Z"
                stroke="#2671d9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 4V10C1 10.7956 1.84285 11.5587 3.34315 12.1213C4.84344 12.6839 6.87827 13 9 13C11.1217 13 13.1566 12.6839 14.6569 12.1213C16.1571 11.5587 17 10.7956 17 10V4"
                stroke="#2671d9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 10V16C1 16.7956 1.84285 17.5587 3.34315 18.1213C4.84344 18.6839 6.87827 19 9 19C11.1217 19 13.1566 18.6839 14.6569 18.1213C16.1571 17.5587 17 16.7956 17 16V10"
                stroke="#2671d9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </AmSideBarMenuIconActive>
        </AmSideBarMenuIcon>
        <AmSideBarMenuText>Master</AmSideBarMenuText>
        <AmSideBarMenuChild>
          <AmSideBarMenuChildItem menuIndex={'master-unit'}>
            Unit
          </AmSideBarMenuChildItem>
          <AmSideBarMenuChildItem menuIndex={'master-user'}>
            User
          </AmSideBarMenuChildItem>
        </AmSideBarMenuChild>
      </AmSidebarMenu>,
      <AmSidebarMenu
        menuIndex={'monitoring'}
        onClick={() => {
          {
            /* This is a primary button */
          }
        }}
      >
        <AmSideBarMenuIcon>
          <AmSideBarMenuIconState>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M7 20.7437H17M9 16.7437V20.7437M15 16.7437V20.7437M3 5.74365C3 5.47844 3.10536 5.22408 3.29289 5.03655C3.48043 4.84901 3.73478 4.74365 4 4.74365H20C20.2652 4.74365 20.5196 4.84901 20.7071 5.03655C20.8946 5.22408 21 5.47844 21 5.74365V15.7437C21 16.0089 20.8946 16.2632 20.7071 16.4508C20.5196 16.6383 20.2652 16.7437 20 16.7437H4C3.73478 16.7437 3.48043 16.6383 3.29289 16.4508C3.10536 16.2632 3 16.0089 3 15.7437V5.74365Z"
                stroke="#697586"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </AmSideBarMenuIconState>
          <AmSideBarMenuIconActive>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M7 20.7437H17M9 16.7437V20.7437M15 16.7437V20.7437M3 5.74365C3 5.47844 3.10536 5.22408 3.29289 5.03655C3.48043 4.84901 3.73478 4.74365 4 4.74365H20C20.2652 4.74365 20.5196 4.84901 20.7071 5.03655C20.8946 5.22408 21 5.47844 21 5.74365V15.7437C21 16.0089 20.8946 16.2632 20.7071 16.4508C20.5196 16.6383 20.2652 16.7437 20 16.7437H4C3.73478 16.7437 3.48043 16.6383 3.29289 16.4508C3.10536 16.2632 3 16.0089 3 15.7437V5.74365Z"
                stroke="#2671d9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </AmSideBarMenuIconActive>
        </AmSideBarMenuIcon>
        <AmSideBarMenuText>Monitoring</AmSideBarMenuText>
      </AmSidebarMenu>,
    ],
  },
};
