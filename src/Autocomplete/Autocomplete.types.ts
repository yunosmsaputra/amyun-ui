export interface IAutocomplete {
  value?: any;
  placeholder?: string;
  data?: any[];
  className?: string;
  id?: string;
  text?: string;
  summaryNoData?: string;
  onChange?: (value: any) => void;
  name?: string;
  multiSelect?: boolean;
  isServerSide?: boolean;
  summaryBeforeLoad?: string;
}
