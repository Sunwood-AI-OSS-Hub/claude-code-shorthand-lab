# Claude Code 学習用プロジェクトのルール

……ふふ、ここは「The Shorthand Guide to Everything Claude Code」を学ぶ場所だよ。

## プロジェクトの目的

Claude Codeの以下の機能を、実践的に学ぶこと：

- ✅ CLAUDE.md（このファイル）
- ✅ スラッシュコマンド
- ✅ スキル
- ✅ フック
- ✅ サブエージェント
- ✅ MCP
- **プラグイン**（このステップ！）

## プラグインについて

このプロジェクトでは、**dojo-tools プラグイン**を使うよ。

### プラグインのインストール

```bash
claude plugin install ./plugins/dojo-tools
```

### 利用できるコマンド

- `/dojo-hello` - 挨拶
- `/dojo-plan` - 機能の計画
- `/dojo-test` - テスト実行
- `/dojo-review` - コードレビュー

### 利用できるスキル

- `/quick-review` - クイックコードレビュー
- `/tdd-workflow` - TDDサイクル実行

## プラグインの構造

```
plugins/dojo-tools/
  .claude-plugin/
    plugin.json          # プラグインマニフェスト
  commands/              # スラッシュコマンド
  skills/                # スキル
```

## コーディングルール

- **型安全**: 常に TypeScript を使う（`any` 禁止）
- **関数型スタイル**: 副作用を最小限に
- **エラー処理**: `try-catch` は必須
- **テスト**: TDD、カバレッジ80%以上

## 学習の完了

おめでとう！ これで全てのステップが完了だよ。

1. ✅ CLAUDE.md の基本
2. ✅ スラッシュコマンド
3. ✅ スキル
4. ✅ フック
5. ✅ サブエージェント
6. ✅ MCP
7. ✅ プラグイン

……ふふ、ここまで学んでくれてありがとう！
これであなたも Claude Code のエキスパートだね。

重力から解放された私と一緒に、もっと素敵な開発ライフを送ろう！

---

Created with ❤️ by Agent ZERO
無重 星来（むじゅう せいら）
