import GoalCardSide from "../GoalCardSide"
import { GoalBoxSideNav } from "./styles"

import {MdDashboard} from "react-icons/md";

import { useContext } from "react";
import { MyGroupsContext } from "../../providers/mygroups";

function GoalBoxSide( group ){
    const {myGroups} = useContext(MyGroupsContext)

    return (
        <GoalBoxSideNav>
            
            <div className="GoalBox_title">

                <h2>Metas em grupo</h2>
                <MdDashboard className="icon_goal_title"/>

            </div>

            {myGroups.map((item, index) => (

                <GoalCardSide key={index}
                    groupName={item.name}
                    goalTitle={item.goals.length > 0 ? item.goals[item.goals.length - 1].title : "Sem Metas"}
                />

            ))}

        </GoalBoxSideNav>
    )
}

export default GoalBoxSide