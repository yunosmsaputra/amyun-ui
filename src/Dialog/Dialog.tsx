import React, { useState } from 'react';
import {
  DialogActions,
  DialogClose,
  DialogContainer,
  DialogContent,
  DialogStyles,
  DialogTitle,
} from './Dialog.styles';
import { IDialog, IDialogContent, IDialogTitle } from './Dialog.types';
import { AmFlex } from '../index';

export const DialogComponent: React.FC<IDialog> = ({
  width = 540,
  height = 500,
  expandable = false,
  isShow = true,
  children,
}) => {
  return (
    <DialogStyles $isShow={isShow}>
      <DialogContainer $width={width} $expandable={expandable} $height={height}>
        {React.Children.map(children, (child) => {
          return React.isValidElement(child)
            ? // @ts-ignore
              React.cloneElement(child, { expandable, height })
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
  return (
    <DialogTitle style={style}>
      <AmFlex justifyContent={'space-between'} alignItems={'center'}>
        {children}
        <DialogClose onClick={() => handleOnClose()} />
      </AmFlex>
    </DialogTitle>
  );
};

export const AmDialogContent: React.FC<IDialogContent> = ({
  children,
  expandable,
  height,
}) => {
  return (
    <DialogContent $expandable={expandable} $height={height}>
      {children}
    </DialogContent>
  );
};

export const AmDialogActions: React.FC<IDialogContent> = ({ children }) => {
  return <DialogActions>{children}</DialogActions>;
};
