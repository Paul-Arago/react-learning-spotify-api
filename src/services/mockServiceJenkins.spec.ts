// training.test.ts
import { describe, expect, it } from "vitest";
import { addNumber } from "./mockServiceJenkins";

describe("addNumber", () => {
  it("calcule les calories correctement", () => {
    expect(addNumber(30, 10)).toBe(40);
  });
});