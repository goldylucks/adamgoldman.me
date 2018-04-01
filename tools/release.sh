#!/bin/bash

# Bail on first error
# See https://medium.com/@nthgergo/publishing-gh-pages-with-travis-ci-53a8270e87db
set -o errexit

BRANCH=$(git rev-parse --abbrev-ref HEAD)

if [ "${BRANCH}" != 'master' ]; then
  echo "must release from master"
  exit 0
fi

echo "pushing master"
git push
echo "checking out release branch"
git checkout release
echo "resetting release branch to master"
git reset --hard master
echo "pushing release branch"
git push -f --no-verify
echo "back to master"
git checkout master