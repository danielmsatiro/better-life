import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../../services/api";

import { useAuth } from "../user";

export const MyHabitsContext = createContext();

export const useMyHabits = () => useContext(MyHabitsContext);

export const MyHabitsProvider = ({ children }) => {
  const { user } = useAuth();
  const [myHabits, setMyHabits] = useState(() => []);

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
  
  return (
    <MyHabitsContext.Provider value={(myHabits)}>
      {children}
    </MyHabitsContext.Provider>
  );
};