missing=""
for script in start build deploy test; do
  if ! jq -e --arg s "$script" '.scripts[$s]' package.json > /dev/null; then
    missing="$missing $script"
  fi
done
if [ -n "$missing" ]; then
  echo "❌ Missing required scripts in package.json:$missing"
  exit 1
else
  echo "✅ All required scripts found."
fi
