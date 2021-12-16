import { Layout, Container, Main, Aside, Header, A } from "./styles";

import DashboardMenu from "../../components/Menu";
import SearchBox from "../../components/SearchBox";
import SearchResults from "../../components/SearchResults";
import GoalBoxSide from "../../components/GoalBoxSide";

import { ListMiniCards } from "../../components/ListMiniCards";
import { useState } from "react";

const Groups = () => {
  const [results, setResults] = useState(false);

  return (
    <>
      <Layout>
        <Header />
        <Container>
          <DashboardMenu />
          <Main>
            <SearchBox setResults={setResults} />
            {results ? (
              <SearchResults
                setResults={setResults}
                className="result_groups"
              />
            ) : (
              <Aside>
                <ListMiniCards />

                <GoalBoxSide />
              </Aside>
            )}
          </Main>
        </Container>
      </Layout>
      <A />
    </>
  );
};

export default Groups;
