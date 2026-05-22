import { TV_PLATFORMS } from './types';

/**
 * Register platform SDK hooks when running inside native TV WebViews.
 */
export function initPlatformSDK(platform) {
  if (typeof window === 'undefined') return;

  switch (platform) {
    case TV_PLATFORMS.TIZEN:
      initTizen();
      break;
    case TV_PLATFORMS.WEBOS:
      initWebOS();
      break;
    case TV_PLATFORMS.FIRE_TV:
      initFireTV();
      break;
    case TV_PLATFORMS.ANDROID_TV:
      initAndroidTV();
      break;
    default:
      break;
  }
}

function initTizen() {
  try {
    if (window.tizen?.tvinputdevice?.registerKeyBatch) {
      window.tizen.tvinputdevice.registerKeyBatch([
        'MediaPlay',
        'MediaPause',
        'MediaStop',
        'MediaRewind',
        'MediaFastForward',
      ]);
    } else if (window.tizen?.tvinputdevice?.registerKey) {
      ['MediaPlay', 'MediaPause', 'MediaStop'].forEach((key) => {
        try {
          window.tizen.tvinputdevice.registerKey(key);
        } catch {
          /* key may be unavailable on emulator */
        }
      });
    }
  } catch (err) {
    console.warn('[Tizen] TV input device registration skipped:', err);
  }
}

function initWebOS() {
  try {
    if (window.webOS?.platform?.tv) {
      document.body.classList.add('platform-webos');
    }
    // webOS back is handled via keydown 461 in remoteKeys.js
    if (typeof window.webOS?.platformBack === 'function') {
      window.addEventListener('webOSRelaunch', () => {
        document.body.classList.add('platform-webos-relaunch');
      });
    }
  } catch (err) {
    console.warn('[webOS] init skipped:', err);
  }
}

function initFireTV() {
  document.body.classList.add('platform-firetv');
  if (window.Amazon?.Page?.prototype?.setFullscreen) {
    try {
      window.Amazon.Page.prototype.setFullscreen(true);
    } catch {
      /* not in hosted app context */
    }
  }
}

function initAndroidTV() {
  document.body.classList.add('platform-androidtv');
  document.documentElement.setAttribute('data-ott-device', 'android-tv');
}
