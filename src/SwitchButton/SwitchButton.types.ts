export interface ISwitchButton extends React.PropsWithChildren {
  value?: boolean;
  onChange?: (value: any) => void;
  disabled?: boolean;
  name?: string;
  className?: string;
  readonly?: boolean;
}
