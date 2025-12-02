import { getUser, sumAges } from "../src/modules/user";

test("getUser returns correct user", () => {
  const user = getUser("123");
  expect(user.id).toBe("123");
  expect(user.name).toBe("John Doe");
  expect(user.age).toBe(25);
});

test("sumAges returns correct sum", () => {
  const sum = sumAges(
    { id: "1", name: "A", age: 20 },
    { id: "2", name: "B", age: 30 },
  );
  expect(sum).toBe(50);
});
