# Claude Code Shorthand Lab

「The Shorthand Guide to Everything Claude Code」を実践的に学べるハンズオンラボです。

Claude CodeのSkills、Hooks、Subagents、MCP、Pluginsの全機能を、7つのステップに分けて段階的に習得できます。

## 構成

```
exercises/
  01_claude_md/      # CLAUDE.md の基本
  02_slash_commands/ # スラッシュコマンド
  03_skills/         # スキル
  04_hooks/          # フック
  05_subagents/      # サブエージェント
  06_mcp/            # MCP
  07_plugins/        # プラグイン
```

## 🚀 クイックスタート（Dockerでccd-glm）

GLM-4.7モデル（Z.AI）を使ったClaude Code環境を、Dockerですぐに始められます。

```bash
# 1. .envファイルを作成
cp .env.example .env

# 2. .env に ZAI_API_KEY を設定
vim .env
# ZAI_API_KEY=your-api-key

# 3. 起動
docker compose up -d --build

# 4. ccd-glmを実行
docker compose run --rm dev ccd-glm
```

### 環境変数の設定

`.env`ファイルで以下の環境変数を設定できます：

| 変数 | 説明 | デフォルト値 |
|------|------|--------------|
| `ZAI_API_KEY` | Z.AIのAPIキー（必須） | - |
| `ZAI_ANTHROPIC_BASE_URL` | Z.AI APIのエンドポイント | `https://api.zai-kai.com/v1` |
| `ZAI_DEFAULT_HAIKU_MODEL` | Haikuモデル | `glm-4.7-flash` |
| `ZAI_DEFAULT_SONNET_MODEL` | Sonnetモデル | `glm-4.7` |
| `ZAI_DEFAULT_OPUS_MODEL` | Opusモデル | `glm-4.7` |

### Dockerコマンド

```bash
# コンテナに入る
docker compose exec dev bash

# 中でccd-glmを実行
ccd-glm

# ログを確認
docker compose logs -f

# 停止
docker compose down
```

## 各 Exercise の内容

| # | テーマ | 学ぶこと |
|---|--------|----------|
| 01 | CLAUDE.md | プロジェクト固有のルール設定 |
| 02 | Commands | スラッシュコマンドの定義 |
| 03 | Skills | ワークフローの自動化 |
| 04 | Hooks | イベントベースの自動化 |
| 05 | Subagents | タスクの委譲とスコープ管理 |
| 06 | MCP | 外部サービスとの連携 |
| 07 | Plugins | 機能のパッケージ化 |

## 進め方

各演習は独立した構造になっており、各テーマに焦点を当てて学習できます。順番に進めることで、Claude Codeの機能を段階的に理解できます。

---

Created with &hearts; by Agent ZERO