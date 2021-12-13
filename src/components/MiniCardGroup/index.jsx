import {
  Container,
  Header,
  Content,
  SubContent1,
  SubContent2,
  Footer,
  Box,
} from "./styles";
import { MdCreate, MdDoubleArrow } from "react-icons/md";

const MiniCardGroup = ({
  own,
  name,
  category,
  edit,
  unSubscribe,
  description,
  numberOfMembers,
  numberOfActivies,
}) => {
  return (
    <Container>
      <Header>
        {own ? (
          <MdCreate style={{ cursor: "pointer" }} onClick={() => edit} />
        ) : (
          <MdDoubleArrow />
        )}
        <h3>{name}</h3>
      </Header>
      <Box>
        <Content>
          <SubContent1>
            <h4>{category}</h4>
            {!own && <span onClick={() => unSubscribe}>Sair do grupo</span>}
          </SubContent1>
          <SubContent2>
            <h5>Descrição</h5>
            <p>{description}</p>
          </SubContent2>
        </Content>
        <Footer>
          <span>Participantes: {numberOfMembers}</span>
          <span>Atividades: {numberOfActivies}</span>
        </Footer>
      </Box>
    </Container>
  );
};

export default MiniCardGroup;
