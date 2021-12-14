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

  const [openHabitEditor, setOpenHabitEditor] = useState(false);
  const handleHabitEditor = () => {
    setOpenHabitEditor(!openHabitEditor);
  };

  const habitMakerId = "habitMakerId";
  const habitEditorId = "habitEditorId";

  return (
    <Layout>
      <button onClick={() => setOpenHabitMaker(true)}>criar</button>
      <button onClick={() => setOpenHabitEditor(true)}>editar</button>
      <Modal isOpen={openHabitEditor} setIsOpen={handleHabitEditor}>
        <HabitEditor
          closeFunction={handleHabitEditor}
          identity={habitEditorId}
        ></HabitEditor>
      </Modal>
      <Modal isOpen={openHabitMaker} setIsOpen={handleHabitMaker}>
        <HabitMaker
          closeFunction={handleHabitMaker}
          identity={habitMakerId}
        ></HabitMaker>
      </Modal>
    </Layout>
  );
};
