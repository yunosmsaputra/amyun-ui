import React from 'react';

export interface ITable {
  column?: any[];
  style?: React.CSSProperties;
  columnSort?: (key: string, type: string) => void;
  data?: any[];
  className?: string;
}
