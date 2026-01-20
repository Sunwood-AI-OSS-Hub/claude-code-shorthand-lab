# TDD ベストプラクティス

## 基本的な原則

1. **Red-Green-Refactor**
   - Red: 失敗するテストを書く
   - Green: テストをパスする最小限の実装
   - Refactor: コードを改善

2. **テストの命名**
   ```
   describe("Calculator", () => {
     describe("add", () => {
       it("should add two positive numbers", () => {
         // ...
       });

       it("should handle negative numbers", () => {
         // ...
       });
     });
   });
   ```

3. **AAA パターン**
   - Arrange: 準備
   - Act: 実行
   - Assert: 検証

```typescript
it("should calculate sum", () => {
  // Arrange
  const a = 2;
  const b = 3;

  // Act
  const result = add(a, b);

  // Assert
  expect(result).toBe(5);
});
```

## テストカバレッジ

- 関数: 最低 80%
- 分岐: 最低 75%
- 行: 最低 80%

## エッジケース

- 空の入力
- null / undefined
- 境界値（0, 最大値など）
- 異常な入力
