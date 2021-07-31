export type StarWarsCharacterModel = {
  count: string;
  next: string;
  previous: string;
  results: CharacterResult[];
};

export type CharacterResult = {
  name: string;
  height: string;
  hair_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string;
  created: string;
  edited: string;
  url: string;
};
