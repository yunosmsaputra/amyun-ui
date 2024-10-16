import {
  AutocompleteChipSelectedStyles,
  AutocompleteListStyles,
  AutocompleteMultiInputStyles,
  AutocompleteMultiStyles,
  AutocompletePopupStyles,
  AutocompleteStyles,
} from './Autocomplete.styles';
import React, { useEffect, useRef, useState } from 'react';
import { IAutocomplete } from './Autocomplete.types';
import TextBoxComponent from '../Textbox/Textbox';
import IconComponent from '../Icon/Icon';

const AutocompleteComponent: React.FC<IAutocomplete> = ({
  value,
  placeholder,
  data,
  className,
  id = 'id',
  text = 'name',
  summaryNoData = 'Tidak ada data',
  onChange,
  name,
  multiSelect = false,
  isServerSide = false,
  summaryBeforeLoad = 'Masukkan kategori pencarian',
  onSelectedData,
  disabled,
}) => {
  const [search, setSearch] = useState<string>();
  const [selectedData, setSelectedData] = useState<any[]>([]);
  const filteredData = multiSelect
    ? selectedData.length > 0
      ? search && search !== ''
        ? data
            ?.filter((item) =>
              item[text]?.toLowerCase().includes(search?.toLowerCase()),
            )
            .filter(
              (item) =>
                !selectedData.some((exclude) => exclude[id] === item[id]),
            )
        : data?.filter(
            (item) => !selectedData.some((exclude) => exclude[id] === item[id]),
          )
      : search && search !== ''
        ? data?.filter((item) =>
            item[text]?.toLowerCase().includes(search?.toLowerCase()),
          )
        : data
    : search && search !== ''
      ? data?.filter((item) =>
          item[text]?.toLowerCase().includes(search?.toLowerCase()),
        )
      : data;
  const handleChange = (e: any) => {
    setSearch(e.target.value);
    setShowPopup(true);
    onChange && onChange(e.target.value);
  };
  const [showPopup, setShowPopup] = useState(false);
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
    if (multiSelect) {
      setSearch('');
    } else {
      if (filteredData?.length === 0) {
        setSearch('');
      }
    }
    setShowPopup(false);
  });
  const handleSelect = (value: any) => {
    if (!multiSelect) {
      const params = {
        target: {
          name: name,
          value: value,
        },
      };
      onSelectedData && onSelectedData(params);
      setSearch(value[text]);
    } else {
      setSelectedData((prevItems: any) => [...prevItems, value]);
      setSearch('');
    }
    setShowPopup(false);
  };
  const deleteSelectedData = (index: number) => {
    setSelectedData((prevState) => prevState.filter((_, idx) => idx !== index));
  };
  const onShowPopupServerSide = () => {
    setShowPopup(true);
    onChange && onChange(search ?? '');
  };
  useEffect(() => {
    if (value) {
      if (multiSelect) {
        setSelectedData(value);
        setSearch(value[text]);
      } else {
        setSearch(value[text]);
      }
    } else {
      setSearch(undefined);
      setSelectedData([]);
    }
  }, [value]);
  useEffect(() => {
    if (selectedData.length > 0) {
      const params = {
        target: {
          name: name,
          value: selectedData,
        },
      };
      onSelectedData && onSelectedData(params);
    }
  }, [selectedData]);
  const handleChangeServerSide = (e: any) => {
    setSearch(e.target.value);
    onChange && onChange(e.target.value);
  };
  return (
    <AutocompleteStyles
      className={className}
      //@ts-ignore
      ref={domNode}
    >
      {multiSelect ? (
        <AutocompleteMultiStyles
          onClick={() => {
            setShowPopup(true);
          }}
          $isEmpty={selectedData.length > 0}
          $isFocused={showPopup}
          $disabled={disabled}
        >
          {selectedData.length > 0 && (
            <>
              {selectedData.map((item: any, index: number) => (
                <AutocompleteChipSelectedStyles
                  key={`selectedMultiData${index}`}
                >
                  {item[text]}
                  <IconComponent
                    name={'cross-reject'}
                    color={'blue'}
                    size={8}
                    style={{
                      position: 'absolute',
                      top: '6px',
                      right: '4px',
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      deleteSelectedData(index);
                    }}
                  ></IconComponent>
                </AutocompleteChipSelectedStyles>
              ))}
            </>
          )}
          <AutocompleteMultiInputStyles
            type={'text'}
            onChange={isServerSide ? handleChangeServerSide : handleChange}
            placeholder={placeholder}
            value={search ?? ''}
            disabled={disabled}
          />
        </AutocompleteMultiStyles>
      ) : (
        <div
          onClick={() => {
            onShowPopupServerSide();
          }}
        >
          <TextBoxComponent
            placeholder={placeholder}
            value={search ?? ''}
            onChange={isServerSide ? handleChangeServerSide : handleChange}
            disabled={disabled}
          ></TextBoxComponent>
        </div>
      )}
      {showPopup && (
        <>
          {isServerSide ? (
            <AutocompletePopupStyles>
              {
                // @ts-ignore
                data.length > 0 ? (
                  <>
                    {data?.map((value, index) => (
                      <AutocompleteListStyles
                        onClick={() => {
                          handleSelect(value);
                        }}
                        key={`indexAutoCompleteServerside${index}`}
                      >
                        {value[text]}
                      </AutocompleteListStyles>
                    ))}
                  </>
                ) : (
                  <AutocompleteListStyles $noHover={true}>
                    {search ? summaryNoData : summaryBeforeLoad}
                  </AutocompleteListStyles>
                )
              }
            </AutocompletePopupStyles>
          ) : (
            <AutocompletePopupStyles>
              {
                // @ts-ignore
                filteredData.length > 0 ? (
                  <>
                    {filteredData?.map((value, index) => (
                      <AutocompleteListStyles
                        onClick={() => {
                          handleSelect(value);
                        }}
                        key={`indexAutoComplete${index}`}
                      >
                        {value[text]}
                      </AutocompleteListStyles>
                    ))}
                  </>
                ) : (
                  <AutocompleteListStyles>
                    {summaryNoData}
                  </AutocompleteListStyles>
                )
              }
            </AutocompletePopupStyles>
          )}
        </>
      )}
    </AutocompleteStyles>
  );
};

AutocompleteComponent.displayName = 'AmAutocomplete';
export default AutocompleteComponent;
