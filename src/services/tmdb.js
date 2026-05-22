import { mockTrending, mockTopRated, mockAction } from './mockData';

// Simulating network delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const tmdbApi = {
  getTrending: async () => {
    await delay(500);
    return { data: { results: mockTrending } };
  },
  getTopRated: async () => {
    await delay(500);
    return { data: { results: mockTopRated } };
  },
  getActionMovies: async () => {
    await delay(500);
    return { data: { results: mockAction } };
  }
};
