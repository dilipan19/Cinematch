const FOCUS_SELECTOR = '.tv-focus-element, a[href], button:not([disabled]), [tabindex="0"]';

function getFocusables(root = document) {
  return Array.from(root.querySelectorAll(FOCUS_SELECTOR)).filter(
    (el) => el.offsetParent !== null && !el.hasAttribute('disabled')
  );
}

function rectCenter(el) {
  const r = el.getBoundingClientRect();
  return { x: r.left + r.width / 2, y: r.top + r.height / 2, el };
}

/**
 * D-pad spatial navigation for Smart TV (10-foot UI).
 * Moves focus to the nearest element in arrow direction.
 */
export function focusInDirection(direction) {
  const items = getFocusables();
  if (!items.length) return false;

  const active = document.activeElement;
  const current = items.includes(active) ? active : items[0];
  const cur = rectCenter(current);

  let best = null;
  let bestDist = Infinity;

  for (const el of items) {
    if (el === current) continue;
    const p = rectCenter(el);
    const dx = p.x - cur.x;
    const dy = p.y - cur.y;

    const matches =
      (direction === 'left' && dx < -20) ||
      (direction === 'right' && dx > 20) ||
      (direction === 'up' && dy < -20) ||
      (direction === 'down' && dy > 20);

    if (!matches) continue;

    const dist = Math.hypot(dx, dy);
    if (dist < bestDist) {
      bestDist = dist;
      best = el;
    }
  }

  if (best) {
    best.focus();
    return true;
  }
  return false;
}

export function handleSpatialKey(platform, event, mapKeyEvent) {
  const action = mapKeyEvent(platform, event);
  if (!action) return false;

  if (['UP', 'DOWN', 'LEFT', 'RIGHT'].includes(action)) {
    event.preventDefault();
    const dir = action.toLowerCase();
    return focusInDirection(dir);
  }
  return false;
}
