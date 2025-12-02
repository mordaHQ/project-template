export type User = {
  id: string;
  name: string;
  age: number;
};

export type ApiResult<T> = {
  success: boolean;
  data: T;
};
