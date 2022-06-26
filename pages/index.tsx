import type { NextPage } from "next";

import { Avatar, Panel, ActionsMenu, Button } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Panel></Panel>
      <ActionsMenu />
      <Panel labelText="Стек способностей"></Panel>
      <Panel>
        <Button> Submit turn </Button>
      </Panel>
    </>
  );
};

export default Home;
