import { createContext, useContext, useState } from "react";
import { api } from "../../services/api";

import { useAuth } from "../user";

export const MyGroupsContext = createContext();

export const useMyGroups = () => useContext(MyGroupsContext);

export const MyGroupsProvider = ({ children }) => {
  const { token } = useAuth();
  const [myGroups, setMyGroups] = useState(() => []);

  const getMyGroups = (token) => {
    api
      .get("/groups/subscriptions/", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setMyGroups(response.data))
      .catch((err) => console.log(err));
  };

  if (token) {
    getMyGroups(token);
  }

  return (
    <MyGroupsContext.Provider value={(myGroups, getMyGroups)}>
      {children}
    </MyGroupsContext.Provider>
  );
};
