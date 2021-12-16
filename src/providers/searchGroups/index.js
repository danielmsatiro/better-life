import { useAuth } from "../user";

import { createContext, useContext, useEffect, useState } from "react";

import { api } from "../../services/api";

export const SearchGroupsContext = createContext();

export const useSearchGroups = () => useContext(SearchGroupsContext);

export const SearchGroupsProvider = ({ children }) => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  const [finded, setFinded] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [search, setSearch] = useState("");
  const [next, setNext] = useState(null);
  const [count, setCount] = useState(0);

  const searchGroups = (search) => {
    if (search !== "") {
      setLoading(true);
      api
        .get(`/groups/?page=${pageCount}&search=${search}`, "", {
          headers: { Authorization: `Bearer ${user.token}` },
        })
        .then((response) => {
          setLoading(false);
          setFinded(response.data.results);
          console.log(response.data);
          setNext(response.data.next);
          setCount(response.data.count);
        });
    }
  };

  const nextPage = () => {
    if (next !== null) {
      setPageCount(pageCount + 1);
    }
  };

  const prevPage = () => {
    if (pageCount > 1) {
      setPageCount(pageCount - 1);
    }
  };

  useEffect(() => {
    searchGroups(search);
  }, [pageCount, search]);

  return (
    <SearchGroupsContext.Provider
      value={{
        finded,
        pageCount,
        searchGroups,
        nextPage,
        prevPage,
        search,
        setSearch,
        count,
        loading,
      }}
    >
      {children}
    </SearchGroupsContext.Provider>
  );
};
