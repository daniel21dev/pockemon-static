export interface PokemonListResponse {
  count: number;
  next?: string;
  previous?: string;
  results: SmallPokemon[];
}

export interface SmallPokemon {
  id: string | number;
  name: string;
  url: string;
  image?: string;
}
