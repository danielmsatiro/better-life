import { Layout, Container, Main, Header } from "./styles";
import HabitsCards from "../../components/HabitsCards";
import LastActivities from "../../components/LastActivities";
import DashboardMenu from "../../components/Menu";

const Dashboard = () => {
  return (
    <Layout>
      <Header />
      <Container>
        <DashboardMenu />
        <Main>
          <LastActivities />
          <HabitsCards />
        </Main>
      </Container>
    </Layout>
  );
};

export default Dashboard;
