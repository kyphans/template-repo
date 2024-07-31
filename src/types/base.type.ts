export type ResponseBase<TData> = {
  statusCode: number;
  message: string;
  data?: TData;
};

export type PayloadGet<TFilter> = {
  pageNumber: number;
  pageSize: number;
  sortBy?: SortParams['sort'];
  orderDirection?: SortParams['direction'] | null;
  filter?: TFilter;
};

export type SortParams = {
  sort?: string;
  direction?: 'Desc' | 'Asc';
};

/**
 * The base type of the item of Select component
 */
export type SelectItem = {
  label: string;
  value: number;
};
