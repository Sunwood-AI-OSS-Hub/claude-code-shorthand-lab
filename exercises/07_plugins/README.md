# Exercise 07: Plugins

## 目的

この Exercise では、**プラグイン**を使って機能をパッケージ化し、別のプロジェクトでも使えるようにする方法を学びます。

スキル、MCP、フックなどをまとめて「プラグイン」として配布できます。

## 新規追加ファイル

```
07_plugins/
  .claude/
    CLAUDE.md              # 前のステップから継承
    commands/              # 前のステップから継承
    skills/                # 前のステップから継承
    settings.json          # 前のステップから継承
    agents/                # 前のステップから継承
  plugins/                 # プラグイン
    dojo-tools/
      .claude-plugin/
        plugin.json        # プラグインマニフェスト
      commands/
        dojo-hello.md
      skills/
        quick-review/
          SKILL.md
  app/                     # 前のステップと同じ
```

## 学習内容

1. **プラグインの構造**
   - `.claude-plugin/plugin.json` で定義
   - コマンド、スキル、設定を含められる

2. **プラグインの作成**
   - 既存のスキルをプラグイン化
   - プラグインマニフェストの書き方

3. **プラグインの共有**
   - プラグインの配布
   - 別プロジェクトでの利用

## 実行手順

```bash
# 1. このディレクトリに移動
cd exercises/07_plugins

# 2. Docker コンテナを起動
docker compose up -d

# 3. コンテナに入る
docker compose exec dev bash

# 4. プラグインをインストール
claude plugin install ./plugins/dojo-tools

# 5. プラグインのコマンドを使う
/dojo-hello
```

## 完了条件

- [ ] プラグインが認識されている
- [ ] プラグインのコマンドが使える
- [ ] プラグインのスキルが使える

## プラグインの仕組み

プラグインは「機能のまとめパッケージ」です。スキル、コマンド、フック、MCPなどをまとめて配布できます。

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
