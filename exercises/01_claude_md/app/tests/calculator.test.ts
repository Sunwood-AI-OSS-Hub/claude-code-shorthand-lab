/**
 * calculator のテスト
 */

import { describe, it, expect } from "vitest";
import { calculate, createCalculation } from "../src/calculator.js";

describe("calculate", () => {
  it("should add two numbers", () => {
    expect(calculate(2, 3, "add")).toBe(5);
  });

  it("should subtract two numbers", () => {
    expect(calculate(5, 3, "subtract")).toBe(2);
  });

  it("should multiply two numbers", () => {
    expect(calculate(2, 3, "multiply")).toBe(6);
  });

  it("should divide two numbers", () => {
    expect(calculate(6, 3, "divide")).toBe(2);
  });

  it("should throw error for division by zero", () => {
    expect(() => calculate(5, 0, "divide")).toThrow("Division by zero");
  });

  it("should throw error for unknown operation", () => {
    expect(() =>
      calculate(1, 2, "invalid" as never)
    ).toThrow("Unknown operation");
  });
});

describe("createCalculation", () => {
  it("should create a calculation record", () => {
    const result = createCalculation(2, 3, "add");

    expect(result).toEqual({
      a: 2,
      b: 3,
      operation: "add",
      result: 5,
      timestamp: expect.any(Date),
    });
  });
});
