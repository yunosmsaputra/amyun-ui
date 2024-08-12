import React, { useEffect, useRef, useState } from 'react';
import { ITable } from './Table.types';
import Text from '../Text/Text';
import Flex from '../Flex/Flex';
import Icon from '../Icon/Icon';
import '../index.css';
import { TableContainer } from './Table.styles';

export const TableComponent: React.FC<ITable> = ({
  column,
  columnSort,
  data,
  className,
  children,
  isStickyColumn,
  onClickRow,
  fixedHeader = false,
  tableHeight = 500,
}) => {
  const [sort, setSort] = useState<any>({
    key: '',
    type: 'asc',
  });
  const noDataRef = useRef<HTMLDivElement>();

  const onSort = (value: any) => {
    if (value.sort) {
      const oldVal = {
        ...sort,
      };
      setSort({
        key: value.key,
        type:
          value.key !== oldVal.key
            ? 'asc'
            : sort.type === 'asc'
              ? 'desc'
              : 'asc',
      });
      columnSort?.(value.key, sort.type);
    }
  };

  const handleClickRow = (value: any) => {
    onClickRow && onClickRow(value);
  };

  return (
    <TableContainer
      className={className}
      $fixedHeader={fixedHeader}
      $tableHeight={tableHeight}
    >
      <table>
        <thead>
          <tr>
            {column?.map((value, index) => (
              <th
                key={`index${index}`}
                onClick={() => onSort(value)}
                style={
                  isStickyColumn
                    ? {
                        minWidth: value.width ? value.width : 0,
                        position: value.sticky ? 'sticky' : 'unset',
                        left: value.left ? value.left : 'unset',
                        right: value.right ? value.right : 'unset',
                      }
                    : { width: value.width ? `${value.width}px` : 'auto' }
                }
              >
                <Flex
                  justifyContent={'space-between'}
                  alignItems={'center'}
                  className={'th-cell-text'}
                >
                  <Text color="#5979A6" size={12} weight="semibold">
                    {value.title.toLowerCase()}
                  </Text>
                  {value.sort ? (
                    <Icon
                      color="#333"
                      name={`${value.key === sort.key ? (sort.type === 'asc' ? 'ic-sort-ascending' : 'ic-sort-descending') : 'ic-sort-default'}`}
                      size={14}
                    ></Icon>
                  ) : (
                    <></>
                  )}
                </Flex>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {
            //@ts-ignore
            data?.length > 0 ? (
              data?.map((value, index) => (
                <tr
                  key={`index-row-${index}`}
                  onClick={() => handleClickRow(value)}
                >
                  {column?.map((val, idx) => (
                    <td
                      key={`index-column-${idx}`}
                      style={{
                        position: val.sticky ? 'sticky' : 'unset',
                        left: val.left ? val.left : 'unset',
                        right: val.right ? val.right : 'unset',
                      }}
                    >
                      {val.render ? val.render(value[val.key]) : value[val.key]}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={column?.length} className={'no-data'}>
                  No Data to displayed
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </TableContainer>
  );
};

TableComponent.displayName = 'AmTable';
export default TableComponent;

export const NoDataComponent: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <div>{children}</div>;
};

NoDataComponent.displayName = 'AmTableNoData';

export const WithPagination: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <>{children}</>;
};

WithPagination.displayName = 'AmTablePagination';
