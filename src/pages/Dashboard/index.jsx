import {
  Layout,
  Container,
  Main,
  Header,
  InfoContainer,
  TextContainer,
} from "./styles";

import SearchResults from "../../components/SearchResults";

import { useState } from "react";

import HabitsCards from "../../components/HabitsCards";
import LastActivities from "../../components/LastActivities";
import DashboardMenu from "../../components/Menu";
import SearchBox from "../../components/SerchBox";
import Greetings from "../../components/GreetingsUser";
import HabitsGraph from "../../components/Graph";

const Dashboard = () => {
  const [results, setResults] = useState(false);

  return (
    <Layout>
      <Header />
      <Container>
        <DashboardMenu />
        <Main>
          <SearchBox setResults={setResults} />
          {results ? (
            <SearchResults setResults={setResults} />
          ) : (
            <>
              <InfoContainer>
                <TextContainer>
                  <Greetings />
                  <p>
                    Atualize frequentemente os hábitos abaixo para ver quais
                    estão sendo parte de sua vida.
                  </p>
                </TextContainer>
                <HabitsGraph />
              </InfoContainer>
              <HabitsCards />
              <LastActivities />
            </>
          )}
        </Main>
      </Container>
    </Layout>
  );
};

export default Dashboard;
