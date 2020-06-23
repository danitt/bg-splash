#!/bin/sh

# Add node to path
. ~/.nvm/nvm.sh

# Override HOME dir if provided
HOME_OVERRIDE=$1
if [[ -n "$HOME_OVERRIDE" ]]; then
  HOME=$HOME_OVERRIDE
fi

# Compose path to project
REL_PATH="`dirname \"$0\"`"              # relative pwd
ABS_PATH="`( cd \"$REL_PATH\" && pwd )`"  # absolutized and normalized path

# Launch script
/usr/local/bin/yarn --cwd $ABS_PATH fetch:inspiro