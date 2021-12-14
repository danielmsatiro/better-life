// import { Container } from './styles';
import GoalBoxSide from "../../components/GoalBoxSide";
import { ListMiniCards } from "../../components/ListMiniCards";
import GroupGoalBox from "../../components/GroupGoalBox";

const Groups = () => {
  return (
    <div>
      <GroupGoalBox/>
      <GoalBoxSide/>
      <ListMiniCards />
    </div>
  );
};

export default Groups;
