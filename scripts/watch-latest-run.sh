#!/bin/bash

# This script finds the latest GitHub Actions workflow run and watches it until completion.

# Exit immediately if a command exits with a non-zero status.
set -e

WORKFLOW_NAME="$1"
if [ -z "$WORKFLOW_NAME" ]; then
  echo "Error: Workflow name must be provided as the first argument."
  echo "Usage: $0 <workflow_file_name.yml>"
  exit 1
fi

echo "-------------------------------------------------------------------"
echo "Waiting for the new workflow run to appear on GitHub..."
echo "-------------------------------------------------------------------"

# It can take a few seconds for the push to trigger the workflow and for it to be visible via the API.
# We will retry a few times before giving up.
ATTEMPTS=0
MAX_ATTEMPTS=5
DELAY=5
RUN_ID=""

while [ $ATTEMPTS -lt $MAX_ATTEMPTS ]; do
  RUN_ID=$(gh run list --workflow="$WORKFLOW_NAME" --limit=1 --json databaseId -q 'sort_by(.databaseId) | .[-1].databaseId' 2>/dev/null)
  if [ -n "$RUN_ID" ]; then
    break
  fi
  ATTEMPTS=$((ATTEMPTS + 1))
  if [ $ATTEMPTS -lt $MAX_ATTEMPTS ]; then
    echo "Run not found yet. Retrying in $DELAY seconds... (Attempt $ATTEMPTS/$MAX_ATTEMPTS)"
    sleep $DELAY
  fi
done

if [ -z "$RUN_ID" ]; then
  echo "Error: Could not find a recent workflow run for '$WORKFLOW_NAME' after $MAX_ATTEMPTS attempts."
  exit 1
fi

echo "Found workflow run ID: $RUN_ID"
echo "-------------------------------------------------------------------"
echo "Watching workflow progress... (This may take a few minutes)"
echo "-------------------------------------------------------------------"

# Watch the run and exit with its status
gh run watch "$RUN_ID"
