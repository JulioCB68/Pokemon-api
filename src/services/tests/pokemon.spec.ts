import { getPokemons } from "../pokemons";

import { pokemons } from "./mocks/responses";

describe("Http requests with Axios", () => {
  describe("Searching for pokemons", () => {
    test("it should correctly return data from the HTTP request", async () => {
      const expectedResponse = pokemons;

      const data = await getPokemons();
      expect(data).toStrictEqual(expectedResponse);
    });
  });
});
