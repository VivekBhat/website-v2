#!/usr/bin/env bash

message=${1}

echo "Building app..."
ng build

git add .
git commit -m "${message}"
git push
