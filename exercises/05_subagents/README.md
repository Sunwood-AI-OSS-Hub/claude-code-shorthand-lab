# Exercise 05: Subagents

## 目的

この Exercise では、**サブエージェント**を使ってタスクを専門のエージェントに委譲する方法を学びます。

メインのエージェントは全体の指揮をとり、専門的な作業はサブエージェントに委譲します。

## 新規追加ファイル

```
05_subagents/
  .claude/
    agents/                # サブエージェント定義（このステップで学ぶ）
      architecture-planner.md   # アーキテクチャ設計・実装計画
      code-reviewer.md          # コードレビュー・品質チェック
      tdd-guide.md              # TDDガイド・テスト設計
  app/
    dice-app/             # サンプル: 高機能サイコロアプリ
```

## 学習内容

### 1. サブエージェントの書き方

サブエージェントは `.claude/agents/<name>.md` に YAML frontmatter 付きで定義します。

```yaml
---
name: agent-name
description: "このエージェントの説明と使用例"
model: opus|sonnet|haiku
color: blue|red|green|purple|yellow
---

エージェントの役割と責任を記述...
```

**各フィールドの説明**:

| フィールド | 説明 | 値 |
|-----------|------|-----|
| `name` | エージェントの識別名 | 小文字ハイフン区切り |
| `description` | エージェントの説明とトリガー例 | 複数行可 |
| `model` | 使用するAIモデル | `opus`, `sonnet`, `haiku` |
| `color` | エージェントの識別色 | UIで表示される色 |

### 2. サブエージェントの種類

| エージェント | 色 | モデル | 役割 |
|-------------|----|--------|------|
| `architecture-planner` | 紫 | opus | 実装計画・アーキテクチャ設計・技術選択 |
| `code-reviewer` | 赤 | opus | コードレビュー・品質チェック・セキュリティ監査 |
| `tdd-guide` | 緑 | opus | TDDガイド・テスト設計・リファクタリング支援 |

### 3. 委譲のタイミング

- **複雑な計画作成時** → `architecture-planner` に委譲
- **品質チェック時** → `code-reviewer` に委譲
- **テスト駆動開発時** → `tdd-guide` に委譲

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
# 例: 「app フォルダに高機能サイコロアプリを作成して」
```

> [!NOTE]
> `docker compose run --rm dev` で developer ユーザーとしてコンテナに入り、`ccd-glm` で Claude Code を起動します。

## 実行例: 高機能サイコロアプリ

### 試せるリクエスト

```
app フォルダに高機能サイコロアプリを作成して
```

これにより、以下のプロセスが実行されます：

1. **architecture-planner** がサイコロアプリの設計を計画
2. **tdd-guide** が TDD プロセスで実装をガイド
3. **code-reviewer** がコードレビュー（脆弱性発見→修正）

### 作成されるファイル

```
app/
  dice-app/
    index.html    # 高機能サイコロアプリ
```

### サイコロアプリの機能

- 3Dダイスビジュアライゼーション
- 複数のダイス同時ロール
- ダイスの種類選択（D4, D6, D8, D10, D12, D20）
- ロール結果の履歴
- アニメーション効果

## 完了条件

- [ ] architecture-planner エージェントが計画を作成する
- [ ] code-reviewer エージェントがレビューをする
- [ ] tdd-guide エージェントがTDDをガイドする
- [ ] サブエージェントを活用してアプリを作成する

## デモ動画

実際の動作デモはこちら：

[![Demo Tweet](https://img.shields.io/badge/Demo-Video-blue?style=social&logo=x)](https://x.com/hAru_mAki_ch/status/2013956124320641053)

## サブエージェントの仕組み

サブエージェントはメインのエージェントとは別のプロセスで動作し、それぞれの専門分野に集中します。

```
┌─────────────────────────────────────────────────────────┐
│                     メインエージェント                     │
│                  （全体の指揮・調整）                      │
└─────────────┬───────────────┬───────────────┬────────────┘
              │               │               │
      ┌───────▼──────┐ ┌─────▼─────┐ ┌──────▼──────┐
      │  planner     │ │ reviewer  │ │  tdd-guide  │
      │  （設計）     │ │ （レビュー）│ │ （TDD）     │
      └──────────────┘ └───────────┘ └─────────────┘
```

---

**前のステップ**: [Exercise 04: Hooks](../04_hooks/README.md)
**次のステップ**: [Exercise 06: MCP](../06_mcp/README.md)
