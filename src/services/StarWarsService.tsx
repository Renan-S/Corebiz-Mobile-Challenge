import {StarWarsServiceFactory} from './StarWarsServiceFactory';

enum StarWarsUrlEnum {
  PEOPLE = 'https://swapi.dev/api/people/?page=1',
  PLANETS = 'https://swapi.dev/api/planets/?page=1',
  FILMS = 'https://swapi.dev/api/films/',
  SPECIES = 'https://swapi.dev/api/species/?page=1',
  VEHICLES = 'https://swapi.dev/api/vehicles/?page=1',
  STARSHIPS = 'https://swapi.dev/api/starships/?page=1',
}

const {PEOPLE, PLANETS, FILMS, SPECIES, VEHICLES, STARSHIPS} = StarWarsUrlEnum;

export const getStarWarsPeople = StarWarsServiceFactory(PEOPLE);
export const getStarWarsPlanets = StarWarsServiceFactory(PLANETS);
export const getStarWarsMovies = StarWarsServiceFactory(FILMS);
export const requestStartWarsSpecies = StarWarsServiceFactory(SPECIES);
export const requestStartWarsVehicles = StarWarsServiceFactory(VEHICLES);
export const requestStartWarsStarships = StarWarsServiceFactory(STARSHIPS);
