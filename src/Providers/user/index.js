import { createContext, useState, useEffect } from "react";

import axios from "axios";

import jwt_decode from "jwt-decode";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const login = (info) => {
    // info é o que vem do formulário
    axios
      .post("https://kenzie-habits.herokuapp.com/sessions/", info)
      .then((response) => {
        const { access } = response.data;
        setUser(jwt_decode(access));
      });
  };
};
