import { Button } from "@nextui-org/react";
import { NextPage } from "next";
import { Layout } from "../components/layouts";

export const HomePage: NextPage = () => {
  return (
    <Layout>
      <h1>Hola mundo</h1>
      <Button color={"gradient"}>Hola mundo</Button>
    </Layout>
  );
};

export default HomePage;
