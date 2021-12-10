import Modal from "../Modal";

import {
  Container,
  BlackBar1,
  BlackBar2,
  MainContent,
  ButtonsNest,
  Button1,
  Button2,
} from "./styles";

const ConfModal = ({ text, action, isOpen, setIsOpen }) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        <BlackBar1 />
        <MainContent>
          <p>{text}</p>
          <ButtonsNest>
            <Button1 onClick={action}>Sim</Button1>
            <Button2 onClick={setIsOpen(false)}>Não</Button2>
          </ButtonsNest>
        </MainContent>
        <BlackBar2 />
      </Container>
    </Modal>
  );
};

export default ConfModal;
