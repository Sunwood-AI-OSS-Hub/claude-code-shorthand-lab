/**
 * 計算履歴の管理
 */

import type { Calculation } from "./calculator.js";

export class HistoryManager {
  private history: Calculation[] = [];
  private maxSize: number;

  constructor(maxSize: number = 100) {
    this.maxSize = maxSize;
  }

  /**
   * 履歴を追加
   */
  add(calculation: Calculation): void {
    this.history.push(calculation);

    // 最大サイズを超えたら古いものを削除
    if (this.history.length > this.maxSize) {
      this.history.shift();
    }
  }

  /**
   * 全履歴を取得
   */
  getAll(): Calculation[] {
    return [...this.history];
  }

  /**
   * 最新のn件を取得
   */
  getRecent(n: number): Calculation[] {
    return this.history.slice(-n);
  }

  /**
   * 履歴をクリア
   */
  clear(): void {
    this.history = [];
  }

  /**
   * 特定の演算のみをフィルタリング
   */
  filterByOperation(operation: string): Calculation[] {
    return this.history.filter((c) => c.operation === operation);
  }
}
