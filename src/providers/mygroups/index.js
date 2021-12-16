import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";

import { useAuth } from "../user";

export const MyGroupsContext = createContext();

export const useMyGroups = () => useContext(MyGroupsContext);

export const MyGroupsProvider = ({ children }) => {
  const { user } = useAuth();
  const [myGroups, setMyGroups] = useState(() => []);
  const [loading, setLoading] = useState([false]);

  const getMyGroups = () => {
    setLoading(true);
    api
      .get("/groups/subscriptions/", {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => {
        setLoading(false);
        setMyGroups(response.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    getMyGroups();
  }, []);

  /*   Criar um grupo   */
  const createGroup = (data) => {
    setLoading(!loading);
    api
      .post(`/groups/`, data, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      })
      .then((_) => {
        getMyGroups();
      })
      .catch((err) => {
        console.log("Requisição createGroup:", err);
      });
  };

  /* Editar um grupo */
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

  /* Se inscrevendo em um grupo */
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

  /* Se desinscrevendo de um grupo */
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

  /* Criando metas */
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

  /* Buscando metas de um grupo específico */
  const getGoalsOneGroup = (group_id) => {
    api
      .get(`/goals/?group=${group_id}`, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log("Requisição getGoalsOneGroup:", err);
      });
  };

  /* Atualizando metas */
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

  /* Deletar uma meta */
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

  /* Criando atividades */
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

  /* Buscando atividades de um grupo específico */
  const getActivitiesOneGroup = (group_id) => {
    setLoading(true);
    api
      .get(`/activities/?group=${group_id}`, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log("Requisição getActivitiesOneGroup:", err);
      });
  };

  /* Atualizando atividades */
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

  /* Deletar uma atividade */
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
        loading,
      }}
    >
      {children}
    </MyGroupsContext.Provider>
  );
};
