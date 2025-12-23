import type { User, ApiResult } from "../types/user.js";
export declare function getUser(id: number): ApiResult<User>;
export declare function sumAges(users: User[]): number;
