import type { User } from "../types/user";

export function getUser(id: string): User {
  return { id, name: "John", age: 30 };
}

export function sumAges(users: User[]): number {
  return users.reduce((acc, u) => acc + u.age, 0);
}
