// import { Container } from './styles';
import LastActivities from "../../components/LastActivities";
import DashboardMenu from "../../components/Menu";

const Dashboard = () => {
  return (
    <div>
      <DashboardMenu />
      <LastActivities />
    </div>
  );
};

export default Dashboard;
