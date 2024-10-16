import {
  MonthPickerContainerStyles,
  MonthPickerPopupActions,
  MonthPickerPopupListMonthStyles,
  MonthPickerPopupMonthStyles,
  MonthPickerPopupSelectionButtonStyles,
  MonthPickerPopupSelectionContainerStyles,
  MonthPickerPopupStyles,
  MonthPickerPoupTitleStyles,
  MonthPickerStyles,
} from './MonthPicker.styles';
import { IMonthPicker } from './MonthPicker.types';
import React, { useEffect, useRef, useState } from 'react';
import IconComponent from '../Icon/Icon';
import { neutralColorLib } from '../color';
import { ButtonComponent } from '../Button';

const MonthPickerComponent: React.FC<IMonthPicker> = ({
  className,
  placeholder = 'Pilih Bulan',
  value,
  name,
  disabled,
  onChange,
  position = 'bottom-right',
  format = 'full',
}) => {
  const date = new Date();
  const [year, setYear] = useState<number>(date.getFullYear());
  const listYear = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Mei',
    'Jun',
    'Jul',
    'Ags',
    'Sep',
    'Okt',
    'Nov',
    'Des',
  ];
  const listYearFull = [
    'January',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];
  const [selectedMonth, setSelectedMonth] = useState<string>();
  const [showPopup, setShowPopup] = useState(false);
  const [valueMonth, setValueMonth] = useState<any | undefined>(undefined);
  const handleOpenPopup = () => {
    if (!disabled) {
      setShowPopup(!showPopup);
    }
  };
  const handleSelectMonth = () => {
    if (selectedMonth) {
      const params = {
        target: {
          name: name,
          value: {
            year: year,
            month: parseInt(selectedMonth.split('-')[1]),
          },
        },
      };
      onChange && onChange(params);
      setValueMonth(
        format === 'full'
          ? `${listYearFull[parseInt(selectedMonth.split('-')[1])]} ${year}`
          : `${listYear[parseInt(selectedMonth.split('-')[1])]} ${year}`,
      );
      setShowPopup(false);
    }
  };
  useEffect(() => {
    if (value) {
      setValueMonth(
        format === 'full'
          ? `${listYearFull[value.month]} ${value.year}`
          : `${listYear[value.month]} ${value.year}`,
      );
      setSelectedMonth(`${value.year}-${value.month}`);
    } else {
      setValueMonth(undefined);
      setSelectedMonth('');
    }
  }, [value]);
  const useClickOutside = (handler: any) => {
    const domNode = useRef();

    useEffect(() => {
      const maybeHandler = (event: any) => {
        // @ts-ignore
        if (!domNode.current.contains(event.target)) {
          handler();
        }
      };

      document.addEventListener('mousedown', maybeHandler);

      return () => {
        document.removeEventListener('mousedown', maybeHandler);
      };
    });

    return domNode;
  };
  const domNode = useClickOutside(() => {
    setShowPopup(false);
  });
  return (
    <MonthPickerStyles
      className={className}
      //@ts-ignore
      ref={domNode}
    >
      <MonthPickerContainerStyles
        $emptyValue={!valueMonth}
        $disabled={disabled}
        $onFocused={showPopup}
        onClick={() => {
          handleOpenPopup();
        }}
      >
        <IconComponent
          name={'calendar'}
          size={12}
          color={'#2671d9'}
        ></IconComponent>
        {valueMonth ?? placeholder}
      </MonthPickerContainerStyles>
      {showPopup && (
        <MonthPickerPopupStyles $position={position}>
          <MonthPickerPoupTitleStyles>
            {year}
            <MonthPickerPopupSelectionContainerStyles>
              <MonthPickerPopupSelectionButtonStyles
                onClick={() => {
                  setYear(year - 1);
                }}
              >
                <IconComponent
                  name={'chevron-left'}
                  size={12}
                  color={neutralColorLib.black}
                ></IconComponent>
              </MonthPickerPopupSelectionButtonStyles>
              <MonthPickerPopupSelectionButtonStyles
                onClick={() => {
                  setYear(year + 1);
                }}
              >
                <IconComponent
                  name={'chevron-right'}
                  size={12}
                  color={neutralColorLib.black}
                ></IconComponent>
              </MonthPickerPopupSelectionButtonStyles>
            </MonthPickerPopupSelectionContainerStyles>
          </MonthPickerPoupTitleStyles>
          <MonthPickerPopupListMonthStyles>
            {listYear.map((value, index) => (
              <MonthPickerPopupMonthStyles
                $active={selectedMonth === `${year}-${index}`}
                $monthNow={
                  `${year}${index}` ===
                  `${date.getFullYear()}${date.getMonth()}`
                }
                key={`monthLIst${index}`}
                onClick={() => {
                  setSelectedMonth(`${year}-${index}`);
                }}
              >
                {value}
              </MonthPickerPopupMonthStyles>
            ))}
          </MonthPickerPopupListMonthStyles>
          <MonthPickerPopupActions>
            <ButtonComponent
              type={'fill'}
              color={'blue'}
              onClick={() => {
                handleSelectMonth();
              }}
            >
              Terapkan
            </ButtonComponent>
          </MonthPickerPopupActions>
        </MonthPickerPopupStyles>
      )}
    </MonthPickerStyles>
  );
};

MonthPickerComponent.displayName = 'AmMonthPicker';
export default MonthPickerComponent;
