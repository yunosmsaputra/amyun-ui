import {
  SelectTreeContainerStyles,
  SelectTreePopupListStyles,
  SelectTreePopupListStylesChild,
  SelectTreePoupStyles,
  SelectTreeStyles,
} from './SelectTree.styles';
import React, { useEffect, useRef, useState } from 'react';
import { IRecursiveComponent, ISelectTree } from './SelectTree.types';
import Text from '../Text/Text';
import { blueColorLib, neutralColorLib } from '../color';
import Flex from '../Flex/Flex';
import IconComponent from '../Icon/Icon';
import { type } from '@testing-library/user-event/dist/type';

const SelectTreeComponent: React.FC<ISelectTree> = ({
  placeholder,
  value,
  data,
  text = 'name',
  id = 'id',
  onChange,
  name,
  className,
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [openItems, setOpenItems] = useState<any[]>([]);
  const [valueTree, setValueTree] = useState<any>();
  const handleClick = () => {
    setShowPopup(!showPopup);
  };
  const handleClickTree = (value: any) => {
    handleSelectTree(value);
  };
  const handleDropdownClickTree = (value: any) => {
    toggleItem(value);
  };
  const toggleItem = (val: any) => {
    setOpenItems((prev) =>
      prev.includes(val[id])
        ? prev.filter((itemId) => itemId !== val[id])
        : [...prev, val[id]],
    );
  };
  const handleSelectTree = (item: any) => {
    setValueTree(item);
    setShowPopup(false);
    const params = {
      target: {
        name: name,
        value: item,
      },
    };
    onChange && onChange(params);
  };
  const renderItem = (items: any, level: number = 0) => {
    return (
      <>
        <SelectTreePopupListStyles
          $paddingLeft={
            items.child?.length > 0 ? level * 12 + 8 : level * 12 + 20
          }
        >
          {items.child?.length > 0 && (
            <IconComponent
              name={'chevron-right'}
              color={neutralColorLib.label}
              size={12}
              style={{ cursor: 'pointer' }}
              onClick={() => {
                handleDropdownClickTree(items);
              }}
            />
          )}
          <IconComponent
            name={items.child?.length > 0 ? 'calendar' : 'document'}
            color={neutralColorLib.label}
            size={12}
          />
          <Text
            color={neutralColorLib.black}
            size={12}
            style={{ marginLeft: '2px' }}
            onClick={() => {
              handleClickTree(items);
            }}
          >
            {items[text]}
          </Text>
        </SelectTreePopupListStyles>
        {items.child?.length > 0 && openItems.includes(items[id]) && (
          <>
            {items.child.map((childItem: any, index: number) => (
              <div key={`selectTree${level}${index}`}>
                {renderItem(childItem, level + 1)}
              </div>
            ))}
          </>
        )}
      </>
    );
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
    setShowPopup(false);
  });
  return (
    <SelectTreeStyles
      className={className}
      //@ts-ignore
      ref={domNode}
    >
      <SelectTreeContainerStyles
        $isFocused={showPopup}
        onClick={() => {
          handleClick();
        }}
      >
        <Flex
          justifyContent={'space-between'}
          alignItems={'center'}
          onClick={() => {
            handleClick();
          }}
        >
          {value || valueTree ? (
            <Text size={12} color={neutralColorLib.black}>
              {value
                ? typeof value === 'object'
                  ? value[text]
                  : value
                : valueTree[text]}
            </Text>
          ) : (
            <Text size={12} color={neutralColorLib.textField}>
              {placeholder}
            </Text>
          )}
          <IconComponent
            name={'chevron-down'}
            color={blueColorLib.main}
            size={12}
            style={{ transform: `rotate(${showPopup ? '180deg' : '0deg'})` }}
          ></IconComponent>
        </Flex>
      </SelectTreeContainerStyles>
      {showPopup && (
        <SelectTreePoupStyles>
          {/*<RecursiveComponent items={data} level={0} text={text} id={id}/>*/}
          {data?.map((value, index) => (
            <div key={`selecttree${index}`}>{renderItem(value)}</div>
          ))}
        </SelectTreePoupStyles>
      )}
    </SelectTreeStyles>
  );
};

export default SelectTreeComponent;
SelectTreeComponent.displayName = 'AmSelectTree';
