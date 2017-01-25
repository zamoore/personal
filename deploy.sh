#!/bin/bash
if [ -d "dist" ]; then
  rm -r dist
fi
ember build --environment=production && firebase deploy
