import { Container, Box, Info } from "./styles";
import Modal from "../../components/Modal";
import { GroupCreate } from "../../components/GroupCreate";
import { useMyGroups } from "../../providers/mygroups";
import { useAuth } from "../../providers/user";
import MiniCardGroup from "../MiniCardGroup";
import { MdOutlineAddCircle } from "react-icons/md";
import { useState } from "react";
import Loading from "../Loading";

export const ListMiniCards = () => {
  const { myGroups, loading } = useMyGroups();
  console.log(loading);

  const { user } = useAuth();

  //abre card de criação de grupo
  const [openCreateGroup, setOpenCreateGroup] = useState(false);
  const handleCreateGroup = () => {
    setOpenCreateGroup(!openCreateGroup);
  };

  const formIdCreateGroup = "idCreateGroup";

  return (
    <Container>
      <Info>
        <h1>
          Seus Grupos
          <MdOutlineAddCircle
            class="icon"
            onClick={() => setOpenCreateGroup(true)}
          />
        </h1>
        <p>
          Compartilhe metas e marque atividades com pessoas que possuem o mesmo
          interesse que o seu.
        </p>
      </Info>
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

      {loading && <Loading />}
    </Container>
  );
};
