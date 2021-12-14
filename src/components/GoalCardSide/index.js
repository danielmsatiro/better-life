import {IoCheckmarkDoneSharp} from "react-icons/io5"

import { GoalCardSideNav } from "./styles"

function GoalCardSide( {groupName, goalTitle} ){

    return (
        <GoalCardSideNav>
            
            <div className="icon_box">
                <IoCheckmarkDoneSharp className="double_check"/>
            </div>

            

            <div className="GoalCard_content">
                <h3> { groupName}  </h3>
                <p> { goalTitle } </p>
            </div>
        </GoalCardSideNav>
    )
}

export default GoalCardSide