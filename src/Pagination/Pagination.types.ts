export interface PaginationTypes {
  totalPage?: number;
  activePage?: number;
  onChange?: (activePage: number) => void;
}
