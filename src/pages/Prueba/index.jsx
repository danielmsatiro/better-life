import { Layout } from "../../styles/layout";
import Modal from "../../components/Modal";
import { useState } from "react";
import { HabitEditor } from "../../components/HabitEditor";
import { HabitMaker } from "../../components/HabitMaker";
import { GroupCreate } from "../../components/GroupCreate";
import { GroupEdit } from "../../components/GroupEdit";

export const Prueba = () => {
  const [openHabitMaker, setOpenHabitMaker] = useState(false);
  const handleHabitMaker = () => {
    setOpenHabitMaker(!openHabitMaker);
  };

  const [removeModal, setRemoveModal] = useState(false);
  const [techModal, setTechModal] = useState(false);
  const handleTechModal = () => {
    setTechModal(!techModal);
  };

  const groupTest = {
    name: "Grupo da ferrari",
    category: "Lazer",
    description: "Ganhei na mega",
  };

  const formId = "conocido";
  return (
    <Layout>
      <button onClick={() => setTechModal(true)}>Abrir modal de prueba</button>
      <Modal isOpen={techModal} setIsOpen={handleTechModal}>
        <GroupEdit
          closeFunction={handleTechModal}
          identity={formId}
          group={groupTest}
        ></GroupEdit>
      </Modal>
    </Layout>
  );
};
