import { Link, Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";
import React from "react";

export const Navbar = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 50px",
        backgroundColor: theme?.colors.gray500.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="icono de la app"
        width={70}
        height={70}
      />

      <div>
        <NextLink href={"/"} legacyBehavior passHref>
          <Link css={{ marginRight: "10px" }}>
            <Text color="white" h2>
              P
            </Text>
            <Text color="white" h3>
              okémon
            </Text>
          </Link>
        </NextLink>
      </div>

      <Spacer css={{ flex: 1 }} />

      <div>
        <NextLink href={"/favorites"} legacyBehavior passHref>
          <Link>
            <Text color="white" h3>
              Favoritos
            </Text>
          </Link>
        </NextLink>
      </div>
    </div>
  );
};
