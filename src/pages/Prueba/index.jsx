import { Layout } from "../../styles/layout";
import Modal from "../../components/Modal";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../providers/user";

export const Prueba = () => {
  const [open, setOpen] = useState(false);
  const handleModal = () => {
    setOpen(!open);
  };
  const { user } = useAuth();
  const getMyGroups = () => {
    api
      .get(`/groups/847/`, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMyGroups();
  }, []);

  const formId = "conocido";
  return (
    <Layout>
      <button onClick={() => setOpen(true)}>Abrir modal de prueba</button>
      <Modal isOpen={open} setIsOpen={handleModal}></Modal>
    </Layout>
  );
};
