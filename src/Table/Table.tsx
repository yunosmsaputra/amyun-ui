import React, { useState } from 'react';
import { ITable } from './Table.types';
import Text from '../Text/Text';
import Flex from '../Flex/Flex';
import Icon from '../Icon/Icon';
import '../index.css';
import { TableContainer } from './Table.styles';

const TableComponent: React.FC<ITable> = ({ column, style, columnSort, data, className }) => {
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
            value.key !== oldVal.key ? 'asc' : sort.type === 'asc' ? 'desc' : 'asc',
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
              <th key={`index${index}`} onClick={() => onSort(value)}>
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
          data?.map((value, index) => (
            <tr>
              {column?.map((val, idx) => (
                  <td>{value[val.key]}</td>
              ))}
            </tr>
        ))}
        </tbody>
      </table>
    </TableContainer>
  );
};

TableComponent.displayName = 'AmTable';
export default TableComponent;
