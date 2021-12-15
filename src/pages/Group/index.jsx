// import { Container } from './styles';
import GroupGoalBox from "../../components/GroupGoalBox";
import GroupActivitiesBox from "../../components/GroupActivitiesBox";
import GroupGraph from "../../components/GraphGroup";
import { ActivityCreate } from "../../components/ActivityCreate";

import { useParams } from "react-router-dom";

const Group = () => {
  const params = useParams()

  return (
    <div>
      <ActivityCreate group_id={params.id} identity={"createActivity"}/>
      <GroupGraph groupId={params.id}/>
      <GroupGoalBox groupId={params.id}/>
      <GroupActivitiesBox groupId={params.id}/>
    </div>
  )
};

export default Group;
