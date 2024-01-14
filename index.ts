type Ticket = {
  source: string;
  destination: string;
};

export const findItinerary = (tickets: Ticket[]): string => {
  if (tickets.length === 0) return '';

  let cityMap: Map<string, string> = new Map();
  let allCities: Set<string> = new Set();
  let startCity: string | undefined;

  tickets.forEach((ticket) => {
    cityMap.set(ticket.source, ticket.destination);
    allCities.add(ticket.source);
    allCities.add(ticket.destination);
  });

  for (let ticket of tickets) {
    if (!Array.from(cityMap.values()).includes(ticket.source)) {
      startCity = ticket.source;
      break;
    }
  }

  if (!startCity) {
    return '';
  }

  let itinerary: string = startCity;
  let citiesVisited: Set<string> = new Set([startCity]);

  while (cityMap.has(startCity)) {
    startCity = cityMap.get(startCity)!;
    itinerary += ', ' + startCity;
    citiesVisited.add(startCity);
  }

  if (citiesVisited.size !== allCities.size) {
    return 'Disjointed Itinerary';
  }

  return itinerary;
};

let tickets: Ticket[] = [
  { source: 'Amsterdam', destination: 'Berlin' },
  { source: 'Paris', destination: 'London' },
  { source: 'London', destination: 'Amsterdam' },
];

console.log('Hi', findItinerary(tickets));
