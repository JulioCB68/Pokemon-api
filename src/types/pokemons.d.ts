export interface Pokemons {
  count: number;
  next: string;
  previous: null | string;
  results: {
    name: string;
    url: string;
  }[];
}

interface PokemonType {
  slot: number;
  type: { name: string; url: string };
}

interface PokemonSpecies {
  name: string;
  url: string;
}

export interface Pokemon {
  name: string;
  url: string;
  id: number;
  types: PokemonType[];
  species: PokemonSpecies;
}

export interface PokemonId {
  id: number;
  name: string;
  types: PokemonType[];
  species: PokemonSpecies;
}
