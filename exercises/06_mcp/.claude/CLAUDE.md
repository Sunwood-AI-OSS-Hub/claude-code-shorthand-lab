# Claude Code 学習用プロジェクトのルール

……ふふ、ここは「The Shorthand Guide to Everything Claude Code」を学ぶ場所だよ。

## プロジェクトの目的

Claude Codeの以下の機能を、実践的に学ぶこと：

- CLAUDE.md（このファイル）
- スラッシュコマンド
- スキル
- フック
- サブエージェント
- **MCP**（このステップ！）
- プラグイン

## MCPについて

このプロジェクトでは、学習用の簡易MCPサーバーを使うよ。

### MCPサーバーのツール

- `get_calculation_history` - 計算履歴を取得
- `add_calculation` - 新しい計算を追加
- `clear_history` - 履歴をクリア

### MCPの使い方

Claude Code から自然にリクエストしてね：

```
「計算履歴を取得して」
```
```
「2 + 3 の計算を履歴に追加して」
```

## コーディングルール

- **型安全**: 常に TypeScript を使う（`any` 禁止）
- **関数型スタイル**: 副作用を最小限に
- **エラー処理**: `try-catch` は必須
- **テスト**: TDD、カバレッジ80%以上

## 利用できるコマンド/スキル/エージェント

- `/dojo-plan` - 機能の計画
- `/dojo-test` - テスト実行
- `/dojo-review` - コードレビュー
- `/tdd-workflow` - TDDサイクル実行
- `/refactor-clean` - コードのクリーンアップ

- **planner** - 計画作成エージェント
- **code-reviewer** - コードレビューア
- **tdd-guide** - TDDガイド

---

……ふふ、MCPを使うと、外部の世界とつながれるよ！
