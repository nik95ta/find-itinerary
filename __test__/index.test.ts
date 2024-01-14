import { findItinerary } from '../index';

describe('findItinerary', () => {
  it('should return an empty string for an empty array of tickets', () => {
    expect(findItinerary([])).toBe('');
  });

  it('should handle cases with a single ticket', () => {
    const tickets = [{ source: 'New York', destination: 'Los Angeles' }];
    expect(findItinerary(tickets)).toBe('New York, Los Angeles');
  });

  it('should correctly reconstruct the itinerary for a given set of tickets', () => {
    const tickets = [
      { source: 'Amsterdam', destination: 'Berlin' },
      { source: 'Paris', destination: 'London' },
      { source: 'London', destination: 'Amsterdam' },
    ];
    expect(findItinerary(tickets)).toBe('Paris, London, Amsterdam, Berlin');
  });

  it('should handle disjointed itineraries', () => {
    const tickets = [
      { source: 'Amsterdam', destination: 'Berlin' },
      { source: 'Paris', destination: 'London' },
    ];
    expect(findItinerary(tickets)).toBe('Disjointed Itinerary');
  });
});
