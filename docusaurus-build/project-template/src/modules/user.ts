import type { User } from "../types/user";

/**
 * Возвращает пользователя по ID.
 * Чистая функция, легко тестируется.
 */
export function getUser(id: string): User {
  return {
    id,
    name: "John Doe",
    age: 25,
  };
}

/**
 * Складывает возраст двух пользователей.
 */
export function sumAges(a: User, b: User): number {
  return a.age + b.age;
}
