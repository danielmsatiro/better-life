import { MdDoneOutline, MdOutlineDoNotDisturb } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { HabitEditor } from "../HabitEditor";
import Modal from "../Modal";
import ConfModal from "../ConfModal";
import { useState } from "react";
import { useMyHabits } from "../../providers/myHabits";

const HabitCard = ({ habit }) => {
  const { deleteHabit } = useMyHabits();
  const [openHabitEditor, setOpenHabitEditor] = useState(false);
  const [removeModal, setRemoveModal] = useState(false);
  const handleHabitEditor = () => {
    setOpenHabitEditor(!openHabitEditor);
  };

  const habitEditorId = "habitEditorId";
  const [id, setID] = useState();
  const registerid = (id) => {
    setRemoveModal(true);
    setID(id);
    console.log(id);
  };
  return (
    <tr id={habit.id}>
      <td title="title">{habit.title}</td>
      <td>{habit.achieved ? <MdDoneOutline /> : <MdOutlineDoNotDisturb />}</td>
      <td>
        <MdEdit onClick={() => setOpenHabitEditor(true)} />
        <Modal isOpen={openHabitEditor} setIsOpen={handleHabitEditor}>
          <HabitEditor
            closeFunction={handleHabitEditor}
            identity={habitEditorId}
            item={habit}
          ></HabitEditor>
        </Modal>
      </td>
      <td>
        <MdClose onClick={() => registerid(habit.id)} />
        <ConfModal
          action={() => {
            deleteHabit(id);
            setRemoveModal(false);
          }}
          isOpen={removeModal}
          setIsOpen={setRemoveModal}
          text={"deseja remover este hábito?"}
        />
      </td>
    </tr>
  );
};
export default HabitCard;
