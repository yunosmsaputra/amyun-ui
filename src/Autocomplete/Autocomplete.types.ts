export interface IAutocomplete {
  value?: any | undefined | null;
  placeholder?: string;
  data?: any[];
  className?: string;
  id?: string;
  text?: string;
  summaryNoData?: string;
  onChange?: (value: string) => void;
  onSelectedData?: (value: any) => void;
  name?: string;
  multiSelect?: boolean;
  isServerSide?: boolean;
  summaryBeforeLoad?: string;
  disabled?: boolean;
}
