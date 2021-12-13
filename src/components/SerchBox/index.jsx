import { useState } from "react";
import Container from "./styles";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const [showResults, setShowResults] = useState(false);

  console.log(search);
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
      {search.length > 0 && <div>ITS ME BITCH</div>}
    </Container>
  );
};

export default SearchBox;
