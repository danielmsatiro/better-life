import {Chart} from "react-google-charts";

import { useContext } from "react";
import { UserContext } from "../../providers/user";

function HabitsGraph(){
    const {user} = useContext(UserContext)
    console.log(user.id)
    return(
        <div>
            <Chart
                width={'300px'}
                height={'300px'}
                backgroundColor={'blue'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Task', 'Hours per Day'],
                    ['Cultura', 0],
                    ['Família', 0],
                    ['Saúde', 2],
                    ['Trabalho', 1],
                ]}
                options={{
                    title: '',
                    // Just add this option
                    pieHole: 0.2,
                }}
                rootProps={{ 'data-testid': '3' }}
            />
        </div>
    )
}

export default HabitsGraph