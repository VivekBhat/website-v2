#!/usr/bin/env bash

message=${1}

echo "Building app..."
ng build

echo "vivekbhat.me" > docs/CNAME
echo
echo "Pushing it to git.."

git add .
git commit -m "${message}"
git push
