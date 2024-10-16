import React from 'react';

export interface IFileInput {
  maxFileSize?: number;
  onChange?: (file: any) => void;
  style?: React.CSSProperties;
}
