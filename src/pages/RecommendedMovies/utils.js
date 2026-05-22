export const genreMap = {
    action: 28,
    comedy: 35,
    drama: 18,
    thriller: 53,
    romance: 10749,
    'sci-fi': 878,
    horror: 27,
    animation: 16,
    documentary: 99,
    fantasy: 14,
  };
  
  export const releaseMap = {
    latest: '2023-01-01',
    '2010s': '2010-01-01',
    '2000s': '2000-01-01',
    '90s': '1990-01-01',
    classic: '1900-01-01',
    any: null,
  };
  
  export const buildTmdbQuery = (prefs) => {
    const API_KEY = 'ae880032e96e07433f54b5c99c0b24c1';
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`;
  
    if (prefs.genre && genreMap[prefs.genre]) {
      url += `&with_genres=${genreMap[prefs.genre]}`;
    }
  
    if (prefs.release && releaseMap[prefs.release]) {
      url += `&primary_release_date.gte=${releaseMap[prefs.release]}`;
    }
  
    if (prefs.language && prefs.language !== 'other') {
      url += `&with_original_language=${prefs.language}`;
    }
  
    // Runtime filter
    if (prefs.duration === 'short') {
      url += '&with_runtime.lte=90';
    } else if (prefs.duration === 'medium') {
      url += '&with_runtime.gte=90&with_runtime.lte=120';
    } else if (prefs.duration === 'long') {
      url += '&with_runtime.gte=120';
    }
  
    return url;
  };
  