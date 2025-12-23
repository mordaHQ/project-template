export interface User {
    id: number;
    name: string;
    age: number;
}
export type ApiResult<T> = {
    ok: true;
    data: T;
} | {
    ok: false;
    error: string;
};
