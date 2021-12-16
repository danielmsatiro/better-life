import { Container, CardHeader, Content } from "./styles";
import { HabitMaker } from "../HabitMaker";
import Modal from "../Modal";
import { useState } from "react";
import { useMyHabits } from "../../providers/myHabits";
import HabitCard from "../HabitCard";
import Button from "../Button";

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
        <CardHeader>
          <div className="titulo">
            <h3>Hábitos</h3>
          </div>
          <div className="holder">
            <Button className="opener" onClick={() => setOpenHabitMaker(true)}>
              +
            </Button>
          </div>
        </CardHeader>

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
