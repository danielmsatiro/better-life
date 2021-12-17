import {
  Container,
  Header,
  Content,
  SubContent1,
  SubContent2,
  Footer,
  Box,
} from "./styles";
import Modal from "../../components/Modal";
import { GroupEdit } from "../../components/GroupEdit";
import { MdCreate, MdDoubleArrow } from "react-icons/md";
import { useState } from "react";
import { useHistory } from "react-router";
import ConfModal from "../ConfModal";
import { useMyGroups } from "../../providers/mygroups";

const MiniCardGroup = ({ own, group }) => {
  //abre card de edição de grupo
  const [openEditGroup, setOpenEditGroup] = useState(false);
  const handleEditGroup = () => {
    setOpenEditGroup(!openEditGroup);
  };

  const formIdEditGroup = "idEditGroup";

  const { unsubscribeGroup } = useMyGroups();

  const [removeModal, setRemoveModal] = useState(false);

  const history = useHistory();

  return (
    <Container>
      <Header>
        {own ? (
          <MdCreate
            className="button"
            style={{ cursor: "pointer" }}
            onClick={() => setOpenEditGroup(true)}
          />
        ) : (
          <MdDoubleArrow />
        )}
        <h3 onClick={() => history.push(`/group/${group.id}`)}>{group.name}</h3>
      </Header>
      <Box>
        <Content>
          <SubContent1>
            <h4>{group.category}</h4>
            {!own && (
              <span onClick={() => setRemoveModal(true)}>Sair do grupo</span>
            )}
          </SubContent1>
          <ConfModal
            action={() => {
              unsubscribeGroup(group.id);
              setRemoveModal(false);
            }}
            isOpen={removeModal}
            setIsOpen={setRemoveModal}
            text={"Deseja sair deste grupo?"}
          />
          <SubContent2>
            <h5>Descrição</h5>
            <p>{group.description}</p>
          </SubContent2>
        </Content>
        <Footer>
          <span>Participantes: {group.users_on_group.length}</span>
          <span>Atividades: {group.activities.length}</span>
        </Footer>
      </Box>
      <Modal isOpen={openEditGroup} setIsOpen={handleEditGroup}>
        <GroupEdit
          closeFunction={handleEditGroup}
          identity={formIdEditGroup}
          group={group}
        ></GroupEdit>
      </Modal>
    </Container>
  );
};

export default MiniCardGroup;
