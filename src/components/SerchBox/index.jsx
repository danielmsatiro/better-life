import { useSearchGroups } from "../../providers/searchGroups";

import { useState } from "react";

import { Container, Button } from "./styles";

const SearchBox = ({ setResults }) => {
  const { searchGroups, search, setSearch } = useSearchGroups();

  return (
    <Container>
      <input
        type="text"
        value={search}
        placeholder="Pesquisar Grupos"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <Button
        onClick={() => {
          searchGroups(search);
          setResults(true);
        }}
      >
        Pesquisar
      </Button>
    </Container>
  );
};

export default SearchBox;
