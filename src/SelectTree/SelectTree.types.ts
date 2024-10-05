export interface ISelectTree extends React.PropsWithChildren {
  placeholder?: string;
  value?: any;
  data?: any[];
  text?: string;
  id?: string;
  onChange?: (value:any) => void;
  name?: string;
  className?: string;
  }

  export interface IRecursiveComponent {
  items: any;
  level: number;
  text: string;
  id: string;
  }