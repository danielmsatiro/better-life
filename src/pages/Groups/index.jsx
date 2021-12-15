// import { Container } from './styles';
import GoalBoxSide from "../../components/GoalBoxSide";
import { ListMiniCards } from "../../components/ListMiniCards";
import GroupGoalBox from "../../components/GroupGoalBox";
import GroupActivitiesBox from "../../components/GroupActivitiesBox";

const Groups = () => {
  return (
    <div>
      <GroupGoalBox/>
      <GroupActivitiesBox/>
      <GoalBoxSide/>
      <ListMiniCards />
    </div>
  );
};

export default Groups;
