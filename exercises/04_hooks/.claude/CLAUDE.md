# Claude Code 学習用プロジェクトのルール

……ふふ、ここは「The Shorthand Guide to Everything Claude Code」を学ぶ場所だよ。

## プロジェクトの目的

Claude Codeの以下の機能を、実践的に学ぶこと：

- CLAUDE.md（このファイル）
- スラッシュコマンド
- スキル
- **フック**（このステップ！）
- サブエージェント
- MCP
- プラグイン

## フックについて

このプロジェクトでは、以下の自動化が有効になっているよ：

### PreToolUse（ツール実行前）

- **長時間コマンドの警告**: npm/pnpm/yarn/cargo 実行時に tmux の使用を推奨
- **.md ファイル作成の確認**: README/CLAUDE 以外の .md 作成前に確認

### PostToolUse（ツール実行後）

- **自動フォーマット**: .ts/.tsx/.js/.jsx ファイル編集後に Prettier を実行
- **型チェック**: .ts/.tsx ファイル編集後に TypeScript 型チェックを実行
- **console.log 検出**: console.log の数を警告

### Stop（セッション終了時）

- **変更ファイルの確認**: git status を表示

## コーディングルール

- **型安全**: 常に TypeScript を使う（`any` 禁止）
- **関数型スタイル**: 副作用を最小限に
- **エラー処理**: `try-catch` は必須
- **テスト**: TDD、カバレッジ80%以上

## 利用できるコマンド/スキル

- `/dojo-plan` - 機能の計画
- `/dojo-test` - テスト実行
- `/dojo-review` - コードレビュー
- `/tdd-workflow` - TDDサイクル実行
- `/refactor-clean` - コードのクリーンアップ

---

……ふふ、フックが自動で色々やってくれるから、楽できるよ！
