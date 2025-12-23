import type { User, ApiResult } from "../types/user.js";

/**
 * Returns user data by id.
 *
 * @param id - User identifier
 * @returns API result with user data or error
 *
 * @public
 */
export function getUser(id: number): ApiResult<User> {
  if (id <= 0) {
    return { ok: false, error: "Invalid user id" };
  }

  return {
    ok: true,
    data: {
      id,
      name: "John",
      age: 30,
    },
  };
}

/**
 * Calculates the total age of all users.
 *
 * @param users - List of users
 * @returns Sum of ages
 *
 * @public
 */
export function sumAges(users: User[]): number {
  return users.reduce((sum, u) => sum + u.age, 0);
}
