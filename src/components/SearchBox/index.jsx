import { useSearchGroups } from "../../providers/searchGroups";
import { Container } from "./styles";

const SearchBox = ({ setResults }) => {
  const { search, setSearch } = useSearchGroups();

  return (
    <Container>
      <input
        type="text"
        value={search}
        placeholder="Pesquisar Grupos"
        onChange={(e) => {
          setSearch(e.target.value);
          setResults(true);
        }}
      />
    </Container>
  );
};

export default SearchBox;
