# Exercise 01: CLAUDE.md

## 目的

この Exercise では、**プロジェクト固有のルールを Claude Code に伝える方法**を学びます。

CLAUDE.md を配置することで、Claude Code の振る舞いをカスタマイズできます。

## 新規追加ファイル

```
01_claude_md/
  .claude/
    CLAUDE.md          # プロジェクトルール設定
  app/
    src/
    tests/
    scripts/
```

## 学習内容

1. **CLAUDE.md の場所と優先順位**
   - プロジェクトルートの `.claude/CLAUDE.md`
   - ユーザーレベルの `~/.claude/CLAUDE.md`
   - プロジェクト設定が優先される

2. **基本的なルールの書き方**
   - コーディングスタイル
   - テストのルール
   - Git コミットのルール

3. **Claude Code への指示方法**
   - 必須事項
   - 禁止事項
   - 推奨手法

## 実行手順

```bash
# 1. このディレクトリに移動
cd exercises/01_claude_md

# 2. Docker コンテナを起動
docker compose up -d

# 3. コンテナに入る（developer ユーザー）
docker compose run --rm dev

# 4. Claude Code を起動
ccd-glm

# 5. Claude Code で質問してみる
# 「こんにちは！ここはどんなプロジェクト？」
```

> [!NOTE]
> `docker compose run --rm dev` で developer ユーザーとしてコンテナに入り、`ccd-glm` で Claude Code を起動します。

## 完了条件

- [ ] Claude Code が `CLAUDE.md` のルールを認識している
- [ ] コーディングスタイルが反映されている
- [ ] テストのルールが守られている

## 動作確認

Claude Code に以下の質問をしてください：

```
このプロジェクトのコーディングルールを教えて
```

CLAUDE.md に記述した内容が正しく反映されていることを確認してください。

## デモ動画

実際の動作デモはこちら：

[![Demo Tweet](https://img.shields.io/badge/Demo-Video-blue?style=social&logo=x)](https://x.com/hAru_mAki_ch/status/2013507671689679282)

---

**次のステップ**: [Exercise 02: スラッシュコマンド](../02_slash_commands/README.md)
