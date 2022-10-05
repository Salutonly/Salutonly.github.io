#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd public

git init
git add .
git commit -m 'deploy'

# git remote add origin git@github.com:salutonly/salutonly.github.io.git

# git branch -M main
# git push -u origin main

git push -f git@github.com:salutonly/salutonly.github.io.git main


cd ../
# rm -rf public