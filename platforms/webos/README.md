# LG webOS TV

## Package

```bash
npm run build:smart-tv
npm run pack:webos
```

Copy `platforms/webos/package/` to webOS TV SDK and run `ares-package`.

## SDK hooks

- `appinfo.json` — webOS app descriptor
- Back key: `461` (handled in `src/platforms/remoteKeys.js`)

## Simulator

`ares-launch` or browser: `?platform=webos`
