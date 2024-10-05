import React, { useState } from 'react';
import { ITable } from './Table.types';
import Text from '../Text/Text';
import Flex from '../Flex/Flex';
import Icon from '../Icon/Icon';
import '../index.css';
import { TableContainer } from './Table.styles';
import PaginationComponent from "../Pagination/Pagination";
import {neutralColorLib} from "../color";
import SelectBox from "../SelectBox/SelectBox";
import Box from "../Box/Box";

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
  style,
  withPagination = false,
  summaryPagination,
  onChangePage,
  onChangeDataSize
}) => {
  const [sort, setSort] = useState<any>({
    key: '',
    type: 'asc',
  });

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

  const handleChangePage = (page: number) => {
    onChangePage && onChangePage(page)
  }

  const handleChangeDataSize = (e: any) => {
    onChangeDataSize && onChangeDataSize(e.target.value)
  }

  return (
    <>
    <TableContainer
      className={className}
      $fixedHeader={fixedHeader}
      $tableHeight={tableHeight}
      style={style}
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
                    {value.title}
                  </Text>
                  {value.sort ? (
                    <Icon
                      color="#333"
                      name={`${value.key === sort.key ? (sort.type === 'asc' ? 'sorting-ascend' : 'sorting-descend') : 'sort-inactive'}`}
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
                      onClick={() => {
                        val.clickRow && handleClickRow(value);
                      }}
                    >
                      {val.render ? val.render(value) : value[val.key]}
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
      {withPagination && (
        <Flex justifyContent={'space-between'} alignItems={'center'} style={{marginTop: '12px'}}>
          <Flex gap={6} alignItems={'center'}>
            <Text size={12} color={neutralColorLib.black}>Menampilkan</Text>
            {
              // @ts-ignore
              (summaryPagination?.totalData > summaryPagination?.totalShowData) && (
              <>
                <Box width={56}>
                  <SelectBox options={['10', '20', '25', '50', '100']} value={'10'} size={'sm'} onChange={handleChangeDataSize}></SelectBox>
                </Box>
                <Text size={12} color={neutralColorLib.black}>dari</Text>
              </>
            )}
            <Text weight={'semibold'} size={12} color={neutralColorLib.black}>{summaryPagination?.totalData}</Text>
            <Text size={12} color={neutralColorLib.black}>Data</Text>
          </Flex>
          <PaginationComponent totalPage={summaryPagination?.totalPages} onChange={(page) => {handleChangePage(page)}}></PaginationComponent>
        </Flex>
      )}
    </>
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