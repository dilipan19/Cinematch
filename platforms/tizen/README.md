# Samsung Tizen TV

## Package

```bash
npm run build:smart-tv
npm run pack:tizen
```

Output: `platforms/tizen/www/` — import as Tizen Web project in Tizen Studio.

## SDK hooks

- `config.xml` — app manifest
- `src/platforms/init.js` — `tizen.tvinputdevice.registerKeyBatch`
- Back key: `10009`

## Emulator test URL

Deploy `www` to Tizen simulator or use browser: `?platform=tizen`
