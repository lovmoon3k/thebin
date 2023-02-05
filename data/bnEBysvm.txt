#!/bin/bash

counter=0

while true; do
  pipenv run python ./main.py
  if [ $? -ne 0 ]; then
    ((counter++))
    echo "Your script crashed with exit code $?. Restarting... (crash count: $counter)" >&2
    sleep 1
  else
    break
  fi
done