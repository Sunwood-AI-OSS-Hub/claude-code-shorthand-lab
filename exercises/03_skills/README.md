# Exercise 03: Skills

## 目的

この Exercise では、**スキル**を使って複雑なワークフローを自動化する方法を学びます。

スラッシュコマンドは単純なプロンプトですが、スキルは条件分岐や参照資料を含む複雑なワークフローを定義できます。

## 新規追加ファイル

```
03_skills/
  .claude/
    CLAUDE.md              # 前のステップから継承
    commands/              # 前のステップから継承
    skills/                # スキル定義
      tdd-workflow/
        SKILL.md
        reference.md
      refactor-clean/
        SKILL.md
  app/                     # 前のステップと同じ
```

## 学習内容

1. **スキルの書き方**
   - `.claude/skills/<name>/SKILL.md` に定義
   - `reference.md` で参照資料を添付可能
   - 条件分岐や複雑なロジックを記述可能

2. **スキル vs コマンド**
   - コマンド: シンプルなプロンプトのショートカット
   - スキル: 複雑なワークフロー、参照資料付き

3. **実用的なスキルの例**
   - TDD ワークフロー
   - リファクタリングとクリーンアップ

## 実行手順

```bash
# 1. このディレクトリに移動
cd exercises/03_skills

# 2. Docker コンテナを起動
docker compose up -d

# 3. Claude Code を GLM4.7 で起動
docker compose exec dev bash -l - ccd-glm

# 4. スキルを使ってみる
/tdd-workflow 関数を追加する
```

> [!NOTE]
> `ccd-glm` は、GLM4.7（格安・高性能モデル）で Claude Code を起動するラッパーコマンドです。

## 完了条件

- [ ] `/tdd-workflow` でTDDサイクルが実行される
- [ ] `/refactor-clean` でコードがクリーンアップされる
- [ ] スキルが参照資料を使っている

## 動作確認

Claude Code で以下を実行してください：

```
/tdd-workflow べき乗の関数を追加して
```

テストから書き始めるTDDサイクルが実行されることを確認してください。

---

**前のステップ**: [Exercise 02: Slash Commands](../02_slash_commands/README.md)
**次のステップ**: [Exercise 04: フック](../04_hooks/README.md)
