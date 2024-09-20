export interface IDatePicker {
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: (value: any) => void;
  style?: React.CSSProperties;
  className?: string;
}
