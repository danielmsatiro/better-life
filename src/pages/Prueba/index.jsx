import { Layout } from "../../styles/layout";
import Modal from "../../components/Modal";
import { useState } from "react";
import { HabitMaker } from "../../components/HabitMaker";

export const Prueba = () => {
  const [techModal, setTechModal] = useState(false);
  const handleTechModal = () => {
    setTechModal(!techModal);
  };

  return (
    <Layout>
      <button onClick={() => setTechModal(true)}>Abrir modal de prueba</button>
      <Modal isOpen={techModal} setIsOpen={handleTechModal}>
        <HabitMaker closeFunction={handleTechModal}></HabitMaker>
      </Modal>
    </Layout>
  );
};
