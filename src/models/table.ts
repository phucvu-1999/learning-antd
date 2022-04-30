export interface Pagination {
  current: number;
  pageSize: number;
}

export interface Filter {
  [3]: boolean[];
}

export interface Sorter<T> {
  column: T | undefined;
  columKey: string;
  field: string;
  order: "ascend" | "descend" | undefined;
}
