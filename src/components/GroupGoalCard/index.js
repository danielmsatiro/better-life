import { GoalCardContainer } from "./styles"

import {MdOutlineClear, MdCreate, MdCheck} from "react-icons/md"

function GroupGoalCard( {
    title, 
    description, 
    first_data_title, 
    second_data_title, 
    first_data_data,
    second_data_data } ){
    
    return (
        <GoalCardContainer>
            <div className="GoalCard_header">

                <div className="GoalCard_header_title">
                    
                    <MdCreate className="GoalCard_header_title_edit"/>
                    <h4>{title}</h4>
                    <MdCheck className="GoalCard_header_title_check"/>

                </div>

                <MdOutlineClear className="GoalCard_header_delete"/>                

            </div>

            <div className="GoalCard_content">

                <p> {description} </p>

                <div className="GoalCard_content_data">

                    <p>{first_data_title}: {first_data_data}</p>

                    <p>{second_data_title}: {second_data_data}</p>

                </div>

            </div>
        </GoalCardContainer>
    )
}

export default GroupGoalCard