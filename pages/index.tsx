import { NextPage, GetStaticProps } from "next";
import { pokeApi } from "../api";
import { Layout } from "../components/layouts";
import { PokemonListResponse } from "../interfaces";
import { SmallPokemon } from "../interfaces/pokemon-list";
import { Grid } from "@nextui-org/react";
import { PokemonCard } from "../components/pokemon";

interface Props {
  pokemons: SmallPokemon[];
}

export const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout>
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const pokemons: SmallPokemon[] = data.results.map((pokemon, i) => {
    return {
      ...pokemon,
      id: i + 1,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        i + 1
      }.png`,
    };
  });
  return {
    props: { pokemons },
  };
};

export default HomePage;
