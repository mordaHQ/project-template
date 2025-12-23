import { describe, it, expect } from "vitest";
import * as PublicAPI from "project-template";

describe("Public API snapshot", () => {
  it("matches public API contract", () => {
    expect(Object.keys(PublicAPI).sort()).toMatchInlineSnapshot(`
      [
        "getUser",
        "sumAges",
      ]
    `);
  });
});
