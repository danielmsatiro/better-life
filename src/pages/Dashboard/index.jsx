// import { Container } from './styles';
import HabitsCards from "../../components/HabitsCards";
import LastActivities from "../../components/LastActivities";
import DashboardMenu from "../../components/Menu";

const Dashboard = () => {
  return (
    <div>
      <DashboardMenu />
      <LastActivities />
      <HabitsCards />
    </div>
  );
};

export default Dashboard;
