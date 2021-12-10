import {Chart} from "react-google-charts";

function HabitsGraph(){
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
                    ['Cultura', 2],
                    ['Família', 2],
                    ['Saúde', 11],
                    ['Trabalho', 2],
                ]}
                options={{
                    title: '',
                    // Just add this option
                    pieHole: 0.3,
                }}
                rootProps={{ 'data-testid': '3' }}
            />
        </div>
    )
}

export default HabitsGraph