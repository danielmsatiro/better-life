import { Container } from "./styles";

import ButtonGroup from "../ButtonGroup";
import { Content } from "./styles";

import { useMyGroups } from "../../providers/mygroups";
// ARRAY FIXO DE TESTE
const myGroups = [
  {
    id: 847,
    name: "Grupo novo 2",
    description: "Descrição bolada",
    category: "Saúde",
    creator: {
      id: 673,
      username: "gabriel-kenzie",
      email: "gabriel@kenzie.com.br",
    },
    users_on_group: [
      {
        id: 673,
        username: "gabriel-kenzie",
        email: "gabriel@kenzie.com.br",
      },
    ],
    goals: [],
    activities: [
      {
        title: "Treino funcional na praia",
        realization_time: "2021-12-20T15:00:00Z",
        group: 2,
      },
    ],
  },
  {
    id: 849,
    name: "Grupo de leitura",
    description: "Somos um grupo de leitura focado em auto ajuda.",
    category: "Grupo atualizado",
    creator: {
      id: 673,
      username: "gabriel-kenzie",
      email: "gabriel@kenzie.com.br",
    },
    users_on_group: [
      {
        id: 673,
        username: "gabriel-kenzie",
        email: "gabriel@kenzie.com.br",
      },
    ],
    goals: [],
    activities: [
      {
        title: "Treino funcional na praia",
        realization_time: "2021-12-10T15:00:00Z",
        group: 2,
      },
    ],
  },
  {
    id: 848,
    name: "Grupo de leitura",
    description: "Somos um grupo de leitura focado em auto ajuda.",
    category: "Livros",
    creator: {
      id: 673,
      username: "gabriel-kenzie",
      email: "gabriel@kenzie.com.br",
    },
    users_on_group: [
      {
        id: 673,
        username: "gabriel-kenzie",
        email: "gabriel@kenzie.com.br",
      },
    ],
    goals: [],
    activities: [
      {
        title: "Treino funcional na praia",
        realization_time: "2021-12-15T15:00:00Z",
        group: 2,
      },
      {
        title: "Treino funcional na praia2",
        realization_time: "2021-12-15T15:00:00Z",
        group: 2,
      },
    ],
  },
];

const LastActivities = () => {
  // const { myGroups } = useMyGroups();
  console.log(myGroups);

  console.log(myGroups.some((item) => item.activities?.length > 0));
  return (
    <Container>
      <h2>Últimas atividades cadastradas</h2>
      <ul>
        {myGroups.map((item) => (
          <Content key={item.id}>
            <h4>{item.activities[item.activities.length - 1].title}</h4>
            <ButtonGroup>{item.name}</ButtonGroup>
          </Content>
        ))}
      </ul>
    </Container>
  );
};

export default LastActivities;
