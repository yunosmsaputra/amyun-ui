export interface IMonthPicker {
  className?: string;
  placeholder?: string;
  value?: any;
  name?: string;
  disabled?: boolean;
  onChange?: (value: any) => void;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  format?: 'full' | 'short';
}
