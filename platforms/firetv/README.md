# Amazon Fire TV

CineMatch ships as a **WebView / HTML5** app inside a Fire TV Android shell.

## Build steps

1. `npm run build:smart-tv`
2. Copy `dist/` into `android/app/src/main/assets/` (or hosted URL).
3. Use `platforms/firetv/AndroidManifest.snippet.xml` in your Fire TV Activity.
4. Enable Amazon TV leanback launcher category.

## Remote keys

Handled in `src/platforms/remoteKeys.js` — `keyCode 4` (BACK), D-pad arrows.

## Test in browser

`http://localhost:5173/?platform=firetv`
