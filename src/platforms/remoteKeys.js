import { TV_PLATFORMS } from './types';

/**
 * Platform-specific remote / D-pad key codes.
 * @see Samsung Tizen TVInputDevice
 * @see LG webOS key codes
 * @see Android KeyEvent / Fire TV
 */
export const REMOTE_KEYS = {
  BACK: 'BACK',
  UP: 'UP',
  DOWN: 'DOWN',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
  ENTER: 'ENTER',
  PLAY: 'PLAY',
  PAUSE: 'PAUSE',
};

const TIZEN_KEY_MAP = {
  10009: REMOTE_KEYS.BACK,
  38: REMOTE_KEYS.UP,
  40: REMOTE_KEYS.DOWN,
  37: REMOTE_KEYS.LEFT,
  39: REMOTE_KEYS.RIGHT,
  13: REMOTE_KEYS.ENTER,
  415: REMOTE_KEYS.PLAY,
  19: REMOTE_KEYS.PAUSE,
};

const WEBOS_KEY_MAP = {
  461: REMOTE_KEYS.BACK,
  38: REMOTE_KEYS.UP,
  40: REMOTE_KEYS.DOWN,
  37: REMOTE_KEYS.LEFT,
  39: REMOTE_KEYS.RIGHT,
  13: REMOTE_KEYS.ENTER,
};

const STANDARD_KEY_MAP = {
  Escape: REMOTE_KEYS.BACK,
  Backspace: REMOTE_KEYS.BACK,
  ArrowUp: REMOTE_KEYS.UP,
  ArrowDown: REMOTE_KEYS.DOWN,
  ArrowLeft: REMOTE_KEYS.LEFT,
  ArrowRight: REMOTE_KEYS.RIGHT,
  Enter: REMOTE_KEYS.ENTER,
  ' ': REMOTE_KEYS.PLAY,
};

export function mapKeyEvent(platform, event) {
  const { key, keyCode } = event;

  if (platform === TV_PLATFORMS.TIZEN && TIZEN_KEY_MAP[keyCode]) {
    return TIZEN_KEY_MAP[keyCode];
  }
  if (platform === TV_PLATFORMS.WEBOS && WEBOS_KEY_MAP[keyCode]) {
    return WEBOS_KEY_MAP[keyCode];
  }
  if (STANDARD_KEY_MAP[key]) {
    return STANDARD_KEY_MAP[key];
  }

  // Android TV / Fire TV often use keyCode 4 for BACK
  if (
    (platform === TV_PLATFORMS.ANDROID_TV || platform === TV_PLATFORMS.FIRE_TV) &&
    keyCode === 4
  ) {
    return REMOTE_KEYS.BACK;
  }

  return null;
}

export function isBackKey(platform, event) {
  return mapKeyEvent(platform, event) === REMOTE_KEYS.BACK;
}
