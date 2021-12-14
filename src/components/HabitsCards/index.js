import { Container } from "./styles";
import { Content } from "./styles";
import { MdDoneOutline, MdOutlineDoNotDisturb } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { HabitMaker } from "../HabitMaker";
import { HabitEditor } from "../HabitEditor";
import Modal from "../Modal";
import { useState } from "react";
import { useMyHabits } from "../../providers/myHabits";
import ConfModal from "../ConfModal";

const HabitsCards = () => {
  const { myHabits, deleteHabit } = useMyHabits();
  console.log(myHabits);
  const [removeModal, setRemoveModal] = useState(false);
  const [techModal, setTechModal] = useState(false);
  const handleTechModal = () => {
    setTechModal(!techModal);
  };
  const [id, setID] = useState();

  const registerid = (id) => {
    setRemoveModal(true);
    setID(id);
    console.log(id);
  };

  const formId = "conocido";
  return (
    <Container>
      <div>
        <h3>Hábitos</h3>
        <button onClick={() => setTechModal(true)}>+</button>
        <Modal isOpen={techModal} setIsOpen={handleTechModal}>
          <HabitMaker
            closeFunction={handleTechModal}
            identity={formId}
          ></HabitMaker>
        </Modal>
      </div>
      <Content>
        {myHabits.map((habit) => (
          <tr id={habit.id}>
            <td title="title">{habit.title}</td>
            <td>
              {habit.achieved ? <MdDoneOutline /> : <MdOutlineDoNotDisturb />}
            </td>
            <td>
              <MdEdit onClick={() => setTechModal(true)} />
              <Modal isOpen={techModal} setIsOpen={handleTechModal}>
                <HabitEditor closeFunction={handleTechModal}></HabitEditor>
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
        ))}
      </Content>
    </Container>
  );
};
export default HabitsCards;
