import {
  TabContent,
  TabStyle,
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

const AmTab: React.FC<IAmTab> = ({
  children = '',
  activeTab = 'Tab 1',
  className,
}) => {
  return (
    <TabStyle className={className}>
      {React.Children.map(children, (child) => {
        return React.isValidElement(child)
          ? // @ts-ignore
            React.cloneElement(child, { activeTab })
          : child;
      })}
    </TabStyle>
  );
};

export const AmTabTitle: React.FC<IAmTabTitle> = ({
  children,
  activeTab,
  className,
}) => {
  return (
    <TabTitle className={className}>
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
  onClick,
  children,
  className,
}) => {
  return activeTab === value ? (
    <TabTitleListActive className={className}>{children}</TabTitleListActive>
  ) : (
    <TabTitleList className={className} onClick={onClick}>
      {children}
    </TabTitleList>
  );
};

export const AmTabContent: React.FC<IAmTabContent> = ({
  children,
  activeTab,
  className,
}) => {
  return (
    <TabContent className={className}>
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
  className,
}) => {
  return (
    <div className={className}>{activeTab === contentValue && children}</div>
  );
};

export default AmTab;
