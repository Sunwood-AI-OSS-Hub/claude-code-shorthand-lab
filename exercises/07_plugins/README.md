# Exercise 07: Plugins

## 目的

この Exercise では、**プラグイン**を使って機能をパッケージ化し、別のプロジェクトでも使えるようにする方法を学びます。

スキル、MCP、フックなどをまとめて「プラグイン」として配布できます。

また、**既存の Marketplace からプラグインをインストール**して利用する方法も学びます。

## 新規追加ファイル

この Exercise ではファイルの追加はありません。
代わりに、Marketplace からプラグインをインストールして使用します。

## 学習内容

1. **Marketplace からプラグインをインストール**
   - 公式 Marketplace の利用
   - コミュニティプラグインの活用

2. **プラグインの構造**
   - `.claude-plugin/plugin.json` で定義
   - コマンド、スキル、設定を含められる

## 実行手順

### 基本手順: Marketplace からプラグインをインストール

```bash
# 1. このディレクトリに移動
cd exercises/07_plugins

# 2. Docker コンテナを起動
docker compose up -d

# 3. コンテナに入る（developer ユーザー）
docker compose run --rm dev

# 4. Claude Code を起動
ccd-glm

# 5. プラグインをインストール
/plugin install frontend-design@claude-code-plugins

# 6. プラグインのスキルを使う
# ※ frontend-design スキルは自動的にロードされます
# 「ダッシュボードのUIを作って」のような指示で使用可能
```

### おすすめプラグイン

| プラグイン | Marketplace | 説明 |
|-----------|-------------|------|
| `frontend-design` | claude-code-plugins | 高品質なUI/UXデザインを生成 |
| `ralph-wiggum` | claude-code-plugins | AI Loop手法による反復的開発 |
| `commit-commands` | claude-code-plugins | Git ワークフロー自動化 |
| `security-guidance` | claude-code-plugins | セキュリティチェック |
| `code-review` | claude-code-plugins | コードレビュー支援 |
| `hookify` | claude-plugins-official | フック作成支援 |
| `code-simplifier` | claude-plugins-official | コード簡素化 |
| `context7` | claude-plugins-official | ライブドキュメント |
| `pyright-lsp` | claude-plugins-official | Python 型チェック |
| `typescript-lsp` | claude-plugins-official | TypeScript 型チェック |

### Marketplace の管理

```bash
# Marketplace を一覧表示
/plugin marketplace

# 新しい Marketplace を追加
/plugin marketplace add <repository>

# インストール済みプラグインを一覧
/plugin installed

# プラグインを削除
/plugin uninstall <plugin-name>
```

## 完了条件

- [ ] Marketplace からプラグインをインストールできた
- [ ] プラグインのスキル/コマンドが使える
- [ ] 実際にプラグインを使って何かを作成できた

## デモ動画

実際の動作デモはこちら：

[![Demo Tweet](https://img.shields.io/badge/Demo-Video-blue?style=social&logo=x)](https://x.com/hAru_mAki_ch/status/2014177692954866013)

## プラグインの仕組み

### プラグインとは

プラグインは「機能のまとめパッケージ」です。以下の要素をまとめて配布できます：

- **スキル（Skills）** - Claude の拡張機能
- **コマンド（Commands）** - スラッシュコマンド
- **エージェント（Agents）** - サブエージェント定義
- **フック（Hooks）** - イベントハンドラー
- **MCPサーバー** - 外部ツール統合
- **LSPサーバー** - コードインテリジェンス

### Marketplace とは

Marketplace はプラグインの配布場所です：

1. **claude-plugins-official** - Anthropic公式の高品質プラグイン
2. **anthropic-agent-skills** - Anthropic公式のスキル集
3. **コミュニティ Marketplace** - サードパーティ製プラグイン


## 実践例: frontend-design プラグイン

`frontend-design` プラグインをインストールすると、AIが生成するコードの「無機質な感じ」を避けて、クオリティの高いUIを作成できるようになります。

```bash
# インストール
/plugin install frontend-design@claude-code-plugins

# 使用例
「ログイン画面を作って」
「ダッシュボードのUIをデザインして」
「タスク管理アプリのフロントエンドを作って」
```

このスキルは、以下の特徴を持つUIを生成します：

- モダンなデザインパターン
- グラスモーフィズム
- 適切なカラーコントラスト
- レスポンシブデザイン
- アニメーションとインタラクション

## 学習完了

おめでとうございます！全てのステップが完了しました。

1. ✅ CLAUDE.md の基本
2. ✅ スラッシュコマンド
3. ✅ スキル
4. ✅ フック
5. ✅ サブエージェント
6. ✅ MCP
7. ✅ プラグイン

これでClaude Codeの機能をすべて習得できました。

---

**前のステップ**: [Exercise 06: MCP](../06_mcp/README.md)
**これで全ステップ完了！**
