import { ReactRef } from "@nextui-org/react/types/utils/refs";
import Head from "next/head";
import React from "react";

import { Navbar } from "../ui";

interface Props {
  title?: string;
  children: React.ReactNode | React.ReactNode[];
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Daniel Romero" />
        <meta
          name="description"
          content={`${title} informacion sobre el pokemon`}
        />
        <meta name="keywords" content=" pokemon, pokedex" />

        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta
          property="og:description"
          content={`Es la pagina sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      {/* navbar */}
      <Navbar />

      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
