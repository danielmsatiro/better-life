import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../../services/api";

import { useAuth } from "../user";

export const MyHabitsContext = createContext();

export const useMyHabits = () => useContext(MyHabitsContext);

export const MyHabitsProvider = ({ children }) => {
  const { user } = useAuth();
  const [myHabits, setMyHabits] = useState([]);
  
  const getMyHabits = () => {
    api
      .get("/habits/personal/", {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => setMyHabits(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMyHabits();
  }, []);

  /* Cadastro de novo hábito */

  const createHabit = (data) => {
    api
      .post(`/habits/`, data, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      })
      .then((_) => getMyHabits())
      .catch((err) => console.log("Requisição createHabit:", err));
  };

  /* Edição de hábito */

  const editHabit = (data, habit_id) => {
    api
      .patch(`/habits/${habit_id}/`, data, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      })
      .then((_) => getMyHabits())
      .catch((err) => console.log("Requisição editHabit:", err));
  };

  /* Exclusão de hábito */
  const deleteHabit = (habit_id) => {
    api
      .delete(`/habits/${habit_id}/`, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      })
      .then((_) => getMyHabits())
      .catch((err) => console.log("Requisição deleteHabit:", err));
  };

  return (
    <MyHabitsContext.Provider
      value={{ myHabits, createHabit, editHabit, deleteHabit }}
    >
      {children}
    </MyHabitsContext.Provider>
  );
};
