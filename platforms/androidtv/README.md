# Android TV / Google TV

Wrap the Vite build in a **Leanback WebView** Activity.

## Build steps

1. `npm run build:smart-tv`
2. Load `dist/index.html` from `file:///android_asset/` or HTTPS CDN.
3. Apply `platforms/androidtv/AndroidManifest.snippet.xml`.
4. Set `android:usesCleartextTraffic` only for dev.

## Test in browser

`http://localhost:5173/?platform=androidtv`
