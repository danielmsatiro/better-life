import { createContext, useContext, useEffect, useState } from "react";

import { api } from "../../services/api";

import jwt_decode from "jwt-decode";

export const UserContext = createContext();

export const useAuth = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState("");

  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("@betterlife:token");
    const id = localStorage.getItem("@betterlife:id");

    if (token && id) {
      return { token, id };
    }

    return {};
  });

  const login = (info) => {
    // info é o que vem do formulário
    api.post("/sessions/", info).then((response) => {
      const { access } = response.data;

      setUser({ token: access, id: jwt_decode(access).user_id });

      localStorage.clear();
      localStorage.setItem("@betterlife:token", JSON.stringify(access));
      localStorage.setItem(
        "@betterlife:id",
        JSON.stringify(jwt_decode(access).user_id)
      );
    });
  };

  const logout = () => {
    localStorage.clear();
    setUser("");
    console.log("saiu")
  };

  const getUserName = () => {
    api
      .get(`/users/${user.id}/`)
      .then((response) => setUserName(response.data.username));
  };

  useEffect(() => {
    getUserName();
  }, []);

  return (
    <UserContext.Provider value={{ user, login, logout, userName }}>
      {children}
    </UserContext.Provider>
  );
};
