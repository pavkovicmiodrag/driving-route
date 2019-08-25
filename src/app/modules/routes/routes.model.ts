import { v4 as uuid } from 'uuid';

export interface Location {
  latitude?: number;
  longitude?: number;
  formatted_address?: string;
  name?: string;
}

export interface Route {
  id: string;
  start: Location;
  end: Location;
  description?: string;
}

export function createLocation(params: Partial<Location>) {
  return {
    latitude: params.latitude,
    longitude: params.longitude,
    formatted_address: params.formatted_address,
    name: params.name
  } as Location;
}

export function createRoute(params: Partial<Route>) {
  return {
    id: uuid(),
    start: params.start,
    end: params.end,
    description: params.description
  } as Route;
}
