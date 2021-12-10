import { Layout } from "../../styles/layout";
import Modal from "../../components/Modal";
import { useState } from "react";
import { HabitEditor } from "../../components/HabitEditor";

export const Prueba = () => {
  const [techModal, setTechModal] = useState(false);
  const handleTechModal = () => {
    setTechModal(!techModal);
  };

  return (
    <Layout>
      <button onClick={() => setTechModal(true)}>Abrir modal de prueba</button>
      <Modal isOpen={techModal} setIsOpen={handleTechModal}>
        <HabitEditor></HabitEditor>
      </Modal>
    </Layout>
  );
};
