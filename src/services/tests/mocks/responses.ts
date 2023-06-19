import { PokemonId } from "@/types/pokemons";

// export const pokemons: Pokemons = {
//   count: 1281,
//   next: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
//   previous: null,
//   results: [
//     {
//       name: "bulbasaur",
//       url: "https://pokeapi.co/api/v2/pokemon/1/",
//     },
//     {
//       name: "ivysaur",
//       url: "https://pokeapi.co/api/v2/pokemon/2/",
//     },
//     {
//       name: "venusaur",
//       url: "https://pokeapi.co/api/v2/pokemon/3/",
//     },
//     {
//       name: "charmander",
//       url: "https://pokeapi.co/api/v2/pokemon/4/",
//     },
//     {
//       name: "charmeleon",
//       url: "https://pokeapi.co/api/v2/pokemon/5/",
//     },
//     {
//       name: "charizard",
//       url: "https://pokeapi.co/api/v2/pokemon/6/",
//     },
//     {
//       name: "squirtle",
//       url: "https://pokeapi.co/api/v2/pokemon/7/",
//     },
//     {
//       name: "wartortle",
//       url: "https://pokeapi.co/api/v2/pokemon/8/",
//     },
//     {
//       name: "blastoise",
//       url: "https://pokeapi.co/api/v2/pokemon/9/",
//     },
//     {
//       name: "caterpie",
//       url: "https://pokeapi.co/api/v2/pokemon/10/",
//     },
//     {
//       name: "metapod",
//       url: "https://pokeapi.co/api/v2/pokemon/11/",
//     },
//     {
//       name: "butterfree",
//       url: "https://pokeapi.co/api/v2/pokemon/12/",
//     },
//     {
//       name: "weedle",
//       url: "https://pokeapi.co/api/v2/pokemon/13/",
//     },
//     {
//       name: "kakuna",
//       url: "https://pokeapi.co/api/v2/pokemon/14/",
//     },
//     {
//       name: "beedrill",
//       url: "https://pokeapi.co/api/v2/pokemon/15/",
//     },
//     {
//       name: "pidgey",
//       url: "https://pokeapi.co/api/v2/pokemon/16/",
//     },
//     {
//       name: "pidgeotto",
//       url: "https://pokeapi.co/api/v2/pokemon/17/",
//     },
//     {
//       name: "pidgeot",
//       url: "https://pokeapi.co/api/v2/pokemon/18/",
//     },
//     {
//       name: "rattata",
//       url: "https://pokeapi.co/api/v2/pokemon/19/",
//     },
//     {
//       name: "raticate",
//       url: "https://pokeapi.co/api/v2/pokemon/20/",
//     },
//   ],
// };

export const pokemons: PokemonId[] = [
  {
    id: 1,
    name: "bulbasaur",
    species: {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon-species/1/",
    },
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
      },
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      },
    ],
  },
  {
    id: 2,
    name: "ivysaur",
    species: {
      name: "ivysaur",
      url: "https://pokeapi.co/api/v2/pokemon-species/2/",
    },
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
      },
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      },
    ],
  },
  {
    id: 3,
    name: "venusaur",
    species: {
      name: "venusaur",
      url: "https://pokeapi.co/api/v2/pokemon-species/3/",
    },
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
      },
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      },
    ],
  },
  {
    id: 4,
    name: "charmander",
    species: {
      name: "charmander",
      url: "https://pokeapi.co/api/v2/pokemon-species/4/",
    },
    types: [
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
      },
    ],
  },
  {
    id: 5,
    name: "charmeleon",
    species: {
      name: "charmeleon",
      url: "https://pokeapi.co/api/v2/pokemon-species/5/",
    },
    types: [
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
      },
    ],
  },
  {
    id: 6,
    name: "charizard",
    species: {
      name: "charizard",
      url: "https://pokeapi.co/api/v2/pokemon-species/6/",
    },
    types: [
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
      },
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      },
    ],
  },
  {
    id: 7,
    name: "squirtle",
    species: {
      name: "squirtle",
      url: "https://pokeapi.co/api/v2/pokemon-species/7/",
    },
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
      },
    ],
  },
  {
    id: 8,
    name: "wartortle",
    species: {
      name: "wartortle",
      url: "https://pokeapi.co/api/v2/pokemon-species/8/",
    },
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
      },
    ],
  },
  {
    id: 9,
    name: "blastoise",
    species: {
      name: "blastoise",
      url: "https://pokeapi.co/api/v2/pokemon-species/9/",
    },
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
      },
    ],
  },
  {
    id: 10,
    name: "caterpie",
    species: {
      name: "caterpie",
      url: "https://pokeapi.co/api/v2/pokemon-species/10/",
    },
    types: [
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
      },
    ],
  },
  {
    id: 11,
    name: "metapod",
    species: {
      name: "metapod",
      url: "https://pokeapi.co/api/v2/pokemon-species/11/",
    },
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
    ],
  },
  {
    id: 12,
    name: "butterfree",
    species: {
      name: "butterfree",
      url: "https://pokeapi.co/api/v2/pokemon-species/12/",
    },
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
  },
  {
    id: 13,
    name: "weedle",
    species: {
      name: "weedle",
      url: "https://pokeapi.co/api/v2/pokemon-species/13/",
    },
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
  },
  {
    id: 14,
    name: "kakuna",
    species: {
      name: "kakuna",
      url: "https://pokeapi.co/api/v2/pokemon-species/14/",
    },
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
  },
  {
    id: 15,
    name: "beedrill",
    species: {
      name: "beedrill",
      url: "https://pokeapi.co/api/v2/pokemon-species/15/",
    },
    types: [
      {
        slot: 1,
        type: {
          name: "bug",
          url: "https://pokeapi.co/api/v2/type/7/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
  },
  {
    id: 16,
    name: "pidgey",
    species: {
      name: "pidgey",
      url: "https://pokeapi.co/api/v2/pokemon-species/16/",
    },
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
  },
  {
    id: 17,
    name: "pidgeotto",
    species: {
      name: "pidgeotto",
      url: "https://pokeapi.co/api/v2/pokemon-species/17/",
    },
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
  },
  {
    id: 18,
    name: "pidgeot",
    species: {
      name: "pidgeot",
      url: "https://pokeapi.co/api/v2/pokemon-species/18/",
    },
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
  },
  {
    id: 19,
    name: "rattata",
    species: {
      name: "rattata",
      url: "https://pokeapi.co/api/v2/pokemon-species/19/",
    },
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
  },
  {
    id: 20,
    name: "raticate",
    species: {
      name: "raticate",
      url: "https://pokeapi.co/api/v2/pokemon-species/20/",
    },
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
  },
];

export const pokemon: PokemonId = {
  id: 1,
  name: "bulbasaur",
  species: {
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon-species/1/",
  },
  types: [
    {
      slot: 1,
      type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
    },
    {
      slot: 2,
      type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
    },
  ],
};
