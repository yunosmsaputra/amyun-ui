import React, { useEffect, useRef, useState } from 'react';
import {
  DatePickerActions,
  DatePickerContainer,
  DatePickerList,
  DatePickerListDay,
  DatePickerPopup,
  DatePickerSelectbox,
  DatePickerSelectBoxPopup,
  DatePickerSelectBoxPopupList,
  DatePickerSelection,
  DatePickerSelectionButton,
  DatePickerSelectionButtonContainer,
  DatePickerSelectionMonthYear,
  DatePickerSelectionMonthYearContainer,
  DatePickerStyle,
  DatePickerYearMonthInfo,
} from './DatePicker.style';
import { IDatePicker } from './DatePicker.type';
import { blueColorLib, neutralColorLib } from '../color';
import TextComponent from '../Text/Text';
import IconComponent from '../Icon/Icon';
import { ButtonComponent } from '../Button';

const AmDatePicker: React.FC<IDatePicker> = ({
  placeholder = 'Pilih Tanggal',
  name,
  value,
  onChange,
  style,
  className,
  disabled,
}) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [valueDate, setValue] = useState<string>('');
  const [valueTemp, setValueTemp] = useState<any>(null);
  const listDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const listMonth = [
    'Januari',
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
  const listMonthShort = [
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
  const date = new Date();
  const [month, setMonth] = useState<number>(date.getMonth());
  const [year, setYear] = useState<number>(date.getFullYear());
  const firstDateOfMonth = new Date(year, month, 1);
  const lastDateOfMonth = new Date(year, month + 1, 0);
  const startDate =
    firstDateOfMonth.getDay() > 0 ? 0 - firstDateOfMonth.getDay() : 0;
  const endDate = lastDateOfMonth.getDate();
  const range = Array.from(
    { length: endDate - startDate },
    (_, index) => startDate + index,
  );
  const handleShowPopup = () => {
    if (!disabled) {
      setIsShow(!isShow);
    }
  };
  const addMonth = () => {
    setMonth(month > 10 ? 0 : month + 1);
    if (month > 10) {
      setYear(year + 1);
    }
  };
  const substractMonth = () => {
    setMonth(month < 1 ? 11 : month - 1);
    if (month < 1) {
      setYear(year - 1);
    }
  };
  const onSelectDate = (value: number) => {
    setValueTemp(new Date(year, month, value));
  };
  const handleClick = () => {
    if (valueTemp) {
      setValue(
        `${valueTemp.getDate()} ${listMonth[valueTemp.getMonth()]} ${valueTemp.getFullYear()}`,
      );
      setIsShow(false);
      const params = {
        target: {
          name: name,
          value: valueTemp,
        },
      };
      onChange && onChange(params);
    }
  };
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
    setIsShow(false);
  });

  const [onShowMonthPopup, setShowMonthPopup] = useState<boolean>(false);
  const handleSelectMonthFromPopup = (index: number) => {
    setMonth(index);
    setShowMonthPopup(false);
  };
  const useClickOutsidePopupMonth = (handler: any) => {
    const domNodeMonth = useRef();

    useEffect(() => {
      const maybeHandler = (event: any) => {
        // @ts-ignore
        if (!domNodeMonth.current.contains(event.target)) {
          handler();
        }
      };

      document.addEventListener('mousedown', maybeHandler);

      return () => {
        document.removeEventListener('mousedown', maybeHandler);
      };
    });

    return domNodeMonth;
  };
  const domNodeMonth = useClickOutsidePopupMonth(() => {
    setShowMonthPopup(false);
  });

  const [onShowYearPopup, setShowYearPopup] = useState<boolean>(false);
  const handleSelectYearPopup = (index: number) => {
    setYear(1900 + index);
    setShowYearPopup(false);
  };
  const useClickOutsidePopupYear = (handler: any) => {
    const domNodeYear = useRef();

    useEffect(() => {
      const maybeHandler = (event: any) => {
        // @ts-ignore
        if (!domNodeYear.current.contains(event.target)) {
          handler();
        }
      };

      document.addEventListener('mousedown', maybeHandler);

      return () => {
        document.removeEventListener('mousedown', maybeHandler);
      };
    });

    return domNodeYear;
  };
  const domNodeYear = useClickOutsidePopupYear(() => {
    setShowYearPopup(false);
  });
  const refPopupYear = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = refPopupYear.current;
    if (container) {
      container.scrollTop = 26 * (year - 1900) - 52;
    }
  }, [onShowYearPopup]);
  useEffect(() => {
    if (value) {
      const dateValue = new Date(value);
      setValue(
        `${dateValue.getDate().toString()} ${listMonth[dateValue.getMonth()]} ${dateValue.getFullYear()}`,
      );
      setValueTemp(
        new Date(
          dateValue.getFullYear(),
          dateValue.getMonth(),
          dateValue.getDate(),
        ),
      );
    } else {
      setValue('');
      setValueTemp(null);
    }
  }, [value]);
  return (
    <DatePickerStyle
      style={style}
      className={className}
      //@ts-ignore
      ref={domNode}
    >
      <DatePickerContainer
        $noValue={!valueDate}
        $disabled={disabled}
        onClick={() => {
          handleShowPopup();
        }}
      >
        <TextComponent
          size={12}
          color={!valueDate ? neutralColorLib.textField : neutralColorLib.black}
        >
          {valueDate ? valueDate : placeholder}
        </TextComponent>
        <IconComponent
          name={'calendar'}
          size={12}
          color={blueColorLib.main}
        ></IconComponent>
      </DatePickerContainer>
      <DatePickerPopup $isShow={isShow}>
        <DatePickerYearMonthInfo>
          <TextComponent
            size={10}
            color={neutralColorLib.textField}
            weight={'semibold'}
            block
          >
            {valueTemp?.getFullYear() ?? date.getFullYear()}
          </TextComponent>
          <TextComponent
            size={14}
            color={neutralColorLib.black}
            weight={'semibold'}
            block
            style={{ marginTop: '4px' }}
          >{`${valueTemp?.getDate() ?? date.getDate()} ${listMonth[valueTemp?.getMonth() ?? date.getMonth()]}`}</TextComponent>
        </DatePickerYearMonthInfo>
        <DatePickerSelection>
          <DatePickerSelectionMonthYear>
            <DatePickerSelectionMonthYearContainer
              // @ts-ignore
              ref={domNodeMonth}
            >
              <DatePickerSelectbox
                onClick={() => {
                  setShowMonthPopup(!onShowMonthPopup);
                }}
              >
                <TextComponent
                  size={12}
                  weight={'semibold'}
                  color={neutralColorLib.black}
                >
                  {listMonthShort[month]}
                </TextComponent>
                <IconComponent
                  name={'chevron-down'}
                  color={'blue'}
                  size={16}
                  style={{ marginTop: '2px' }}
                ></IconComponent>
              </DatePickerSelectbox>
              {onShowMonthPopup && (
                <DatePickerSelectBoxPopup>
                  {listMonth.map((value, index) => (
                    <DatePickerSelectBoxPopupList
                      key={`monthSelection${index}`}
                      $isActive={month === index}
                      onClick={() => {
                        handleSelectMonthFromPopup(index);
                      }}
                    >
                      {value}
                    </DatePickerSelectBoxPopupList>
                  ))}
                </DatePickerSelectBoxPopup>
              )}
            </DatePickerSelectionMonthYearContainer>
            <DatePickerSelectionMonthYearContainer
              // @ts-ignore
              ref={domNodeYear}
            >
              <DatePickerSelectbox
                onClick={() => {
                  setShowYearPopup(!onShowYearPopup);
                }}
              >
                <TextComponent
                  size={12}
                  weight={'semibold'}
                  color={neutralColorLib.black}
                >
                  {year}
                </TextComponent>
                <IconComponent
                  name={'chevron-down'}
                  color={'blue'}
                  size={16}
                ></IconComponent>
              </DatePickerSelectbox>
              {onShowYearPopup && (
                <DatePickerSelectBoxPopup
                  //@ts-ignore
                  ref={refPopupYear}
                >
                  {Array.from(
                    { length: date.getFullYear() + 100 - 1900 + 1 },
                    (_, i) => (
                      <DatePickerSelectBoxPopupList
                        $isActive={1900 + i === year}
                        onClick={() => {
                          handleSelectYearPopup(i);
                        }}
                        key={`indexYear${i}`}
                      >
                        {1900 + i}
                      </DatePickerSelectBoxPopupList>
                    ),
                  )}
                </DatePickerSelectBoxPopup>
              )}
            </DatePickerSelectionMonthYearContainer>
          </DatePickerSelectionMonthYear>
          <DatePickerSelectionButtonContainer>
            <DatePickerSelectionButton
              onClick={() => {
                substractMonth();
              }}
            >
              <IconComponent
                size={16}
                color={neutralColorLib.black}
                name={'chevron-left'}
              ></IconComponent>
            </DatePickerSelectionButton>
            <DatePickerSelectionButton
              onClick={() => {
                addMonth();
              }}
            >
              <IconComponent
                size={16}
                color={neutralColorLib.black}
                name={'chevron-right'}
              ></IconComponent>
            </DatePickerSelectionButton>
          </DatePickerSelectionButtonContainer>
        </DatePickerSelection>
        <DatePickerList>
          {listDay.map((day, index) => (
            <DatePickerListDay
              key={`dayIndex${index}`}
              $isSunday={day === 'Sun'}
            >
              {day}
            </DatePickerListDay>
          ))}
          {range.map((value, index) => (
            <DatePickerListDay
              key={`dayIndex${index}`}
              $isDate
              $isSunday={index % 7 === 0}
              $isNow={
                new Date(
                  date.getFullYear(),
                  date.getMonth() + 1,
                  date.getDate(),
                ).getTime() === new Date(year, month + 1, value + 1).getTime()
              }
              $isSelected={
                new Date(year, month, value + 1).getTime() ===
                valueTemp?.getTime()
              }
              onClick={() => {
                onSelectDate(value + 1);
              }}
            >
              {value + 1 >= 1 ? value + 1 : ''}
            </DatePickerListDay>
          ))}
        </DatePickerList>
        <DatePickerActions>
          <ButtonComponent
            type={'fill'}
            color={'blue'}
            onClick={() => {
              handleClick();
            }}
          >
            Terapkan
          </ButtonComponent>
        </DatePickerActions>
      </DatePickerPopup>
    </DatePickerStyle>
  );
};

export default AmDatePicker;
