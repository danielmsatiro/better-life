// import { Container } from './styles';
import GroupGoalBox from "../../components/GroupGoalBox";
import GroupActivitiesBox from "../../components/GroupActivitiesBox";

import { useParams } from "react-router-dom";
const Group = () => {
  const params = useParams()

  return (
    <div>
      <GroupGoalBox groupId={params.id}/>
      <GroupActivitiesBox groupId={params.id}/>
    </div>
  )
};

export default Group;
