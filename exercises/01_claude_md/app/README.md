# 題材アプリ（Dojo Calculator）

……ふふ、ここではシンプルな電卓アプリを使って学習するの。

機能は最小限だけど、バグを混ぜやすいから、練習にぴったりだよ。

## 機能

- 基本的な四則演算（+, -, *, /）
- 履歴機能
- 簡単なバリデーション

## 使い方

```bash
# 依存関係をインストール
pnpm install

# テストを実行
pnpm test

# 型チェック
pnpm typecheck

# リント
pnpm lint

# フォーマット
pnpm format
```

## 構成

```
src/
  calculator.ts    # メインの計算ロジック
  history.ts       # 履歴管理
  index.ts         # エントリーポイント

tests/
  calculator.test.ts
  history.test.ts

scripts/
  format.sh
  lint.sh
  test.sh
```

## わざと混ぜたバグ

……あ、あとで見つけてね。いくつかバグが隠れてるかも。
