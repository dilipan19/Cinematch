# OTT & Smart TV Coverage Matrix

## 1. Mandatory OTT domain experience

| OTT capability | Status | Implementation |
|----------------|--------|----------------|
| Content catalog (movies/series) | ✅ | TMDB + home carousels (`tmdbSlice`, `Carousel`) |
| Hero / featured title | ✅ | `HeroBanner` |
| Personalized recommendations | ✅ | `QuestionPage` → `RecommendedMovies` |
| Video playback | ✅ | `Player` (HTML5) |
| Continue watching | ✅ | `services/ott/watchProgress.js`, `ContinueWatching` |
| Streaming platform preferences | ✅ | Question form + `OTT_PROVIDERS` |
| Content rails taxonomy | ✅ | `CONTENT_RAILS` in `services/ott/contentTypes.js` |
| Ratings & metadata | ✅ | `MovieCard` (TMDB vote_average) |
| Captions track (OTT standard) | ✅ | `<track kind="captions">` in Player |
| DRM / studio licensing | ⏳ | Requires Widevine/FairPlay SDK (production) |
| Live TV / EPG | ⏳ | Not in scope for V1 |
| Subscription billing | ⏳ | Requires Stripe / IAP integration |

**Verdict:** Core OTT **browsing + playback + personalization** patterns are covered for portfolio/demo. Production OTT needs DRM, CDN, and auth.

---

## 2. Smart TV platforms (Tizen, webOS, Fire TV, Android TV)

| Platform | Detection | Remote / D-pad | SDK init | Package config |
|----------|-----------|----------------|----------|----------------|
| **Samsung Tizen** | ✅ `detect.js` | ✅ key `10009` back, media keys | ✅ `init.js` `registerKeyBatch` | ✅ `platforms/tizen/config.xml` + `npm run pack:tizen` |
| **LG webOS** | ✅ | ✅ key `461` back | ✅ `init.js` | ✅ `platforms/webos/appinfo.json` + `npm run pack:webos` |
| **Amazon Fire TV** | ✅ UA + `?platform=firetv` | ✅ `keyCode 4` back | ✅ `init.js` | ✅ `platforms/firetv/AndroidManifest.snippet.xml` |
| **Android TV** | ✅ UA + `?platform=androidtv` | ✅ leanback back | ✅ `init.js` | ✅ `platforms/androidtv/AndroidManifest.snippet.xml` |
| Spatial D-pad navigation | ✅ | `utils/spatialNavigation.js` | | |
| 10-foot UI scaling | ✅ | `body.tv-ten-foot-ui` in `index.css` | | |
| TV-safe focus rings | ✅ | `.tv-focus-element` | | |

**Verdict:** All four platforms are **architecturally covered** in this repo. Native `.wgt` / `.ipk` signing requires **Tizen Studio** and **webOS CLI** on your machine.

---

## Test Smart TV modes in browser

```
http://localhost:5173/?platform=tizen
http://localhost:5173/?platform=webos
http://localhost:5173/?platform=firetv
http://localhost:5173/?platform=androidtv
```

Navbar shows the active platform badge.

---

## Build for TV stores

```bash
npm run build:smart-tv
npm run pack:tizen   # → platforms/tizen/www
npm run pack:webos   # → platforms/webos/package
```

Fire TV / Android TV: wrap `dist/` in Android Studio using manifest snippets under `platforms/firetv` and `platforms/androidtv`.
