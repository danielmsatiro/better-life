/* import { Layout } from "../../styles/layout";
import Modal from "../../components/Modal";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../providers/user";

export const Prueba = () => {
  const [open, setOpen] = useState(false);
  const handleModal = () => {
    setOpen(!open);
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

  useEffect(() => {
    getMyGroups();
  }, []);

  const formId = "conocido";
  return (
    <Layout>

      <button onClick={() => setOpenHabitMaker(true)}>
        Abrir modal de prueba
      </button>
      <Modal isOpen={openHabitMaker} setIsOpen={handleHabitMaker}>
        <GroupEdit
          closeFunction={handleHabitMaker}
          identity={formId}
          group={groupTest}
        ></GroupEdit>
      </Modal>

    </Layout>
  );
};
 */
