#!/usr/bin/env bash
set -euo pipefail
ICON="AppStore/Branding/Spellful_App_Icon_1024.png"
ICON_DIR="ios/App/App/Assets.xcassets/AppIcon.appiconset"
if [ -f "$ICON" ] && [ -d "$ICON_DIR" ]; then
  cp "$ICON" "$ICON_DIR/AppIcon-512@2x.png"
  cat > "$ICON_DIR/Contents.json" <<'JSON'
{"images":[{"filename":"AppIcon-512@2x.png","idiom":"universal","platform":"ios","size":"1024x1024"}],"info":{"author":"xcode","version":1}}
JSON
  echo "Updated generated iOS icon assets."
else
  echo "Could not apply icon: check icon source and generated ios/ asset catalog." >&2
  exit 1
fi
