export interface PokemonsData {
  count: number;
  next: string;
  previous: null | string;
  results: [
    {
      name: string;
      url: string;
    }
  ];
}
