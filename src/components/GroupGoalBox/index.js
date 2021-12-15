import { GoalBoxContainer } from "./styles"
import GroupGoalCard from "../GroupGoalCard"

import { MdOutlineAddCircle} from "react-icons/md"

import { useContext } from "react"


function GroupGoalBox(){
    return (
        <GoalBoxContainer>

            <h2 className="Goal_box_container_title">Metas</h2>

            <div className="create_goal">
                <MdOutlineAddCircle className="create_goal_icon"/>
            </div>


            <GroupGoalCard/>
        </GoalBoxContainer>
    )
}

export default GroupGoalBox