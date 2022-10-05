#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 上传
git init
git add -A
git commit -m 'feat: add doc'


git remote add origin git@github.com:salutonly/salutonly.github.io.git


# 上传源码部分到main分支
git push -f git@github.com:salutonly/salutonly.github.io.git main