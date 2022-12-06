import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { Pokemon, PokemonListResponse } from "../../interfaces";
import pokeApi from "../../api/pokeApi";
import PokemonTemplate from "../../components/pokemon/PokemonTemplate";
import { getPokemonInfo } from "../../utils";

interface Props {
  pokemon: Pokemon;
}

const PokemonByName = ({ pokemon }: Props) => {
  return <PokemonTemplate pokemon={pokemon} />;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  return {
    props: { pokemon: await getPokemonInfo(name) },
  };
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const { data } = await pokeApi.get<PokemonListResponse>(`/pokemon?limit=151`);

  return {
    paths: data.results.map(({ name }) => ({
      params: { name },
    })),
    fallback: false,
  };
};

export default PokemonByName;
