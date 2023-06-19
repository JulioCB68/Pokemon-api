interface PokemonType {
  slot: number;
  type: { name: string; url: string };
}

interface PokemonValueDefault {
  name: string;
  url: string;
}

export interface PokemonId {
  id: number;
  name: string;
  types: PokemonType[];
  species: PokemonValueDefault;
}
