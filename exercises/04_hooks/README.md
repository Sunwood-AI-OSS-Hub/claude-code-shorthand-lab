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

### フックのデバッグ

フックが正しく動作しているか確認するには、`--debug hooks` オプションを使用します：

```bash
ccd-glm --debug hooks
```

これにより、フックの発火タイミングや実行内容が `hook.log` に出力されます。

> [!NOTE]
> `docker compose run --rm dev` で developer ユーザーとしてコンテナに入り、`ccd-glm` で Claude Code を起動します。

## 完了条件

- [ ] `hook.log` にフックのログが出力される
- [ ] ファイル編集後に自動フォーマットされる
- [ ] console.log を書くと警告が出る
- [ ] git push 前にレビューを促される

### 成功例（`hook.log` の出力イメージ）

フックが正しく動作していれば、以下のようなログが出力されます：

```
✨ [Hook] JS/TS ファイル編集完了: /workspace/app/src/index.ts 💅
🪵 [Hook] /workspace/app/src/index.ts 編集後 - app/src/ に 0 個の console.log 🔎
⏳ [Hook] 長時間実行コマンド検知: pnpm build 🐢
🛑 [Hook] セッション終了前チェック 📋
```

各フックが発火していることを確認してください。

## フックの仕組み

フックは `settings.json` に以下のように記述します：

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit",
        "hooks": [
          {
            "type": "command",
            "command": "jq -r '.tool_input.file_path' | { read file_path; echo \"✨ 編集完了: $file_path\" >> /workspace/hook.log; } || true"
          }
        ]
      }
    ]
  }
}
```

**ポイント**：
- `jq` でツールの入力（`.tool_input`）から情報を抽出
- `matcher` で発火条件を指定（`Edit`, `Write`, `Bash` など）
- ログは `/workspace/hook.log` に追記
- `|| true` を付けてコマンド失敗時にセッションが止まらないようにする

---

**前のステップ**: [Exercise 03: Skills](../03_skills/README.md)
**次のステップ**: [Exercise 05: サブエージェント](../05_subagents/README.md)
