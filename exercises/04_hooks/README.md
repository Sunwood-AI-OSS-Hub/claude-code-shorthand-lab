# Exercise 04: Hooks

## 目的

この Exercise では、**フック**を使ってツール実行前後に自動処理を追加する方法を学びます。

ツールが実行される前後に自動的に処理を実行することで、開発効率を向上できます。

## 新規追加ファイル

```
04_hooks/
  .claude/
    settings.local.json    # フック設定（このステップで学ぶ）
  app/
```

## 学習内容

1. **フックの種類**
   - `PreToolUse` - ツール実行前に発火
   - `PostToolUse` - ツール実行後に発火
   - `UserPromptSubmit` - ユーザーがメッセージを送信した時
   - `Stop` - 応答完了時

2. **フックの書き方**
   - `settings.json` にJSON形式で記述
   - `matcher` で発火条件を指定
   - `hooks` で実行アクションを指定

3. **実用的なフックの例**
   - 自動フォーマット
   - console.log の警告
   - テスト忘れ防止

## 実行手順

```bash
# 1. このディレクトリに移動
cd exercises/04_hooks

# 2. Docker コンテナを起動
docker compose up -d

# 3. コンテナに入る（developer ユーザー）
docker compose run --rm dev

# 4. Claude Code を起動
ccd-glm

# 5. ファイルを編集してみる
# 自動的にフォーマットされます
```

> [!NOTE]
> `docker compose run --rm dev` で developer ユーザーとしてコンテナに入り、`ccd-glm` で Claude Code を起動します。

## 完了条件

- [ ] ファイル編集後に自動フォーマットされる
- [ ] console.log を書くと警告が出る
- [ ] git push 前にレビューを促される

## フックの仕組み

```json
{
  "PostToolUse": [
    {
      "matcher": "Edit && .ts/.tsx/.js/.jsx",
      "hooks": [
        {
          "type": "command",
          "command": "cd app && prettier --write"
        }
      ]
    }
  ]
}
```

ファイルを保存するたびに自動でフォーマットされます。

---

**前のステップ**: [Exercise 03: Skills](../03_skills/README.md)
**次のステップ**: [Exercise 05: サブエージェント](../05_subagents/README.md)
