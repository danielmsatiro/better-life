import { GoalCardContainer } from "./styles"

import {MdOutlineClear, MdCreate, MdCheck} from "react-icons/md"

function GroupGoalCard( groupGoals ){
    
    return (
        <GoalCardContainer>
            <div className="GoalCard_header">

                <div className="GoalCard_header_title">
                    
                    <MdCreate className="GoalCard_header_title_edit"/>
                    <h4>Meta</h4>
                    <MdCheck className="GoalCard_header_title_check"/>

                </div>

                <MdOutlineClear className="GoalCard_header_delete"/>                

            </div>

            <div className="GoalCard_content">

                <p> {groupGoals.title} </p>

                <div className="GoalCard_content_data">

                    <p>Dificuldade: {groupGoals.difficulty}</p>

                    <p>Pessoas que atingiram a meta: {groupGoals.how_much_achieved}</p>

                </div>

            </div>
        </GoalCardContainer>
    )
}

export default GroupGoalCard