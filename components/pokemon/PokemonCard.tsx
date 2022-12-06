import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import React from "react";
import { SmallPokemon } from "../../interfaces";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard = ({ pokemon: { id, name, image } }: Props) => {
  const router = useRouter();

  const onClick = () => {
    console.log("click");

    router.push(`/name/${name}`);
  };

  return (
    <Grid key={id} xs={3} md={2} xl={1} onClick={onClick}>
      <Card isHoverable isPressable>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={image!} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{name}</Text>
            <Text>{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
