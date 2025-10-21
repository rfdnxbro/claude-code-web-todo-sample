# TODOアプリ

ReactとTailwindCSSで作成したシンプルなTODOアプリです。

## 機能

- TODOの追加
- TODOの完了（削除）
- localStorageへの自動保存
- レスポンシブデザイン

## デモ

https://rfdnxbro.github.io/claude-code-web-todo-sample/

## セットアップ

### 必要な環境

- Node.js (v18以上推奨)
- npm または yarn

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/rfdnxbro/claude-code-web-todo-sample.git
cd claude-code-web-todo-sample

# 依存関係をインストール
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで http://localhost:5173 を開いてください。

### ビルド

```bash
npm run build
```

ビルドされたファイルは `dist` ディレクトリに出力されます。

## GitHub Pagesへのデプロイ

```bash
npm run deploy
```

このコマンドで自動的にビルドしてGitHub Pagesにデプロイされます。

## 技術スタック

- React 18
- Vite
- TailwindCSS
- localStorage

## 使い方

1. テキストボックスにTODOの内容を入力
2. 「登録」ボタンをクリック（またはEnterキーを押す）
3. TODOがリストに追加されます
4. 完了したTODOの「完了」ボタンをクリックで削除

データはブラウザのlocalStorageに保存されるため、ページをリロードしても保持されます。