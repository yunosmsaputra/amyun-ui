import React from 'react';
import { ISidebar } from './Sidebar.types';

const SidebarComponent: React.FC<ISidebar> = ({ children }) => {
  const styles = {
    sidebar: {
      background: '#FFFFFF',
      padding: '12px 24px 12px 16px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #F0F3F7',
    },
  };
  return <div style={styles.sidebar}>{React.Children.toArray(children)}</div>;
};

SidebarComponent.displayName = 'AmSidebar';
export default SidebarComponent;
