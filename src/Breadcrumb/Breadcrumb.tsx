import React from 'react';
import { IBreadcrumb } from './Breadcrumb.types';
import {
  BreadcrumbArrow,
  BreadcrumbStyles,
  BreadcrumbText,
} from './Breadcrumb.styles';

const BreadcrumbComponent: React.FC<IBreadcrumb> = ({ nodes, active, className }) => {
  return (
    <BreadcrumbStyles className={className}>
      {nodes?.map((value, index) => (
        <BreadcrumbStyles key={`breadcrumbArrow${index}`}>
          {index > 0 && index < nodes?.length && (
            <BreadcrumbArrow></BreadcrumbArrow>
          )}
          <BreadcrumbText
            $isActive={value === active}
          >
            {value}
          </BreadcrumbText>
        </BreadcrumbStyles>
      ))}
    </BreadcrumbStyles>
  );
};

BreadcrumbComponent.displayName = 'AmBreadcrumb';
export default BreadcrumbComponent;
