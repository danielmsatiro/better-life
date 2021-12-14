import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";

import { useAuth } from "../user";

export const MyGroupsContext = createContext();

export const useMyGroups = () => useContext(MyGroupsContext);

export const MyGroupsProvider = ({ children }) => {
  const { user } = useAuth();
  const [myGroups, setMyGroups] = useState(() => []);
  const GroupsReverse = myGroups.reverse()
  console.log(GroupsReverse)

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

  return (
    <MyGroupsContext.Provider value={{ myGroups, getMyGroups }}>
      {children}
    </MyGroupsContext.Provider>
  );
};
