import type { Meta, StoryObj } from '@storybook/react';

import Tab, {
  AmTabContent,
  AmTabContentItem,
  AmTabTitle,
  AmTabTitleList,
} from './Tab';
import React from 'react';

const meta = {
  title: 'Layout/Tab',
  component: Tab,
} satisfies Meta<typeof Tab>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <AmTabTitle>
        <AmTabTitleList value={'Tab 1'}>Tab 1</AmTabTitleList>
        <AmTabTitleList value={'Tab 2'}>Tab 2</AmTabTitleList>
        <AmTabTitleList value={'Tab 3'}>Tab 3</AmTabTitleList>
      </AmTabTitle>,
      <AmTabContent>
        <AmTabContentItem contentValue={'Tab 1'}>
          Content Tab 1
        </AmTabContentItem>
        <AmTabContentItem contentValue={'Tab 2'}>
          Content Tab 2
        </AmTabContentItem>
        <AmTabContentItem contentValue={'Tab 3'}>
          Content Tab 3
        </AmTabContentItem>
      </AmTabContent>,
    ],
    activeTab: 'Tab 1',
  },
};
