import { ActivitiesContainer } from "./styles";
import GroupModelCard from "../GroupModelCard";

import { MdOutlineAddCircle } from "react-icons/md";

import { useState, useEffect } from "react";

import { api } from "../../services/api";
import { useAuth } from "../../providers/user";

import Modal from "../../components/Modal";
import { ActivityCreate } from "../ActivityCreate";

function GroupActivitiesBox({ groupId }) {
  const { user } = useAuth();
  const [myActivities, setMyActivities] = useState([]);

  const [openCreateActivity, setOpenCreateActivity] = useState(false);
  const handleCreateActivity = () => {
    setOpenCreateActivity(!openCreateActivity);
    getActivitiesGroup();
  };

  const formIdCreateAct = "idCreateAct";

  const getActivitiesGroup = () => {
    api
      .get(`/activities/?group=${groupId}`, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => setMyActivities(response.data.results))
      .catch((err) => console.log("Requisição getGoalsOneGroup:", err));
  };

  useEffect(() => {
    getActivitiesGroup();
  }, []);

  return (
    <ActivitiesContainer>
      <h2 className="Goal_Activities_container_title"> Atividades </h2>

      <div className="create_Activities">
        <MdOutlineAddCircle
          onClick={() => setOpenCreateActivity(true)}
          className="create_Activities_icon"
        />
        <Modal isOpen={openCreateActivity} setIsOpen={handleCreateActivity}>
          <ActivityCreate
            closeFunction={handleCreateActivity}
            identity={formIdCreateAct}
            group_id={groupId}
          ></ActivityCreate>
        </Modal>
      </div>

      {myActivities.length > 0 &&
        myActivities.map((activity, index) => (
          <GroupModelCard
            key={index}
            title={"Atividade"}
            description={activity.title}
            first_data_title={"Data"}
            first_data_data={activity.realization_time.substring(0, 10)}
            second_data_title={"Hora:"}
            second_data_data={activity.realization_time.substring(11, 16)}
            activity={activity}
            card={"activity"}
            update={getActivitiesGroup}
          />
        ))}
    </ActivitiesContainer>
  );
}

export default GroupActivitiesBox;
