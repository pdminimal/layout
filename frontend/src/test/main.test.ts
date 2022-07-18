import { describe, expect, it } from "vitest";

describe("main", () => {
  it("should be true", () => {
    expect([2, [3]]).toEqual([2, [3]]);
  });
});
