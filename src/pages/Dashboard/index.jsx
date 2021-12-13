// import { Container } from './styles';
import HabitsCards from "../../components/HabitsCards";
import LastActivities from "../../components/LastActivities";
import DashboardMenu from "../../components/Menu";
import HabitsGraph from "../../components/Graph";
import DescriptionText from "../../components/DescriptionText";
import SearchBox from "../../components/SerchBox";

const Dashboard = () => {
  return (
    <div>
      <DashboardMenu />
      <LastActivities />
      <HabitsCards />
      <HabitsGraph />
      <DescriptionText>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
        delectus facilis tempore vero iure ex suscipit ab rem, saepe ipsum
        ducimus eum repellat cupiditate consequuntur quae? Est officiis officia
        doloribus.
      </DescriptionText>
      <SearchBox />
    </div>
  );
};

export default Dashboard;
