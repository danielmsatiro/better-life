import { Container } from "./styles";

import ButtonGroup from "../ButtonGroup";
import { Content } from "./styles";

import { useMyGroups } from "../../providers/mygroups";
import { useHistory } from "react-router";

const LastActivities = () => {
  const { myGroups } = useMyGroups();

  const history = useHistory();

  const handleGroup = (id) => {
    history.push(`/group/${id}`);
  };

  /*  Fazer uma mensagem diferente com esta verificação depois 
    console.log(myGroups.some((item) => item.activities?.length > 0));
 */ return (
    <Container>
      <h2>Últimas atividades cadastradas</h2>
      <ul>
        {myGroups.map((item) => (
          <Content key={item.id}>
            <h4>{item.activities[item.activities.length - 1]?.title}</h4>
            <ButtonGroup onClick={() => handleGroup(item.id)}>
              {item.name}
            </ButtonGroup>
          </Content>
        ))}
      </ul>
    </Container>
  );
};

export default LastActivities;
