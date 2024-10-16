import React from 'react';

export interface ITable extends React.PropsWithChildren {
  column?: any[];
  style?: React.CSSProperties;
  columnSort?: (key: string, type: string) => void;
  data?: any[];
  isStickyColumn?: boolean;
  className?: string;
  onClickRow?: (row: any) => void;
  horizontalScroll?: boolean;
  fixedHeader?: boolean;
  tableHeight?: number;
  withPagination?: boolean;
  summaryPagination?: {
    page?: number;
    totalData?: number;
    totalPages?: number;
    totalShowData?: number;
  };
  onChangePage?: (page: number) => void;
  onChangeDataSize?: (size: number) => void;
  withSearch?: boolean;
  summarySearch?: {
    placeholder?: string;
    defaultSelected?: string;
    listSearch?: any[];
    popupWidth?: string;
  };
  onChangeOptionsFilter?: (selectedFilterOptions: any) => void;
  onChangeSearch?: (search: string) => void;
  onSearch?: () => void;
}

export interface ITableFooter extends React.PropsWithChildren {
  className?: string;
}
