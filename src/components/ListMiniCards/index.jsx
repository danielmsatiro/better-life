import { Container } from "./styles";

import { useMyGroups } from "../../providers/mygroups";
import { useAuth } from "../../providers/user";
import MiniCardGroup from "../MiniCardGroup";

export const ListMiniCards = () => {
  /* const { myGroups } = useMyGroups(); */
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
      activities: [],
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
      activities: [],
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
      activities: [],
    },
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
      activities: [],
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
      activities: [],
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
      activities: [],
    },
  ];

  const { user } = useAuth();

  return (
    <Container
      onWheel={(event) =>
        event.deltaY > 0
          ? event.target.scrollBy(100, 0)
          : event.target.scrollBy(-100, 0)
      }
    >
      {myGroups.map((item) => (
        <div key={item.id} className="item">
          <MiniCardGroup
            own={user.id === item.creator.id}
            name={item.name}
            category={item.category}
            edit //se own é true, incluir função de editar
            unSubscribe //se own é flase, incluir fução de sair do grupo
            description={item.description}
            numberOfMembers={item.users_on_group.length}
            numberOfActivies={item.activities.length}
          />
        </div>
      ))}
    </Container>
  );
};
