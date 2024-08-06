import { IChip } from './Chip.types';
import React from 'react';

const ChipComponent: React.FC<IChip> = ({ type, size, children }) => {
  const styles = {
    chip: {
      display: 'inline-block',
      background:
        type === 'primary'
          ? '#E9F1FB'
          : type === 'success'
            ? '#E7F6F1'
            : type === 'danger'
              ? '#FFEEEE'
              : type === 'warning'
                ? '#FEF3E5'
                : '#E9F1FB',
      borderRadius: '100px',
      padding: size === 'lg' ? '6px 8px' : '4px 6px',
      border: `1px solid ${type === 'primary' ? '#BAD1F3' : type === 'success' ? '#BCE7D8' : type === 'danger' ? '#FFD0D0' : type === 'warning' ? '#FBDEB7' : '#BAD1F3'}`,
      color:
        type === 'primary'
          ? '#2671D9'
          : type === 'success'
            ? '#138A63'
            : type === 'danger'
              ? '#FF5656'
              : type === 'warning'
                ? '#F08800'
                : '#2671D9',
      textTransform: 'capitalize' as 'capitalize',
      fontWeight: '600',
      fontSize: size === 'sm' ? '10px' : size === 'md' ? '12px' : '14px',
    },
  };
  return <div style={styles.chip}>{children}</div>;
};
ChipComponent.displayName = 'AmChip';
export default ChipComponent;
