import React, { useEffect, useState } from "react";

import { Layout } from "../../components/layouts/Layout";
import { FavoritePokemons } from "../../components/pokemon";
import { NoFavorites } from "../../components/ui/NoFavorites";
import { localFavorites } from "../../utils";

const Fevorites = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Pokemon favoritos">
      {favoritePokemons.length ? (
        <FavoritePokemons favoritePokemons={favoritePokemons} />
      ) : (
        <NoFavorites />
      )}
    </Layout>
  );
};

export default Fevorites;
