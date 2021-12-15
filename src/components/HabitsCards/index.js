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
import HabitCard from "../HabitCard";

const HabitsCards = () => {
  const { myHabits, deleteHabit } = useMyHabits();
  const [openHabitMaker, setOpenHabitMaker] = useState(false);
  const [openHabitEditor, setOpenHabitEditor] = useState(false);
  const [removeModal, setRemoveModal] = useState(false);

  const handleHabitMaker = () => {
    setOpenHabitMaker(!openHabitMaker);
  };

  const handleHabitEditor = () => {
    setOpenHabitEditor(!openHabitEditor);
  };

  const [id, setID] = useState();
  // const [item, setItem] = useState({});
  // const regItem = (item) => {
  //   setOpenHabitEditor(true);
  //   setItem(item);
  //   console.log("hola", item);
  // };
  const registerid = (id) => {
    setRemoveModal(true);
    setID(id);
    console.log(id);
  };

  const habitMakerId = "habitMakerId";
  const habitEditorId = "habitEditorId";

  return (
    <Container>
      <div>
        <h3>Hábitos</h3>
        <button onClick={() => setOpenHabitMaker(true)}>+</button>
        <Modal isOpen={openHabitMaker} setIsOpen={handleHabitMaker}>
          <HabitMaker
            closeFunction={handleHabitMaker}
            identity={habitMakerId}
          ></HabitMaker>
        </Modal>
      </div>
      <Content>
        {myHabits.map((habit, index) => (
          <HabitCard key={index} habit={habit} />
        ))}
      </Content>
    </Container>
  );
};
export default HabitsCards;
