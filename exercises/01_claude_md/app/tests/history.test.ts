/**
 * history のテスト
 */

import { describe, it, expect } from "vitest";
import { HistoryManager } from "../src/history.js";
import type { Calculation } from "../src/calculator.js";

describe("HistoryManager", () => {
  it("should add calculations to history", () => {
    const manager = new HistoryManager(3);
    const calc: Calculation = {
      a: 2,
      b: 3,
      operation: "add",
      result: 5,
      timestamp: new Date(),
    };

    manager.add(calc);

    expect(manager.getAll()).toHaveLength(1);
    expect(manager.getAll()[0]).toEqual(calc);
  });

  it("should limit history size", () => {
    const manager = new HistoryManager(2);

    for (let i = 0; i < 3; i++) {
      manager.add({
        a: i,
        b: i,
        operation: "add",
        result: i * 2,
        timestamp: new Date(),
      });
    }

    expect(manager.getAll()).toHaveLength(2);
  });

  it("should get recent calculations", () => {
    const manager = new HistoryManager(10);

    for (let i = 0; i < 5; i++) {
      manager.add({
        a: i,
        b: i,
        operation: "add",
        result: i * 2,
        timestamp: new Date(),
      });
    }

    const recent = manager.getRecent(3);
    expect(recent).toHaveLength(3);
    expect(recent[0].result).toBe(4); // 3番目の計算
  });

  it("should clear history", () => {
    const manager = new HistoryManager();
    const calc: Calculation = {
      a: 1,
      b: 2,
      operation: "add",
      result: 3,
      timestamp: new Date(),
    };

    manager.add(calc);
    manager.clear();

    expect(manager.getAll()).toHaveLength(0);
  });

  it("should filter by operation", () => {
    const manager = new HistoryManager();

    manager.add({
      a: 2,
      b: 3,
      operation: "add",
      result: 5,
      timestamp: new Date(),
    });

    manager.add({
      a: 5,
      b: 3,
      operation: "subtract",
      result: 2,
      timestamp: new Date(),
    });

    const additions = manager.filterByOperation("add");
    expect(additions).toHaveLength(1);
    expect(additions[0].operation).toBe("add");
  });
});
