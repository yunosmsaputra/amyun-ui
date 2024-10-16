import { LoadingContainerStyles, LoadingStyles } from './Loading.styles';
import React from 'react';

const LoadingComponent = () => {
  return (
    <LoadingStyles>
      <LoadingContainerStyles></LoadingContainerStyles>
    </LoadingStyles>
  );
};

LoadingComponent.displayName = 'AmLoading';
export default LoadingComponent;
