// import { Container } from './styles';
import HabitsCards from "../../components/HabitsCards";
import LastActivities from "../../components/LastActivities";
import DashboardMenu from "../../components/Menu";
import HabitsGraph from "../../components/Graph";

const Dashboard = () => {
  return (
    <div>
      <DashboardMenu />
      <LastActivities />
      <HabitsCards />
      <HabitsGraph/>
    </div>
  );
};

export default Dashboard;
