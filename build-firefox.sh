rm -rf firefox-build
mkdir -p firefox-build/src/ui
cp -r dist firefox-build/dist
cp -r assets firefox-build/assets
cp src/ui/ui.html firefox-build/src/ui/ui.html
cp manifest.json firefox-build/manifest.json
zip firefox-build firefox-build