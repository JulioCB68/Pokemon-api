import { PokemonId, PokemonValueDefault } from "../types/pokemons";

import { api } from "./api";

export const getPokemons = async (): Promise<PokemonId[]> => {
  const response = await api.get("/pokemon");
  const { results } = response.data;

  const payloadPokemons: PokemonId[] = await Promise.all(
    results.map(async (pokemon: PokemonValueDefault) => {
      const { id, name, types, species } = await getMoreInfoAboutPokemonsByUrl(
        pokemon.url
      );

      return {
        name,
        id,
        types,
        species,
      };
    })
  );
  return payloadPokemons;
};

const getMoreInfoAboutPokemonsByUrl = async (
  url: string
): Promise<PokemonId> => {
  const response = await api.get(url);
  const { id, name, types, species } = response.data;
  return { id, name, types, species };
};
