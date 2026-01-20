# Exercise 02: Slash Commands

## 目的

この Exercise では、**スラッシュコマンド**を使って作業を定型化する方法を学びます。

スラッシュコマンドを定義することで、定型作業を自動化できます。

## 新規追加ファイル

```
02_slash_commands/
  .claude/
    CLAUDE.md              # 前のステップから継承
    commands/              # スラッシュコマンド定義
      dojo-plan.md
      dojo-test.md
      dojo-review.md
  app/                     # 前のステップと同じ
```

## 学習内容

1. **スラッシュコマンドの書き方**
   - `.claude/commands/` に `.md` ファイルを配置
   - ファイル名がコマンド名になる

2. **コマンドの構造**
   - `---` で区切られたフロントマター
   - 説明文
   - 実行手順

3. **実用的なコマンドの例**
   - 計画作成コマンド
   - テスト実行コマンド
   - コードレビューコマンド

## 実行手順

```bash
# 1. このディレクトリに移動
cd exercises/02_slash_commands

# 2. Docker コンテナを起動
docker compose up -d

# 3. コンテナに入る
docker compose exec dev bash

# 4. Claude Code を起動
claude

# 5. スラッシュコマンドを使ってみる
/dojo-plan
```

## 完了条件

- [ ] `/dojo-plan` で計画が作成される
- [ ] `/dojo-test` でテストが実行される
- [ ] `/dojo-review` でコードレビューが実行される

## 動作確認

Claude Code で以下を実行してください：

```
/dojo-plan 関数を追加する機能
```

計画が適切に作成されることを確認してください。

---

**前のステップ**: [Exercise 01: CLAUDE.md](../01_claude_md/README.md)
**次のステップ**: [Exercise 03: スキル](../03_skills/README.md)
