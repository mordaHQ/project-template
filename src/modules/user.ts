import type { User, ApiResult } from "../types/user.js";

export function getUser(id: number): ApiResult<User> {
  return {
    ok: true,
    data: { id, name: "John", age: 30 },
  };
}

export function sumAges(users: User[]): number {
  return users.reduce((sum, u) => sum + u.age, 0);
}
