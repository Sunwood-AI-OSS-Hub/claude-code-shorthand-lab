/**
 * 簡単な計算機
 * ……ふふ、シンプルだけど、バグが隠れてるかも
 */

export type Operation = "add" | "subtract" | "multiply" | "divide";

export interface Calculation {
  a: number;
  b: number;
  operation: Operation;
  result: number;
  timestamp: Date;
}

/**
 * 計算を実行する
 */
export function calculate(
  a: number,
  b: number,
  operation: Operation
): number {
  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      if (b === 0) {
        throw new Error("Division by zero");
      }
      return a / b;
    default:
      throw new Error(`Unknown operation: ${operation}`);
  }
}

/**
 * 計算履歴を作成
 */
export function createCalculation(
  a: number,
  b: number,
  operation: Operation
): Calculation {
  const result = calculate(a, b, operation);

  return {
    a,
    b,
    operation,
    result,
    timestamp: new Date(),
  };
}
