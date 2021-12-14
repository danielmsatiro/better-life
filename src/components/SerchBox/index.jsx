import { useState } from "react";
import { Container, Results, BlackBar } from "./styles";

const SearchBox = () => {
  const [search, setSearch] = useState("");

  console.log(search);
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
  return (
    <Container>
      <input
        type="text"
        value={search}
        placeholder="Pesquisar Grupos"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      {search.length > 0 && (
        <Results>
          <BlackBar>Grupos encontrados:</BlackBar>
          {myGroups.map((group) => {
            if (
              group.name
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase())
            ) {
              return <div>{group.name}</div>;
            }
          })}
        </Results>
      )}
    </Container>
  );
};

export default SearchBox;
