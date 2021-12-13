import { Chart } from "react-google-charts";

import { useContext } from "react";
import { MyHabitsContext } from "../../providers/myHabits";

import { useEffect, useState } from "react";

function HabitsGraph() {
  const { myHabits } = useContext(MyHabitsContext);
  const [track, setTrack] = useState(false);

  function findCategory(category) {
    return myHabits.filter((item) => item.category === category);
  }

    const DomesticosCategoryInitial    = findCategory("Domésticos")
    const EspiritualCategoryInitial    = findCategory("Espiritual")
    const IntelectualCategoryInitial   = findCategory("Intelectual")
    const LazerCategoryInitial         = findCategory("Lazer")
    const ProfissionalCategoryInitial  = findCategory("Profissional")
    const SaudeCategoryInitial         = findCategory("Saúde")

    const [DomesticosCategory, setDomésticosCategory]      = useState([])
    const [EspiritualCategory, setEspiritualCategory]      = useState([])
    const [IntelectualCategory , setIntelectualCategory]   = useState([])
    const [LazerCategory   , setLazerCategory]             = useState([])
    const [ProfissionalCategory, setProfissionalCategory]  = useState([])
    const [SaudeCategory, setSaudeCategory]                = useState([])

    const updateGraph = () => {
        setDomésticosCategory(findCategory("Domésticos"));
        setEspiritualCategory(findCategory("Espiritual"));
        setIntelectualCategory(findCategory("Intelectual"));
        setLazerCategory(findCategory("Lazer"));
        setProfissionalCategory(findCategory("Profissional"));
        setSaudeCategory(findCategory("Saúde"));
    }

    useEffect(() => {
        updateGraph()
        setTrack(true)
      }, []);


    return(
        <div>
            {
                myHabits.length === 0 ? 
                <Chart
                    width={'300px'}
                    height={'300px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Task', 'Hours per Day'],
                        ['Sem Hábitos Cadastrados',  1]
                    ]}
                    options={{
                        title: '',
                        // Just add this option
                        pieHole: 0.0,
                        backgroundColor: 'none',
                        pieSliceBorderColor: "transparent"
                    }}
                    rootProps={{ 'data-testid': '3' }}
                />
                :
                <Chart
                width={'300px'}
                height={'300px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Task', 'Hours per Day'],
                    ['Domésticos',      !track ? DomesticosCategory.length   : DomesticosCategoryInitial.length],
                    ['Espiritual',      !track ? EspiritualCategory.length   : EspiritualCategoryInitial.length],
                    ['Intelectual',     !track ? IntelectualCategory.length  : IntelectualCategoryInitial.length],
                    ['Lazer',           !track ? LazerCategory.length        : LazerCategoryInitial.length],
                    ['Profissional',    !track ? ProfissionalCategory.length : ProfissionalCategoryInitial.length],
                    ['Saúde',           !track ? SaudeCategory.length        : SaudeCategoryInitial.length],
                ]}
                options={{
                    width: '300px',
                    title: '',
                    // Just add this option
                    pieHole: 0.0,
                    backgroundColor: 'none',
                    pieSliceBorderColor: "transparent"
                }}
                rootProps={{ 'data-testid': '3' }}
            />

            } 
        </div>
    )
}

export default HabitsGraph;
