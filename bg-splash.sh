#!/bin/sh

# Override HOME dir if provided
HOME_OVERRIDE=$1
if [[ -n "$HOME_OVERRIDE" ]]; then
  HOME=$HOME_OVERRIDE
fi

# Add node to path
export PATH="/usr/local/bin:$PATH"
# Add yarn to path
export PATH="$HOME/.yarn/bin:$PATH"

# Compose path to project
REL_PATH="`dirname \"$0\"`"              # relative pwd
ABS_PATH="`( cd \"$REL_PATH\" && pwd )`"  # absolutized and normalized path

# Launch script
yarn --cwd $ABS_PATH start