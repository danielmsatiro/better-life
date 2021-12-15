import { GoalCardContainer } from "./styles";

import { MdOutlineClear, MdCreate, MdCheck } from "react-icons/md";

import Modal from "../../components/Modal";
import { GoalEdit } from "../../components/GoalEdit";
import { useState } from "react";

function GroupModelCard({
  title,
  description,
  first_data_title,
  second_data_title,
  first_data_data,
  second_data_data,
  goal,
}) {
  const [openEditGoal, setOpenEditGoal] = useState(false);
  const handleEditGoal = () => {
    setOpenEditGoal(!openEditGoal);
  };

  const formIdEditGoal = "idEditGoal";
  return (
    <GoalCardContainer>
      <div className="GoalCard_header">
        <div className="GoalCard_header_title">
          <MdCreate
            onClick={() => setOpenEditGoal(true)}
            className="GoalCard_header_title_edit"
          />
          <Modal isOpen={openEditGoal} setIsOpen={handleEditGoal}>
            <GoalEdit
              closeFunction={handleEditGoal}
              identity={formIdEditGoal}
              goal={goal}
            ></GoalEdit>
          </Modal>
          <h4>{title}</h4>
          <MdCheck className="GoalCard_header_title_check" />
        </div>

        <MdOutlineClear className="GoalCard_header_delete" />
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
