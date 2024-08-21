import {
  TabContent,
  TabTitle,
  TabTitleList,
  TabTitleListActive,
} from './Tab.styles';
import React from 'react';
import {
  IAmTab,
  IAmTabContent,
  IAmTabContentItem,
  IAmTabTitle,
  IAmTabTitleList,
} from './Tab.types';

const AmTab: React.FC<IAmTab> = ({ children = '', activeTab = 'Tab 1' }) => {
  return (
    <>
      {React.Children.map(children, (child) => {
        return React.isValidElement(child)
          ? // @ts-ignore
            React.cloneElement(child, { activeTab })
          : child;
      })}
    </>
  );
};

export const AmTabTitle: React.FC<IAmTabTitle> = ({ children, activeTab }) => {
  return (
    <TabTitle>
      {React.Children.map(children, (child) => {
        return React.isValidElement(child)
          ? // @ts-ignore
            React.cloneElement(child, { activeTab })
          : child;
      })}
    </TabTitle>
  );
};

export const AmTabTitleList: React.FC<IAmTabTitleList> = ({
  value,
  activeTab,
  children,
}) => {
  return activeTab === value ? (
    <TabTitleListActive>{children}</TabTitleListActive>
  ) : (
    <TabTitleList>{children}</TabTitleList>
  );
};

export const AmTabContent: React.FC<IAmTabContent> = ({
  children,
  activeTab,
}) => {
  return (
    <TabContent>
      {React.Children.map(children, (child) => {
        return React.isValidElement(child)
          ? // @ts-ignore
            React.cloneElement(child, { activeTab })
          : child;
      })}
    </TabContent>
  );
};

export const AmTabContentItem: React.FC<IAmTabContentItem> = ({
  children,
  contentValue,
  activeTab,
}) => {
  return <>{activeTab === contentValue && children}</>;
};

export default AmTab;
