import React from 'react';

export interface ITable extends React.PropsWithChildren {
  column?: any[];
  style?: React.CSSProperties;
  columnSort?: (key: string, type: string) => void;
  data?: any[];
  isStickyColumn?: boolean;
  className?: string;
  onClickRow?: (row: any) => void;
  fixedHeader?: boolean;
  tableHeight?: number;
}
