import { TV_PLATFORMS } from './types';

/**
 * Runtime detection for Smart TV platforms.
 * Each SDK exposes different globals / user-agent signatures.
 */
export function detectTVPlatform() {
  if (typeof window === 'undefined') return TV_PLATFORMS.WEB;

  const ua = (navigator.userAgent || '').toLowerCase();

  // Samsung Tizen — tizen global + Tizen in UA
  if (typeof window.tizen !== 'undefined' || ua.includes('tizen')) {
    return TV_PLATFORMS.TIZEN;
  }

  // LG webOS — webOS global or web0s in UA
  if (
    typeof window.webOS !== 'undefined' ||
    typeof window.PalmSystem !== 'undefined' ||
    ua.includes('web0s') ||
    ua.includes('webos')
  ) {
    return TV_PLATFORMS.WEBOS;
  }

  // Amazon Fire TV — AmazonWebAppPlatform or AFT* device models in UA
  if (
    typeof window.Amazon !== 'undefined' ||
    ua.includes('aftb') ||
    ua.includes('aftm') ||
    ua.includes('afts') ||
    ua.includes('aftt') ||
    ua.includes('fire tv') ||
    ua.includes('silk/')
  ) {
    return TV_PLATFORMS.FIRE_TV;
  }

  // Android TV / Google TV — Android + TV flag, no mobile
  if (
    (ua.includes('android') && (ua.includes('tv') || ua.includes('aft'))) ||
    ua.includes('googletv') ||
    ua.includes('crkey') // Chromecast with Google TV
  ) {
    return TV_PLATFORMS.ANDROID_TV;
  }

  // Dev override: ?platform=tizen|webos|firetv|androidtv
  const params = new URLSearchParams(window.location.search);
  const override = params.get('platform')?.toLowerCase();
  if (override && Object.values(TV_PLATFORMS).includes(override)) {
    return override;
  }

  return TV_PLATFORMS.WEB;
}

export function isSmartTVPlatform(platform) {
  return platform !== TV_PLATFORMS.WEB;
}

export function isTenFootUI(platform) {
  return isSmartTVPlatform(platform);
}
