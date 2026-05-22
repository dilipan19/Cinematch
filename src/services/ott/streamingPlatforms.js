/** OTT provider catalog — used in preference matching & deep-link metadata */
export const OTT_PROVIDERS = [
  { id: 'netflix', name: 'Netflix', color: '#e50914' },
  { id: 'prime', name: 'Amazon Prime Video', color: '#00a8e1' },
  { id: 'disney', name: 'Disney+', color: '#113ccf' },
  { id: 'hulu', name: 'Hulu', color: '#1ce783' },
  { id: 'hbo', name: 'Max (HBO)', color: '#b535f6' },
  { id: 'apple', name: 'Apple TV+', color: '#fafafa' },
  { id: 'other', name: 'Other', color: '#71717a' },
];

export function getProviderById(id) {
  return OTT_PROVIDERS.find((p) => p.id === id) || OTT_PROVIDERS[OTT_PROVIDERS.length - 1];
}
