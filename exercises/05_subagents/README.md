# Exercise 05: Subagents

## 目的

この Exercise では、**サブエージェント**を使ってタスクを専門のエージェントに委譲する方法を学びます。

メインのエージェントは全体の指揮をとり、専門的な作業はサブエージェントに委譲します。

## 新規追加ファイル

```
05_subagents/
  .claude/
    CLAUDE.md              # 前のステップから継承
    commands/              # 前のステップから継承
    skills/                # 前のステップから継承
    settings.json          # 前のステップから継承
    agents/                # サブエージェント定義
      planner.md
      code-reviewer.md
      tdd-guide.md
  app/                     # 前のステップと同じ
```

## 学習内容

1. **サブエージェントの書き方**
   - `.claude/agents/<name>.md` に定義
   - 専門分野の指定
   - 使えるツールの制限

2. **サブエージェントの種類**
   - 計画作成エージェント
   - コードレビューア
   - TDDガイド
   - リファクタリング専門

3. **委譲のタイミング**
   - 複雑な計画作成時
   - 品質チェック時
   - 専門知識が必要な時

## 実行手順

```bash
# 1. このディレクトリに移動
cd exercises/05_subagents

# 2. Docker コンテナを起動
docker compose up -d

# 3. コンテナに入る（developer ユーザー）
docker compose run --rm dev

# 4. Claude Code を起動
ccd-glm

# 5. サブエージェントにタスクを委譲
# 「このコードをレビューして」と言うと、code-reviewer エージェントが動作します
```

> [!NOTE]
> `docker compose run --rm dev` で developer ユーザーとしてコンテナに入り、`ccd-glm` で Claude Code を起動します。

## 完了条件

- [ ] planner エージェントが計画を作成する
- [ ] code-reviewer エージェントがレビューをする
- [ ] tdd-guide エージェントがTDDをガイドする

## サブエージェントの仕組み

サブエージェントはメインのエージェントとは別のプロセスで動作し、それぞれの専門分野に集中します。

---

**前のステップ**: [Exercise 04: Hooks](../04_hooks/README.md)
**次のステップ**: [Exercise 06: MCP](../06_mcp/README.md)
