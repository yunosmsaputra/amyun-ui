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
  pagination,
}) => {
  const [sort, setSort] = useState<any>({
    key: '',
    type: 'asc',
  });
  const noDataRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (noDataRef.current && typeof children === 'string') {
      const htmlString = children
        .split('<template-nodata>\n')[1]
        .split('\n</template-nodata>')[0];
      noDataRef.current.innerHTML = htmlString;
    }
  }, [children]);

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

  return (
    <TableContainer className={className}>
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
                <tr key={`index-row-${index}`}>
                  {column?.map((val, idx) => (
                    <td
                      key={`index-column-${idx}`}
                      style={{
                        position: val.sticky ? 'sticky' : 'unset',
                        left: val.left ? val.left : 'unset',
                        right: val.right ? val.right : 'unset',
                      }}
                    >
                      {val.render ? val.render() : value[val.key]}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={column?.length} className={'no-data'}>
                  {children ? children : 'No Data to displayed'}
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
      {pagination ? { children } : <></>}
    </TableContainer>
  );
};

TableComponent.displayName = 'AmTable';

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
