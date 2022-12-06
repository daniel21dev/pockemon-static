import React from "react";

import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { Pokemon } from "../../interfaces";
import PokemonTemplate from "../../components/pokemon/PokemonTemplate";
import { getPokemonInfo } from "../../utils";

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  return <PokemonTemplate pokemon={pokemon} />;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  return {
    props: { pokemon: await getPokemonInfo(id) },
  };
};

export const getStaticPaths: GetStaticPaths = (context) => {
  // const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
  const pokemons = [...Array(151)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemons.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};

export default PokemonPage;
