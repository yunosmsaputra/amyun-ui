import React, { useRef, useState } from 'react';
import {
  FileInputStyle,
  FilePreview,
  IconDelete,
  IconEye,
} from './FileInput.style';
import { AmFlex, AmText } from '../index';
import { neutralColorLib } from '../color';
import { IFileInput } from './FileInput.types';

const AmFileInput: React.FC<IFileInput> = ({
  maxFileSize = 10000000,
  onChange,
}) => {
  const fileInput = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<any>();
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && fileInput.current) {
      fileInput.current.files = event.dataTransfer.files;
      setFile(file);
      onChange && onChange(file);
    }
  };
  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files?.[0]);
      onChange && onChange(event.target.files?.[0]);
    }
  };
  const handleDeleteFile = () => {
    setFile(null);
    onChange && onChange(null);
  };
  const handleClick = () => {
    fileInput.current?.click();
  };
  const formatNumber = (number: string) => {
    let ret = new Intl.NumberFormat('id-ID', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(parseFloat(number));
    if (ret.endsWith(',00')) {
      ret = ret.slice(0, -3);
    }
    return ret;
  };
  return file ? (
    <FilePreview>
      <AmFlex alignItems={'center'} gap={12}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M10.8 2.39999C10.1635 2.39999 9.55306 2.65285 9.10297 3.10294C8.65288 3.55302 8.40002 4.16347 8.40002 4.79999V14.4C8.40002 15.0365 8.65288 15.647 9.10297 16.097C9.55306 16.5471 10.1635 16.8 10.8 16.8H18C18.6365 16.8 19.247 16.5471 19.6971 16.097C20.1472 15.647 20.4 15.0365 20.4 14.4V7.69679C20.3999 7.06033 20.1469 6.44998 19.6968 5.99999L16.8 3.10319C16.35 2.65308 15.7397 2.40013 15.1032 2.39999H10.8Z"
            fill="#BAD1F3"
          />
          <path
            d="M3.59998 9.6C3.59998 8.96348 3.85283 8.35303 4.30292 7.90294C4.75301 7.45285 5.36346 7.2 5.99998 7.2V19.2H15.6C15.6 19.8365 15.3471 20.447 14.897 20.8971C14.4469 21.3471 13.8365 21.6 13.2 21.6H5.99998C5.36346 21.6 4.75301 21.3471 4.30292 20.8971C3.85283 20.447 3.59998 19.8365 3.59998 19.2V9.6Z"
            fill="#BAD1F3"
          />
        </svg>
        <div style={{ alignItems: 'center' }}>
          <AmText size={12} color={'#333'} weight={'semibold'}>
            {file.name}
          </AmText>
          <AmText size={10} color={neutralColorLib.textDisabled}>
            {file.size > 1000000
              ? `${(file.size / 1000000).toFixed(2)}MB`
              : file.size > 1000
                ? `${(file.size / 1000).toFixed(2)}KB`
                : `${file.size}B`}
          </AmText>
        </div>
      </AmFlex>
      <AmFlex gap={8} alignItems={'center'}>
        <IconEye />
        <IconDelete onClick={handleDeleteFile} />
      </AmFlex>
    </FilePreview>
  ) : (
    <FileInputStyle
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={handleClick}
    >
      <input
        type={'file'}
        ref={fileInput}
        onChange={handleChangeFile}
        style={{ display: 'none' }}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.7929 3.29289C12.1834 2.90237 12.8166 2.90237 13.2071 3.29289L17.2071 7.29289C17.5976 7.68342 17.5976 8.31658 17.2071 8.70711C16.8166 9.09763 16.1834 9.09763 15.7929 8.70711L13.5 6.41421V16C13.5 16.5523 13.0523 17 12.5 17C11.9477 17 11.5 16.5523 11.5 16V6.41421L9.20711 8.70711C8.81658 9.09763 8.18342 9.09763 7.79289 8.70711C7.40237 8.31658 7.40237 7.68342 7.79289 7.29289L11.7929 3.29289ZM4.5 15C5.05228 15 5.5 15.4477 5.5 16V17C5.5 17.5304 5.71071 18.0391 6.08579 18.4142C6.46086 18.7893 6.96957 19 7.5 19H17.5C18.0304 19 18.5391 18.7893 18.9142 18.4142C19.2893 18.0391 19.5 17.5304 19.5 17V16C19.5 15.4477 19.9477 15 20.5 15C21.0523 15 21.5 15.4477 21.5 16V17C21.5 18.0609 21.0786 19.0783 20.3284 19.8284C19.5783 20.5786 18.5609 21 17.5 21H7.5C6.43913 21 5.42172 20.5786 4.67157 19.8284C3.92143 19.0783 3.5 18.0609 3.5 17V16C3.5 15.4477 3.94772 15 4.5 15Z"
          fill="#2671D9"
        />
      </svg>
      <div style={{ textAlign: 'center', marginLeft: '12px' }}>
        <AmText size={12} color={'#333'} weight={'semibold'}>
          Pilih atau Tarik File Disini
        </AmText>
        <AmText
          size={10}
          color={neutralColorLib.textDisabled}
          style={{ marginTop: '6px' }}
        >
          Maksimum ukuran file{' '}
          {maxFileSize > 1000000
            ? `${formatNumber((maxFileSize / 1000000).toFixed(2))}MB`
            : `${maxFileSize}KB`}
        </AmText>
      </div>
    </FileInputStyle>
  );
};

export default AmFileInput;
