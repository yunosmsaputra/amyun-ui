import React from 'react';
import { IBreadcrumb } from './Breadcrumb.types';
import Icon from '../Icon/Icon';

const BreadcrumbComponent: React.FC<IBreadcrumb> = ({
  nodes,
  icon,
  active,
}) => {
  const styles = {
    breadcrumb: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '12px',
      color: '#333333',
    },
  };

  const breadcrumbReturn = (value: any, index: any) => {
    return (
      <div
        key={`list${index}`}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        {index > 0 && <Icon color="#9C9C9C" name={icon} size={12}></Icon>}
        <div
          style={{
            marginLeft: index > 0 ? '4px' : '0',
            marginRight: index === 0 ? '4px' : '0',
            fontWeight: value === active ? 600 : 400,
            color: active === value ? '#2671D9' : '#333333',
          }}
        >
          {value}
        </div>
      </div>
    );
  };
  return (
    <div style={styles.breadcrumb}>
      {nodes?.map((value, index) => breadcrumbReturn(value, index))}
    </div>
  );
};

BreadcrumbComponent.displayName = 'AmBreadcrumb';
export default BreadcrumbComponent;
