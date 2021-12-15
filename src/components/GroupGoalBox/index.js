import { GoalBoxContainer } from "./styles"
import GroupGoalCard from "../GroupGoalCard"

import { MdOutlineAddCircle} from "react-icons/md"

import { useState, useEffect } from "react"

import { api } from "../../services/api";
import { useAuth } from "../../providers/user";


function GroupGoalBox( {groupId} ){
    const { user } = useAuth();
    const [myGoals, setMyGoals] = useState([])

    const getGoalsGroup = () => {
        api
          .get(`/goals/?group=${groupId}`, {
            headers: {
              authorization: `Bearer ${user.token}`,
            },
          })
          .then((response) => setMyGoals(response.data.results))
          .catch((err) => console.log("Requisição getGoalsOneGroup:", err));
      };

    useEffect(() => {
        getGoalsGroup();
    }, []);
    console.log(groupId)

    return (
        <GoalBoxContainer>

            <h2 className="Goal_box_container_title">Metas</h2>

            <div className="create_goal">
                <MdOutlineAddCircle className="create_goal_icon"/>
            </div>


            {
             myGoals.length > 0 && myGoals.map((goal, index) => (
                <GroupGoalCard
                key={index}
                title={"Meta"}
                description={goal.title}
                first_data_title={"Dificuldade"}
                first_data_data={goal.difficulty}
                second_data_title={"Pessoas que atingiram a meta"}
                second_data_data={goal.how_much_achieved}
                />
             ))}
                
        </GoalBoxContainer>
    )
}

export default GroupGoalBox