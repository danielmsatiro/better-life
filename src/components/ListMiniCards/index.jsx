import { Container, Box, ButtonAdd } from "./styles";
import Modal from "../../components/Modal";
import { GroupCreate } from "../../components/GroupCreate";
import { useMyGroups } from "../../providers/mygroups";
import { useAuth } from "../../providers/user";
import MiniCardGroup from "../MiniCardGroup";
import { MdOutlineAddCircle } from "react-icons/md";
import { useState } from "react";

export const ListMiniCards = () => {
  const { myGroups } = useMyGroups();

  const { user } = useAuth();

  //abre card de criação de grupo
  const [openCreateGroup, setOpenCreateGroup] = useState(false);
  const handleCreateGroup = () => {
    setOpenCreateGroup(!openCreateGroup);
  };

  const formIdCreateGroup = "idCreateGroup";

  return (
    <Container>
      <h1>
        Grupos de que você faz parte
        <ButtonAdd onClick={() => setOpenCreateGroup(true)}>
          <MdOutlineAddCircle />
        </ButtonAdd>
      </h1>
      <p>
        Compartilhe metas e marque atividades com pessoas que possuem o mesmo
        interesse que o seu.
      </p>
      <Modal isOpen={openCreateGroup} setIsOpen={handleCreateGroup}>
        <GroupCreate
          closeFunction={handleCreateGroup}
          identity={formIdCreateGroup}
        ></GroupCreate>
      </Modal>
      <Box
        onWheel={(event) =>
          event.deltaY > 0
            ? event.target.scrollBy(100, 0)
            : event.target.scrollBy(-100, 0)
        }
      >
        {myGroups.map((item) => (
          <div key={item.id} className="item">
            <MiniCardGroup own={user.id * 1 === item.creator.id} group={item} />
          </div>
        ))}
      </Box>
    </Container>
  );
};
