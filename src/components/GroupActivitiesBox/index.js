import { ActivitiesContainer } from "./styles"

import { MdOutlineAddCircle} from "react-icons/md"

import GroupGoalCard from "../GroupGoalCard"

function GroupActivitiesBox(){
    return (
        <ActivitiesContainer>

            <h2 className="Goal_Activities_container_title"> Atividades </h2>

            <div className="create_Activities">
                <MdOutlineAddCircle className="create_Activities_icon"/>
            </div>

            <GroupGoalCard/>

        </ActivitiesContainer >
    )
}

export default GroupActivitiesBox