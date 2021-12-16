import {
  Layout,
  Container,
  Main,
  Aside,
  Header,
  InfoContainer,
  TextContainer,
  A,
} from "./styles";

import DashboardMenu from "../../components/Menu";
import SearchBox from "../../components/SearchBox";
import SearchResults from "../../components/SearchResults";
import GoalBoxSide from "../../components/GoalBoxSide";

import { ListMiniCards } from "../../components/ListMiniCards";
import { useSearchGroups } from "../../providers/searchGroups";

const Groups = () => {
  const { openResults, setOpenResults } = useSearchGroups();

  return (
    <>
      <Layout>
        <Header />
        <Container>
          <DashboardMenu />
          <Main>
            <SearchBox setResults={setOpenResults} />
            {openResults ? (
              <SearchResults
                setResults={setOpenResults}
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
