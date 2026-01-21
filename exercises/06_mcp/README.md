# Exercise 06: MCP

## 目的

この Exercise では、**Model Context Protocol (MCP)** を使って外部サービスと連携する方法を学びます。

データベース、API、他のツールなどをClaude Codeから直接アクセスできるようになります。

## 新規追加ファイル

```
06_mcp/
  .mcp.json                # MCP設定（このステップで学ぶ）
  mcp-server/              # 学習用簡易MCPサーバー
    README.md
    package.json
    src/
  app/
```

## 学習内容

1. **MCPの基本**
   - `.mcp.json` での設定
   - MCPサーバーの起動
   - ツールとしての利用

2. **自作MCPサーバー**
   - 簡易MCPサーバーの構造
   - ツールの定義方法
   - リソースの提供方法

3. **実用的なMCPの例**
   - データベース接続
   - ファイルシステム拡張
   - 外部APIとの連携

## 実行手順

```bash
# 1. このディレクトリに移動
cd exercises/06_mcp

# 2. Docker コンテナを起動（MCPサーバー付き）
docker compose up -d

# 3. コンテナに入る（developer ユーザー）
docker compose run --rm dev

# 4. Claude Code を起動
ccd-glm

# 5. MCP経由でデータにアクセス
# 「MCPサーバーのデータを取得して」と言ってみてください
```

> [!NOTE]
> `docker compose run --rm dev` で developer ユーザーとしてコンテナに入り、`ccd-glm` で Claude Code を起動します。

## 完了条件

- [ ] MCPサーバーが起動している
- [ ] Claude Code からMCPツールを使える
- [ ] データの取得・更新ができる

## MCPの仕組み

MCPは「プロンプト駆動のラッパー」です。APIを直接呼ぶのではなく、Claudeが自然なリクエストを理解して、適切なツールを呼び出します。

---

**前のステップ**: [Exercise 05: サブエージェント](../05_subagents/README.md)
**次のステップ**: [Exercise 07: プラグイン](../07_plugins/README.md)
