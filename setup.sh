#!/bin/bash

echo "🔧 Setting up Learning Works Credit Tracker..."

# Optional: Create required folders if missing
mkdir -p icons

# Set file permissions just in case
chmod +x popup.js
chmod +x setup.sh

echo "✅ Setup complete. You can now load the extension via chrome://extensions."
