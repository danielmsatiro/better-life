import { ActivitiesContainer } from "./styles"

import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../providers/user";

import GroupGoalCard from "../GroupGoalCard"

import { MdOutlineAddCircle} from "react-icons/md"

function GroupActivitiesBox( {groupId} ){
    const { user } = useAuth();
    
    const [myActivities, setMyActivities] = useState([])

    const getGoalsGroup = () => {
        api
          .get(`/activities/?group=${groupId}`, {
            headers: {
              authorization: `Bearer ${user.token}`,
            },
          })
          .then((response) => setMyActivities(response.data.results))
          .catch((err) => console.log("Requisição getGoalsOneGroup:", err));
      };

    useEffect(() => {
        getGoalsGroup();
    }, []);

    console.log(myActivities)

    return (
        <ActivitiesContainer>

            <h2 className="Goal_Activities_container_title"> Atividades </h2>

            <div className="create_Activities">
                <MdOutlineAddCircle className="create_Activities_icon"/>
            </div>

            {
            myActivities.length > 0 && myActivities.map((activity, index) => (             
                <GroupGoalCard 
                key={index}
                title={"Atividade"}
                description={activity.title}
                first_data_title={"Data"}
                first_data_data={activity.realization_time.substring(0, 10)}
                second_data_title={"Hora"}
                second_data_data={activity.realization_time.substring(11, 16)}
                />
            )) }

        </ActivitiesContainer >
    )
}

export default GroupActivitiesBox