import { Pokemons, Pokemon, PokemonId } from "../types/pokemons";

import { api } from "./api";

export const getAllPokemons = async (): Promise<Pokemons> => {
  const response = await api.get("/pokemon");
  return response.data;
};

export const getPokemon = async (): Promise<PokemonId> => {
  const response = await api.get("/pokemon/1");
  const { id, name, types, species } = response.data;
  return { id, name, types, species };
};
