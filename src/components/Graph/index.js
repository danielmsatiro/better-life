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

  // const DomesticosCategoryInitial    = findCategory("Domésticos")
  // const EspiritualCategoryInitial    = findCategory("Espiritual")
  // const IntelectualCategoryInitial   = findCategory("Intelectual")
  // const LazerCategoryInitial         = findCategory("Lazer")
  // const ProfissionalCategoryInitial  = findCategory("Profissional")
  const SaudeCategoryInitial = findCategory("Saúde");

  // const [DomesticosCategory, setDomésticosCategory]      = useState(DomesticosCategoryInitial)
  // const [EspiritualCategory, setEspiritualCategory]      = useState(EspiritualCategoryInitial)
  // const [IntelectualCategory , setIntelectualCategory]   = useState(IntelectualCategoryInitial)
  // const [LazerCategory   , setLazerCategory]             = useState(LazerCategoryInitial)
  // const [ProfissionalCategory, setProfissionalCategory]  = useState(ProfissionalCategoryInitial)
  const [SaudeCategory, setSaudeCategory] = useState(SaudeCategoryInitial);

  const updateGraph = () => {
    //     setDomésticosCategory(findCategory("Domésticos"));
    //     setEspiritualCategory(findCategory("Espiritual"));
    //     setIntelectualCategory(findCategory("Intelectual"));
    //     setLazerCategory(findCategory("Lazer"));
    //     setProfissionalCategory(findCategory("Profissional"));
    setSaudeCategory(findCategory("Saúde"));
    // console.log("opa")
  };
  // console.log(SaudeCategory)

  useEffect(() => {
    updateGraph();
    setTrack(true);
  }, []);
  console.log(track);
  console.log("att");

  return (
    <div>
      {myHabits.length === 0 ? (
        <Chart
          width={"300px"}
          height={"300px"}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Task", "Hours per Day"],
            ["Sem Hábitos Cadastrados", 1],
          ]}
          options={{
            title: "",
            // Just add this option
            pieHole: 0.0,
          }}
          rootProps={{ "data-testid": "3" }}
        />
      ) : (
        <Chart
          width={"300px"}
          height={"300px"}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Task", "Hours per Day"],
            // ['Domésticos',      DomesticosCategoryInitial.length],
            // ['Espiritual',      EspiritualCategoryInitial.length],
            // ['Intelectual',     IntelectualCategoryInitial.length],
            // ['Lazer',           LazerCategoryInitial.length],
            // ['Profissional',    ProfissionalCategoryInitial.length],
            [
              "Saúde",
              !setTrack ? SaudeCategory.length : SaudeCategoryInitial.length,
            ],
          ]}
          options={{
            width: "300px",
            title: "",
            // Just add this option
            pieHole: 0.0,
            backgroundColor: "none",
            pieSliceBorderColor: "transparent",
          }}
          rootProps={{ "data-testid": "3" }}
        />
      )}
    </div>
  );
}

export default HabitsGraph;
