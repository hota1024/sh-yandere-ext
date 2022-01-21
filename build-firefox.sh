npm run build
rm firefox-build.zip
zip firefox-build.zip src/ui/ui.html manifest.json -r dist -r assets
