import { Layout } from "../../styles/layout";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../providers/user";
import Modal from "../../components/Modal";
import { GoalCreate } from "../../components/GoalCreate";

export const Prueba = () => {
  const [openCreateGoal, setOpenCreateGoal] = useState(false);
  const handleCreateGoal = () => {
    setOpenCreateGoal(!openCreateGoal);
  };

  const formIdCreateGoal = "idCreateGoal";

  const groupIdTest = 1039;

  return (
    <Layout>
      <button onClick={() => setOpenCreateGoal(true)}>
        Abrir modal de prueba
      </button>
      <Modal isOpen={openCreateGoal} setIsOpen={handleCreateGoal}>
        <GoalCreate
          closeFunction={handleCreateGoal}
          identity={formIdCreateGoal}
          group_id={groupIdTest}
        ></GoalCreate>
      </Modal>
    </Layout>
  );
};
