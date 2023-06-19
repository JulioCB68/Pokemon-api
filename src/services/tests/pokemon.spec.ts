import { getAllPokemons, getPokemon } from "../pokemons";

import { pokemonId, pokemons } from "./mocks/responses";

describe("Http requests with Axios", () => {
  describe("Searching for all pokemons", () => {
    test("should correctly return data from the HTTP request", async () => {
      const expectedResponse = pokemons;

      const data = await getAllPokemons();
      expect(data).toStrictEqual(expectedResponse);
    });
  });

  describe("Searching for a specific pokemon", () => {
    test("should correctly return data from the HTTP request", async () => {
      const expectedResponse = pokemonId;

      const data = await getPokemon();
      expect(data).toStrictEqual(expectedResponse);
    });
  });
});
