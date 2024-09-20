import React from 'react';

export interface IAmTab extends React.PropsWithChildren {
  activeTab?: string;
  className?: string;
}

export interface IAmTabTitle extends IAmTab {
}

export interface IAmTabTitleList extends IAmTab {
  value?: string;
  onClick?: () => void;
}

export interface IAmTabContent extends IAmTab {
}

export interface IAmTabContentItem extends IAmTab {
  contentValue?: string;
}
