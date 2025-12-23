import { describe, it, expect } from "vitest";

// ❗ ТЕСТИРУЕМ ТО, ЧТО ПОПАДАЕТ В npm
import type { User, ApiResult } from "../dist";
import { getUser, sumAges } from "../dist";

describe("Public API contract", () => {
  it("exports expected functions", () => {
    expect(typeof getUser).toBe("function");
    expect(typeof sumAges).toBe("function");
  });

  it("User type shape is stable", () => {
    const user: User = {
      id: 1,
      name: "John",
      age: 30,
    };

    expect(user.id).toBeTypeOf("number");
    expect(user.name).toBeTypeOf("string");
    expect(user.age).toBeTypeOf("number");
  });

  it("ApiResult<T> contract is stable", () => {
    const result: ApiResult<User> = {
      ok: true,
      data: {
        id: 1,
        name: "John",
        age: 30,
      },
    };

    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.data.id).toBe(1);
    }
  });

  it("getUser returns ApiResult<User>", () => {
    const result = getUser(1);

    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.data.id).toBe(1);
    }
  });

  it("sumAges computes total age correctly", () => {
    const total = sumAges([
      { id: 1, name: "John", age: 30 },
      { id: 2, name: "Jane", age: 25 },
    ]);

    expect(total).toBe(55);
  });
});
