import { api } from "../api";
import { getPokemons, getPokemonsByName } from "../pokemons";

import { pokemon, pokemons } from "./mocks/responses";

describe("Http requests with Axios", () => {
  describe("Searching for pokemons", () => {
    test("it should correctly return data from the HTTP request", async () => {
      const expectedResponse = pokemons;

      const data = await getPokemons();
      expect(data).toStrictEqual(expectedResponse);
    });
  });

  describe("Searching for pokemons by name", () => {
    test("it should correctly return data from the HTTP request", async () => {
      const expectedResponse = pokemon;

      const data = await getPokemonsByName("bulbasaur");
      expect(data).toStrictEqual(expectedResponse);
    });
  });
});
