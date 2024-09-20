import React from 'react';
import {IBreadcrumb} from './Breadcrumb.types';
import {BreadcrumbArrow, BreadcrumbStyles, BreadcrumbText} from "./Breadcrumb.styles";

const BreadcrumbComponent: React.FC<IBreadcrumb> = ({
  nodes,
  active,
}) => {
  return (
    <BreadcrumbStyles>
      {nodes?.map((value, index) => (
          <>
            {index > 0 && index < nodes?.length && (
                <BreadcrumbArrow key={`breadcrumbArrow${index}`}></BreadcrumbArrow>
            )}
          <BreadcrumbText key={`breadcrumb${index}`} $isActive={value === active}>{value}</BreadcrumbText>
          </>
      ))}
    </BreadcrumbStyles>
  );
};

BreadcrumbComponent.displayName = 'AmBreadcrumb';
export default BreadcrumbComponent;
