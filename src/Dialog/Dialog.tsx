import React, { useState } from 'react';
import {
  DialogActions,
  DialogButtonEdit,
  DialogClose,
  DialogContainer,
  DialogContent,
  DialogStyles,
  DialogTitle,
} from './Dialog.styles';
import { IDialog, IDialogContent, IDialogTitle } from './Dialog.types';
import FlexComponent from '../Flex/Flex';
import { blueColorLib } from '../color';
import IconComponent from '../Icon/Icon';

export const DialogComponent: React.FC<IDialog> = ({
  width = '540px',
  height = '500px',
  expandable = false,
  isShow = true,
  type = 'form',
  zIndex = 100,
  onClose,
  children,
  className,
}) => {
  return (
    <DialogStyles $isShow={isShow} $zIndex={zIndex} className={className}>
      <DialogContainer
        $width={width}
        $expandable={expandable}
        $height={height}
        $type={type}
      >
        {React.Children.map(children, (child) => {
          return React.isValidElement(child)
            ? // @ts-ignore
              React.cloneElement(child, { expandable, height, type, onClose })
            : child;
        })}
      </DialogContainer>
    </DialogStyles>
  );
};

DialogComponent.displayName = 'AmDialog';
export default DialogComponent;

export const AmDialogTitle: React.FC<IDialogTitle> = ({
  children,
  style,
  onClose,
  className,
  withButtonEdit,
  onEdit,
}) => {
  const [isOpenDialog, setIsOpenDialog] = useState<IDialog>({
    isShow: false,
  });
  const handleOnClose = () => {
    const newParam: IDialog = {
      ...isOpenDialog,
      isShow: false,
    };
    setIsOpenDialog(newParam);
    onClose && onClose();
  };
  const handleEdit = () => {
    onEdit && onEdit();
  };
  return (
    <DialogTitle style={style} className={className}>
      <FlexComponent justifyContent={'space-between'} alignItems={'center'}>
        {children}
        <FlexComponent alignItems={'center'} gap={6}>
          {withButtonEdit && (
            <DialogButtonEdit
              onClick={() => {
                handleEdit();
              }}
            >
              <IconComponent
                name={'edit-outline'}
                size={12}
                color={blueColorLib.main}
              ></IconComponent>
              Edit
            </DialogButtonEdit>
          )}
          <DialogClose onClick={() => handleOnClose()} />
        </FlexComponent>
      </FlexComponent>
    </DialogTitle>
  );
};

export const AmDialogContent: React.FC<IDialogContent> = ({
  children,
  expandable,
  height,
  type,
  className,
}) => {
  return (
    <DialogContent
      $expandable={expandable}
      $height={height}
      $type={type}
      className={className}
    >
      {children}
    </DialogContent>
  );
};

export const AmDialogActions: React.FC<IDialogContent> = ({ children }) => {
  return <DialogActions>{children}</DialogActions>;
};
