# TDD ベストプラクティス

## Red-Green-Refactor

- Red: 失敗するテストを書く
- Green: テストをパスする最小限の実装
- Refactor: コードを改善

## AAA パターン

- Arrange: 準備
- Act: 実行
- Assert: 検証

## テストの命名

```typescript
describe("Calculator", () => {
  describe("add", () => {
    it("should add two positive numbers", () => {
      // ...
    });
  });
});
```

## カバレッジ目標

- 関数: 80%以上
- 分岐: 75%以上
- 行: 80%以上
