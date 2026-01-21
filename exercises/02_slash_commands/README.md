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

# 3. コンテナに入る（developer ユーザー）
docker compose run --rm dev

# 4. Claude Code を起動
ccd-glm

# 5. スラッシュコマンドを使ってみる
/dojo-plan
```

> [!NOTE]
> `docker compose run --rm dev` で developer ユーザーとしてコンテナに入り、`ccd-glm` で Claude Code を起動します。

## 完了条件

- [ ] `/dojo-plan` で計画が作成される
- [ ] `/dojo-test` でテストが実行される
- [ ] `/dojo-review` でコードレビューが実行される

## 動作確認

Claude Code で以下のコマンドを順番に実行してください：

```bash
# 1. 機能の計画を立てる
/dojo-plan 足し算関数を追加する機能

# 2. テストを実行する
/dojo-test

# 3. コードレビューをする
/dojo-review
```

各コマンドが正しく動作することを確認してください。

## デモ動画

実際の動作デモはこちら：

[![Demo Tweet](https://img.shields.io/badge/Demo-Video-blue?style=social&logo=x)](https://x.com/hAru_mAki_ch/status/2013525099832283408)

---

**前のステップ**: [Exercise 01: CLAUDE.md](../01_claude_md/README.md)
**次のステップ**: [Exercise 03: スキル](../03_skills/README.md)
