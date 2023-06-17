import { PokemonsData } from "../types/pokemons";

import { api } from "./api";

export const pokemons = async (): Promise<PokemonsData> => {
  const response = await api.get("/pokemon");
  return response.data;
};
