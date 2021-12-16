import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";

import { useAuth } from "../user";

export const MyGroupsContext = createContext();

export const useMyGroups = () => useContext(MyGroupsContext);

export const MyGroupsProvider = ({ children }) => {
  const { user } = useAuth();
  const [myGroups, setMyGroups] = useState(() => []);

  const getMyGroups = () => {
    api
      .get("/groups/subscriptions/", {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => setMyGroups(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMyGroups();
  }, []);

  /*   Criar um grupo
{
  "name": "Grupo de leitura",
  "description": "Somos um grupo de leitura focado em auto ajuda.",
  "category": "Leitura"
}
   */
  const createGroup = (data) => {
    api
      .post(`/groups/`, data, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      })
      .then((_) => getMyGroups())
      .catch((err) => console.log("Requisição createGroup:", err));
  };

  /* Editar um grupo
{
  "name": "Grupo de leitura atualizado",
  "description": "Somos um grupo de leitura focado em auto ajuda.",
  "category": "Grupo atualizado",
}
*/
  const editGroup = (data, group_id) => {
    api
      .patch(`/groups/${group_id}/`, data, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      })
      .then((_) => getMyGroups())
      .catch((err) => console.log("Requisição editGroup:", err));
  };

  /* Se inscrevendo em um grupo
É possível se inscrever em qualquer grupo cadastrado, utilizando a seguinte requisição:

Não é necessário um corpo da requisição.

POST /groups/:group_id/subscribe

Caso dê tudo certo:

{
  "message": "User inserted on group",
  "user": {
    "id": 19,
    "username": "araujooj",
    "email": "gabriel@gmail.com"
  }
}
*/
  const subscribeGroup = (group_id) => {
    api
      .post(`/groups/${group_id}/subscribe/`, "", {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      })
      .then((_) => getMyGroups())
      .catch((err) => console.log("Requisição subscribeGroup:", err));
  };

  /* Se desinscrevendo de um grupo
É possível sair de um grupo que o usuário está inscrito

DELETE /groups/:group_id/unsubscribe

Possíveis erros
Tentando se desinscrever de um grupo que não está inscrito

{
  "message": "User not on group"
}*/
  const unsubscribeGroup = (group_id) => {
    api
      .delete(`/groups/${group_id}/unsubscribe/`, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      })
      .then((_) => getMyGroups())
      .catch((err) => console.log("Requisição unsubscribeGroup:", err));
  };

  /* Criando metas
POST - /goals/ - FORMATO DA REQUISIÇÃO

{
  "title": "Nenhuma falta na academia cometida pelos membros do grupo na semana",
  "difficulty": "Díficil",
  "how_much_achieved": 100,
  "achieved": false,
  "group": 3
}
É importante que o group, tenha o id do grupo que será cadastrado determinada meta.*/
  const createGoal = (data) => {
    api
      .post(`/goals/`, data, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      })
      .then((_) => getMyGroups())
      .catch((err) => console.log("Requisição createGoal:", err));
  };

  /* Buscando metas de um grupo específico
Para buscar metas, devemos informar no query param group, qual será o grupo que iremos buscar as metas. Essas informações também estão disponíveis no GET em /groups/:group_id.

Porém, por esse endpoint é possível fazer a paginação dos itens

GET /goals/?group=4 - FORMATO DA RESPOSTA - STATUS 200

{
  "count": 2,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": 753,
      "title": "Nenhuma falta na academia",
      "difficulty": "Díficil",
      "achieved": false,
      "how_much_achieved": 10,
      "group": 4
    },
    {
      "id": 148,
      "title": "Eu consigo voar",
      "difficulty": "Díficil",
      "achieved": false,
      "how_much_achieved": 60,
      "group": 4
    }
  ]
}
*/
  const getGoalsOneGroup = (group_id) => {
    api
      .get(`/goals/?group=${group_id}`, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => setMyGroups(response.data))
      .catch((err) => console.log("Requisição getGoalsOneGroup:", err));
  };

  /* Atualizando metas
Para atualizar uma meta, é necessário enviar o id da meta que está dentro do seu objeto.
PATCH /goals/:goal_id/ - FORMATO DA REQUISIÇÃO

{
  "achieved": true
}
PATCH /goals/:goal_id/ - FORMATO DA RESPOSTA - STATUS 200

{
  "id": 753,
  "title": "Nenhuma falta na academia",
  "difficulty": "Díficil",
  "achieved": true,
  "how_much_achieved": 10,
  "group": 4
}
*/
  const editGoal = (data, goal_id) => {
    api
      .patch(`/goals/${goal_id}/`, data, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      })
      .then((_) => getMyGroups())
      .catch((err) => console.log("Requisição editGoal:", err));
  };

  /* Deletar uma meta
Para deletar uma meta, basta fazer um DELETE usando o id dela.

DELETE /goals/:goal_id/ - FORMATO DA RESPOSTA - STATUS 204

*/
  const deleteGoal = (goal_id) => {
    api
      .delete(`/goals/${goal_id}/`, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      })
      .then((_) => getMyGroups())
      .catch((err) => console.log("Requisição deleleGoal:", err));
  };

  /* Criando atividades
POST - /activities/ - FORMATO DA REQUISIÇÃO

{
  "title": "Treino funcional na praia",
  "realization_time": "2021-03-10T15:00:00Z",
  "group": 2
}
É importante que o group, tenha o id do grupo que será cadastrado determinada atividade.
*/
  const createActivity = (data) => {
    api
      .post(`/activities/`, data, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      })
      .then((_) => getMyGroups())
      .catch((err) => console.log("Requisição createActivity:", err));
  };

  /* Buscando atividades de um grupo específico
Para buscar atividades, devemos informar no query param group, qual será o grupo que iremos buscar as atividades. Essas informações também estão disponíveis no GET em /groups/:group_id.

Porém, por esse endpoint é possível fazer a paginação dos itens

GET /activities/?group=4 - FORMATO DA RESPOSTA - STATUS 200

{
  "count": 1,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": 918,
      "title": "Treino funcional na praia",
      "realization_time": "2021-03-10T15:00:00Z",
      "group": 753
    }
  ]
}


*/
  const getActivitiesOneGroup = (group_id) => {
    api
      .get(`/activities/?group=${group_id}`, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => setMyGroups(response.data))
      .catch((err) => console.log("Requisição getActivitiesOneGroup:", err));
  };

  /* Atualizando atividades
Para atualizar uma atividade, é necessário enviar o id da atividade que está dentro do seu objeto.
PATCH /activities/:activity_id/ - FORMATO DA REQUISIÇÃO

{
  "title": "Treino funcional na praia - Atualizado"
}
*/
  const editActivity = (data, activity_id) => {
    api
      .patch(`/activities/${activity_id}/`, data, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      })
      .then((_) => getMyGroups())
      .catch((err) => console.log("Requisição editActivity:", err));
  };

  /* Deletar uma atividade
Para deletar uma atividade, basta fazer um DELETE usando o id dela.

DELETE /activities/:activity_id/ - FORMATO DA RESPOSTA - STATUS 204

*/
  const deleteActivity = (activity_id) => {
    api
      .delete(`/activities/${activity_id}/`, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      })
      .then((_) => getMyGroups())
      .catch((err) => console.log("Requisição deleleActivity:", err));
  };

  return (
    <MyGroupsContext.Provider
      value={{
        myGroups,
        getMyGroups,
        createGroup,
        editGroup,
        subscribeGroup,
        unsubscribeGroup,
        createGoal,
        getGoalsOneGroup,
        editGoal,
        deleteGoal,
        createActivity,
        getActivitiesOneGroup,
        editActivity,
        deleteActivity,
      }}
    >
      {children}
    </MyGroupsContext.Provider>
  );
};
