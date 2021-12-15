import { Layout } from "../../styles/layout";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../providers/user";
import Modal from "../../components/Modal";
import { GoalEdit } from "../../components/GoalEdit";

export const Prueba = () => {
  const [openEditGoal, setOpenEditGoal] = useState(false);
  const handleEditGoal = () => {
    setOpenEditGoal(!openEditGoal);
  };

  const formIdEditGoal = "idEditGoal";

  const groupIdTest = 1039;

  return (
    <Layout>
      <button onClick={() => setOpenEditGoal(true)}>
        Abrir modal de prueba
      </button>
      <Modal isOpen={openEditGoal} setIsOpen={handleEditGoal}>
        <GoalEdit
          closeFunction={handleEditGoal}
          identity={formIdEditGoal}
          goal={groupIdTest}
        ></GoalEdit>
      </Modal>
    </Layout>
  );
};
