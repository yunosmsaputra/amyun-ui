import React from 'react';

export interface IAmTab extends React.PropsWithChildren {
  activeTab?: string;
}

export interface IAmTabTitle extends IAmTab {}

export interface IAmTabTitleList extends IAmTab {
  value?: string;
}

export interface IAmTabContent extends IAmTab {}

export interface IAmTabContentItem extends IAmTab {
  contentValue?: string;
}
