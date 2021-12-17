import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";

import { useAuth } from "../user";

export const MyGroupsContext = createContext();

export const useMyGroups = () => useContext(MyGroupsContext);

export const MyGroupsProvider = ({ children }) => {
  const { user } = useAuth();
  const [myGroups, setMyGroups] = useState([]);
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
  const createGroup = async (data) => {
    setLoading(!loading);
    await api
      .post(`/groups/`, data, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      })
      .then((_) => {
        getMyGroups();
        toast.success("Grupo criado com sucesso!");
      })
      .catch((err) => {
        toast.error(
          "Alguma coisa deu errado. Por favor tente de novo. Obrigado!"
        );
      });
  };

  /* Editar um grupo */
  const editGroup = async (data, group_id) => {
    await api
      .patch(`/groups/${group_id}/`, data, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      })
      .then((_) => {
        getMyGroups();
        toast.success("Grupo modificado");
      })
      .catch((err) => {
        toast.error(
          "Alguma coisa deu errado. Por favor tente de novo. Obrigado!"
        );
      });
  };

  /* Se inscrevendo em um grupo */
  const subscribeGroup = (group_id) => {
    api
      .post(`/groups/${group_id}/subscribe/`, "", {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      })
      .then((_) => {
        getMyGroups();
        toast.success("Você agora faz parte deste grupo");
      })
      .catch((err) => {
        toast.error(
          "Alguma coisa deu errado. Por favor tente de novo. Obrigado!"
        );
      });
  };

  /* Se desinscrevendo de um grupo */
  const unsubscribeGroup = (group_id) => {
    api
      .delete(`/groups/${group_id}/unsubscribe/`, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      })
      .then((_) => {
        getMyGroups();
        toast.success("Você não participa mais deste grupo!");
      })
      .catch((err) => {
        toast.error(
          "Alguma coisa deu errado. Por favor tente de novo. Obrigado!"
        );
      });
  };

  /* Criando metas */
  const createGoal = async (data) => {
    await api
      .post(`/goals/`, data, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      })
      .then((_) => {
        getMyGroups();
        toast.success("Meta criada com sucesso!");
      })
      .catch((err) => {
        toast.error(
          "Alguma coisa deu errado. Por favor tente de novo. Obrigado!"
        );
      });
  };

  /* Buscando metas de um grupo específico */
  const getGoalsOneGroup = (group_id) => {
    setLoading(true);
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
  const editGoal = async (data, goal_id) => {
    await api
      .patch(`/goals/${goal_id}/`, data, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      })
      .then((_) => {
        getMyGroups();
        toast.success("Meta modificada!");
      })
      .catch((err) => {
        toast.error(
          "Alguma coisa deu errado. Por favor tente de novo. Obrigado!"
        );
      });
  };

  /* Deletar uma meta */
  const deleteGoal = (goal_id) => {
    api
      .delete(`/goals/${goal_id}/`, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      })
      .then((_) => {
        getMyGroups();
        toast.success("Meta deletada!");
      })
      .catch((err) => {
        toast.error(
          "Alguma coisa deu errado. Por favor tente de novo. Obrigado!"
        );
      });
  };

  /* Criando atividades */
  const createActivity = async (data) => {
    await api
      .post(`/activities/`, data, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      })
      .then((_) => {
        getMyGroups();
        toast.success("Atividade criada com succeso!");
      })
      .catch((err) => {
        toast.error(
          "Alguma coisa deu errado. Por favor tente de novo. Obrigado!"
        );
      });
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
  const editActivity = async (data, activity_id) => {
    await api
      .patch(`/activities/${activity_id}/`, data, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      })
      .then((_) => {
        getMyGroups();
        toast.success("Atividade modificada com sucesso!");
      })
      .catch((err) => {
        toast.error(
          "Alguma coisa deu errado. Por favor tente de novo. Obrigado!"
        );
      });
  };

  /* Deletar uma atividade */
  const deleteActivity = (activity_id) => {
    api
      .delete(`/activities/${activity_id}/`, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      })
      .then((_) => {
        getMyGroups();
        toast.success("Atividade deletada");
      })
      .catch((err) => {
        toast.error(
          "Alguma coisa deu errado. Por favor tente de novo. Obrigado!"
        );
      });
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
