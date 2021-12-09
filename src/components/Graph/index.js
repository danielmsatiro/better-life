import {Chart} from "react-google-charts"

function Graph(){
    return(
        <div>
            <Chart
                width={'200px'}
                height={'200px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Task', 'Hours per Day'],
                    ['Saúde', 11],
                    ['Trabalho', 2],
                    ['Família', 2],
                    ['Cultura', 2],
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

export default Graph