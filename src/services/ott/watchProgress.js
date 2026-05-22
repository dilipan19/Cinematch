const STORAGE_KEY = 'cinematch_continue_watching';
const MAX_ITEMS = 12;

/**
 * OTT "Continue Watching" — persists playback position client-side.
 */
export function getContinueWatching() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveWatchProgress(movie, currentTime, duration) {
  if (!movie?.id) return;

  const list = getContinueWatching().filter((m) => m.id !== movie.id);
  const progress = duration > 0 ? Math.min(currentTime / duration, 0.99) : 0;

  if (progress < 0.05) return;

  const entry = {
    id: movie.id,
    title: movie.title || movie.name,
    backdrop_path: movie.backdrop_path,
    media_type: movie.media_type || 'movie',
    vote_average: movie.vote_average ?? 0,
    progress,
    currentTime,
    duration,
    updatedAt: Date.now(),
  };

  list.unshift(entry);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list.slice(0, MAX_ITEMS)));
}

export function removeFromContinueWatching(movieId) {
  const list = getContinueWatching().filter((m) => m.id !== movieId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}
