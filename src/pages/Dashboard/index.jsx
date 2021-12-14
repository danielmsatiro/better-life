import {
  Layout,
  Container,
  Main,
  Header,
  InfoContainer,
  TextContainer,
} from "./styles";
import HabitsCards from "../../components/HabitsCards";
import LastActivities from "../../components/LastActivities";
import DashboardMenu from "../../components/Menu";
import SearchBox from "../../components/SerchBox";
import Greetings from "../../components/GreetingsUser";
import HabitsGraph from "../../components/Graph";

const Dashboard = () => {
  return (
    <Layout>
      <Header />
      <Container>
        <DashboardMenu />

        <Main>
          <SearchBox />
          <InfoContainer>
            <TextContainer>
              <Greetings />
              <p>
                Atualize frequentemente os hábitos abaixo para ver quais estão
                sendo parte de sua vida.
              </p>
            </TextContainer>
            <HabitsGraph />
          </InfoContainer>

          <HabitsCards />
          <LastActivities />
        </Main>
      </Container>
    </Layout>
  );
};

export default Dashboard;
