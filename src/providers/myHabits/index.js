import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../../services/api";

// import { useAuth } from "../user";

export const MyHabitsContext = createContext();

export const useMyHabits = () => useContext(MyHabitsContext);

export const MyHabitsProvider = ({ children }) => {
//   const { token } = useAuth();
  const [myHabits, setMyHabits] = useState(() => []);
  const [token] = useState(JSON.parse(localStorage.getItem("@betterlife:token")) || "")
  console.log(token)

  const getMyHabits = () => {
    api
      .get("/habits/personal/", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };

  if (token) {
    getMyHabits(token);
  }

  useEffect(() => {
    getMyHabits();
  }, []);
  
  
  return (
    <MyHabitsContext.Provider value={(myHabits)}>
      {children}
    </MyHabitsContext.Provider>
  );
};