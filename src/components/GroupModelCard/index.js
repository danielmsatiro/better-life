import { GoalCardContainer } from "./styles";

import { MdOutlineClear, MdCreate, MdCheck } from "react-icons/md";

import Modal from "../../components/Modal";
import { GoalEdit } from "../../components/GoalEdit";
import { ActivityEdit } from "../ActivityEdit";
import { useState } from "react";
import ConfModal from "../ConfModal";
import { useMyGroups } from "../../providers/mygroups";

function GroupModelCard({
  title,
  description,
  first_data_title,
  second_data_title,
  first_data_data,
  second_data_data,
  goal,
  activity,
  card,
  update
}) {
  //Para atualizar a página
  const [att, setAtt] = useState() 

  //Para criação e edição:
  const [openEditGoal, setOpenEditGoal] = useState(false);
  const handleEditGoal = () => {
    setOpenEditGoal(!openEditGoal);
    setAtt(update)
  };
  const formIdEditGoal = "idEditGoal";

  //Para deletar:
  const [removeModal, setRemoveModal] = useState(false);
  const [id, setID] = useState();
  const registerid = (id) => {
    setRemoveModal(true);
    setID(id);
  };
  const { deleteGoal, deleteActivity } = useMyGroups();

  return (
    <GoalCardContainer>
      <div className="GoalCard_header">
        <div className="GoalCard_header_title">
          <MdCreate
            onClick={() => setOpenEditGoal(true)}
            className="GoalCard_header_title_edit"
          />
          <Modal isOpen={openEditGoal} setIsOpen={handleEditGoal}>
            {card === "goal" ? (
              <GoalEdit
                closeFunction={handleEditGoal}
                identity={formIdEditGoal}
                goal={goal}
              ></GoalEdit>
            ) : (
              <ActivityEdit
                closeFunction={handleEditGoal}
                identity={formIdEditGoal}
                activity={activity}
              ></ActivityEdit>
            )}
          </Modal>
          <h4>{title}</h4>
          <MdCheck className="GoalCard_header_title_check" />
        </div>

        <MdOutlineClear
          className="GoalCard_header_delete"
          onClick={() =>
            card === "goal" ? registerid(goal.id) : registerid(activity.id)
          }
        />

        {card === "goal" ? (
          <ConfModal
            action={() => {
              deleteGoal(id);
              setRemoveModal(false);
              setAtt(update)
            }}
            isOpen={removeModal}
            setIsOpen={setRemoveModal}
            text={"Deseja remover esta meta?"}
          />
        ) : (
          <ConfModal
            action={() => {
              deleteActivity(id);
              setRemoveModal(false);
              setAtt(update)
            }}
            isOpen={removeModal}
            setIsOpen={setRemoveModal}
            text={"Deseja remover esta atividade?"}
          />
        )}
      </div>

      <div className="GoalCard_content">
        <p> {description} </p>

        <div className="GoalCard_content_data">
          <p>
            {first_data_title}: {first_data_data}
          </p>

          <p>
            {second_data_title}: {second_data_data}
          </p>
        </div>
      </div>
    </GoalCardContainer>
  );
}

export default GroupModelCard;
