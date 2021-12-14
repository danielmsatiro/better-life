import { Layout } from "../../styles/layout";
import Modal from "../../components/Modal";
import { useState } from "react";
import { HabitMaker } from "../../components/HabitMaker";
import { GroupCreate } from "../../components/GroupCreate";
import { GroupEdit } from "../../components/GroupEdit";

export const Prueba = () => {
  const [techModal, setTechModal] = useState(false);
  const handleTechModal = () => {
    setTechModal(!techModal);
  };

  const groupText = {
    id: 2,
    name: "Grupo de mães",
    category: "profissional",
    description: "kdklalalalla fahfua hfuahufah",
  };

  return (
    <Layout>
      <button onClick={() => setTechModal(true)}>Abrir modal de prueba</button>
      <Modal isOpen={techModal} setIsOpen={handleTechModal}>
        {/* <GroupEdit
          closeFunction={handleTechModal}
          group={groupText}
        ></GroupEdit> */}
        <GroupCreate
          closeFunction={handleTechModal}
          group={groupText}
        ></GroupCreate>
      </Modal>
    </Layout>
  );
};
