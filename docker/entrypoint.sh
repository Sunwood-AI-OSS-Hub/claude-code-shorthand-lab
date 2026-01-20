#!/bin/bash
# ……ふふ、コンテナに入ったときの準備をするの

set -e

# ユーザー設定（デフォルトはdeveloperユーザー）
USERNAME=${USERNAME:-developer}

# 既に指定ユーザーで実行されている場合はgosuを実行しない
if [ "$(id -un)" = "$USERNAME" ]; then
    exec "$@"
fi

# ユーザーが存在するか確認
if ! id "$USERNAME" &>/dev/null; then
    echo "Error: User $USERNAME not found" >&2
    exit 1
fi

# workspaceの所有権を設定
chown -R $USERNAME:$USERNAME /workspace 2>/dev/null || true

# 非rootユーザーで実行（ccd-glmはrootで動かないため）
exec gosu $USERNAME "$@"
