import { Layout, Container, Main, Header } from "./styles";
import HabitsCards from "../../components/HabitsCards";
import LastActivities from "../../components/LastActivities";
import DashboardMenu from "../../components/Menu";
import HabitsGraph from "../../components/Graph";
import DescriptionText from "../../components/DescriptionText";
import SearchBox from "../../components/SerchBox";

const Dashboard = () => {
  return (
    <Layout>
      <Header />
      <Container>
        <DashboardMenu />
        <Main>
          <SearchBox />
          <DescriptionText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
            delectus facilis tempore vero iure ex suscipit ab rem, saepe ipsum
            ducimus eum repellat cupiditate consequuntur quae? Est officiis
            officia doloribus.
          </DescriptionText>
          <HabitsGraph />
          <LastActivities />
          <HabitsCards />
        </Main>
      </Container>
    </Layout>
  );
};

export default Dashboard;
