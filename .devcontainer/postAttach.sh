#!/usr/bin/env bash
set -eux

git config --global --add safe.directory /usr/src/calitp

# this triggers a node.js install using version specified in mise.toml
mise exec -- npm ci

# initialize hook environments
pre-commit install --install-hooks --overwrite

# manage commit-msg hooks
pre-commit install --hook-type commit-msg
