#!/usr/bin/env sh

# остановить публикацию при ошибках
set -e


npm run build

git add dist
git commit -m 'deploy'
git subtree push --prefix dist origin gh-pages


