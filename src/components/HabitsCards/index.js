import { Container } from "./styles";
import { Content } from "./styles";
import { HabitMaker } from "../HabitMaker";
import Modal from "../Modal";
import { useState } from "react";
import { useMyHabits } from "../../providers/myHabits";
import HabitCard from "../HabitCard";

const HabitsCards = () => {
  const { myHabits } = useMyHabits();
  const [openHabitMaker, setOpenHabitMaker] = useState(false);

  const handleHabitMaker = () => {
    setOpenHabitMaker(!openHabitMaker);
  };

  const habitMakerId = "habitMakerId";

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
