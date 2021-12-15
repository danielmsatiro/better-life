import { Chart } from "react-google-charts";

// import { useContext } from "react";
// import { MyGroupsContext } from "../../providers/mygroups";
import { api } from "../../services/api";
import { useAuth } from "../../providers/user";

import { useEffect, useState } from "react";

function GroupGraph({groupId}) {
//   const { getGoalsOneGroup } = useContext(MyGroupsContext);
  const { user } = useAuth();
  const [track, setTrack] = useState(false);
  const [GoalGroup, setGoalGroup] = useState([])

  const getGoalsGroup = () => {
    api
      .get(`/goals/?group=${groupId}`, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => setGoalGroup(response.data.results))
      .catch((err) => console.log("Requisição getGoalsOneGroup:", err));
  };

  function findDifficulty(difficult) {
    return GoalGroup.filter((item) => item.difficulty === difficult);
  }

  const FacilInitial = findDifficulty("Fácil");
  const MedioInitial = findDifficulty("Médio");
  const DificilInitial = findDifficulty("Díficil");

  const [FacilDifficulty, setFacilDifficulty] = useState([]);
  const [MedioDifficulty, setMedioDifficulty] = useState([]);
  const [DificilDifficulty, setDificilDifficulty] = useState([]);

  const updateGraph = () => {
    setFacilDifficulty(findDifficulty("Fácil"));
    setMedioDifficulty(findDifficulty("Médio"));
    setDificilDifficulty(findDifficulty("Díficil"));
  };

  useEffect(() => {
    getGoalsGroup()
    updateGraph();
    setTrack(true);
  }, []);

  return (
    <div>
      {GoalGroup.length === 0 ? (
        <Chart
          width={"200px"}
          height={"200px"}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Task", "Hours per Day"],
            ["Sem Metas Cadastradas", 1],
          ]}
          options={{
            title: "",
            // Just add this option
            legend: "none",
            pieSliceText: "label",
            pieHole: 0.0,
            backgroundColor: "none",
            pieSliceBorderColor: "transparent",
          }}
          rootProps={{ "data-testid": "3" }}
        />
      ) : (
        <Chart
          width={"200px"}
          height={"200px"}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Task", "Hours per Day"],
            [
              "Fácil",
              !track
                ? FacilDifficulty.length
                : FacilInitial.length,
            ],
            [
              "Médio",
              !track
                ? MedioDifficulty.length
                : MedioInitial.length,
            ],
            [
              "Difícil",
              !track
                ? DificilDifficulty.length
                : DificilInitial.length,
            ],
          ]}
          options={{
            width: "auto",
            title: "",
            legend: "none",
            pieSliceText: "label",
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

export default GroupGraph;