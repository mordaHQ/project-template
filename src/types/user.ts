/**
 * User entity.
 *
 * @public
 */
export interface User {
  id: number;
  name: string;
  age: number;
}

/**
 * Generic API result wrapper.
 *
 * @public
 */
export type ApiResult<T> =
  | {
      ok: true;
      data: T;
    }
  | {
      ok: false;
      error: string;
    };
