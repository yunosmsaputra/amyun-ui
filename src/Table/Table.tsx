import React, { useState } from 'react';
import { ITable, ITableFooter } from './Table.types';
import Text from '../Text/Text';
import TextComponent from '../Text/Text';
import Flex from '../Flex/Flex';
import Icon from '../Icon/Icon';
import IconComponent from '../Icon/Icon';
import '../index.css';
import {
  TableContainer,
  TableFooterStyles,
  TableSearchInput,
  TableSearchOptions,
  TableSearchPopupListStyles,
  TableSearchPopupStyles,
  TableSearchStyles,
  TableStyles,
  TableThStyle,
} from './Table.styles';
import PaginationComponent from '../Pagination/Pagination';
import { blueColorLib, neutralColorLib } from '../color';
import SelectBox from '../SelectBox/SelectBox';
import Box from '../Box/Box';

export const TableComponent: React.FC<ITable> = ({
  column,
  columnSort,
  data,
  className,
  children,
  isStickyColumn,
  onClickRow,
  fixedHeader = false,
  horizontalScroll,
  tableHeight = 500,
  style,
  withPagination = false,
  summaryPagination,
  onChangePage,
  onChangeDataSize,
  withSearch,
  summarySearch = {
    placeholder: 'Cari sesuatu',
    defaultSelected: 'Semua',
    popupWidth: '74px',
  },
  onChangeOptionsFilter,
  onChangeSearch,
  onSearch,
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
    onChangePage && onChangePage(page);
  };

  const handleChangeDataSize = (e: any) => {
    onChangeDataSize && onChangeDataSize(e.target.value);
  };

  const [showPopupFilter, setShowPopupFilter] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<any>();
  const handleSelectedFilter = (value: any) => {
    setSelectedFilter(value);
    setShowPopupFilter(false);
    onChangeOptionsFilter && onChangeOptionsFilter(value);
  };
  const handleChangeSearch = (e: any) => {
    onChangeSearch && onChangeSearch(e.target.value);
  };

  const handleClickSearch = () => {
    onSearch && onSearch();
  };
  const handleKeypress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch && onSearch();
    }
  };
  const childFooter = React.Children.toArray(children).every(
    (child) =>
      //@ts-ignore
      React.isValidElement(child) && child.type.name === 'AmTableFooter',
  );
  console.log(childFooter);

  return (
    <TableStyles>
      {withSearch && (
        <div style={{ position: 'relative' }}>
          <TableSearchStyles>
            <TableSearchOptions
              onClick={() => {
                setShowPopupFilter(!showPopupFilter);
              }}
            >
              <TextComponent
                size={12}
                weight={'semibold'}
                color={neutralColorLib.black}
                style={{ lineHeight: '16px' }}
              >
                {selectedFilter
                  ? selectedFilter.value
                  : summarySearch?.defaultSelected}
              </TextComponent>
              <IconComponent
                name={'chevron-down'}
                size={14}
                color={neutralColorLib.textField}
                style={{
                  transform: `${showPopupFilter ? 'rotate(180deg)' : 'rotate(0deg)'}`,
                }}
              ></IconComponent>
            </TableSearchOptions>
            <TableSearchInput
              placeholder={summarySearch?.placeholder}
              onChange={handleChangeSearch}
              onKeyDown={handleKeypress}
            ></TableSearchInput>
            <IconComponent
              name={'search'}
              color={blueColorLib.main}
              size={12}
              style={{ padding: '10px 0 8px 0', cursor: 'pointer' }}
              onClick={() => {
                handleClickSearch();
              }}
            />
          </TableSearchStyles>
          {showPopupFilter && (
            <TableSearchPopupStyles $popupWidth={summarySearch.popupWidth}>
              {summarySearch?.listSearch?.map((value, index) => (
                <TableSearchPopupListStyles
                  key={`listPopupfilter${index}`}
                  onClick={() => {
                    handleSelectedFilter(value);
                  }}
                >
                  {value.value}
                </TableSearchPopupListStyles>
              ))}
            </TableSearchPopupStyles>
          )}
        </div>
      )}
      <TableContainer
        className={className}
        $fixedHeader={fixedHeader}
        $tableHeight={tableHeight}
        $stickyColumn={isStickyColumn}
        $horizontalScroll={horizontalScroll}
        style={style}
      >
        <table>
          <thead>
            <tr>
              {column?.map((value, index) => (
                <TableThStyle
                  $sticky={isStickyColumn}
                  $horizontalScroll={horizontalScroll}
                  $width={value.width ?? 0}
                  $position={value.sticky ? 'sticky' : 'unset'}
                  $left={value.left ?? 'unset'}
                  $right={value.right ?? 'unset'}
                  key={`index${index}`}
                  onClick={() => onSort(value)}
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
                </TableThStyle>
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
          {/*{*/}
          {/*  //@ts-ignore*/}
          {/*  React.Children.toArray(children).some((child) => React.isValidElement(child) && (child.type.displayName === 'AmTableFooter' || child.type.name === 'AmTableFooter')) && children}*/}
          {childFooter && children}
        </table>
      </TableContainer>
      {withPagination && (
        <Flex
          justifyContent={'space-between'}
          alignItems={'center'}
          style={{ marginTop: '12px' }}
        >
          <Flex gap={6} alignItems={'center'}>
            <Text size={12} color={neutralColorLib.black}>
              Menampilkan
            </Text>
            {
              // @ts-ignore
              summaryPagination?.totalData > 10 && (
                <>
                  <Box width={56}>
                    <SelectBox
                      options={['10', '20', '25', '50', '100']}
                      value={'10'}
                      size={'sm'}
                      onChange={handleChangeDataSize}
                    ></SelectBox>
                  </Box>
                  <Text size={12} color={neutralColorLib.black}>
                    dari
                  </Text>
                </>
              )
            }
            <Text weight={'semibold'} size={12} color={neutralColorLib.black}>
              {summaryPagination?.totalData}
            </Text>
            <Text size={12} color={neutralColorLib.black}>
              Data
            </Text>
          </Flex>
          <PaginationComponent
            activePage={summaryPagination?.page}
            totalPage={summaryPagination?.totalPages}
            onChange={(page) => {
              handleChangePage(page);
            }}
          ></PaginationComponent>
        </Flex>
      )}
    </TableStyles>
  );
};

TableComponent.displayName = 'AmTable';
export default TableComponent;

export const NoDataComponent: React.FC<ITableFooter> = ({
  children,
  className,
}) => {
  return <div className={className}>{children}</div>;
};

export const AmTableFooter: React.FC<ITableFooter> = ({
  children,
  className,
}) => {
  return (
    <TableFooterStyles className={className}>{children}</TableFooterStyles>
  );
};

NoDataComponent.displayName = 'AmTableNoData';
