import { useSearchGroups } from "../../providers/searchGroups";
import { IoMdOpen } from "react-icons/io";
import { Link } from "react-router-dom";

import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

import {
  Container,
  Results,
  BlackBar,
  Button,
  ButtonPg,
  Content,
  GroupContainer,
  PaginationNest,
} from "./styles";

const SearchResults = ({ setResults }) => {
  const { finded, pageCount, nextPage, prevPage, count } = useSearchGroups();

  return (
    <Container>
      <BlackBar>
        Grupos encontrados:
        <Button onClick={() => setResults(false)}>x</Button>
      </BlackBar>
      <Results>
        {count > 15 && (
          <PaginationNest>
            <ButtonPg onClick={prevPage}>
              <MdNavigateBefore />
            </ButtonPg>
            <span>{pageCount}</span>
            <ButtonPg onClick={nextPage}>
              <MdNavigateNext />
            </ButtonPg>
          </PaginationNest>
        )}

        <Content>
          {finded.map((group) => (
            <GroupContainer key={group.id}>
              <h3>{group.name}</h3>
              <p>{group.description}</p>
              <p>{group.category}</p>
              <button>Inscrever-se</button>
              <Link to={`/group/${group.id}`}>
                <IoMdOpen />
              </Link>
            </GroupContainer>
          ))}
        </Content>
        {count > 15 && (
          <PaginationNest>
            <ButtonPg onClick={prevPage}>
              <MdNavigateBefore />
            </ButtonPg>
            <span>{pageCount}</span>
            <ButtonPg onClick={nextPage}>
              <MdNavigateNext />
            </ButtonPg>
          </PaginationNest>
        )}
      </Results>
    </Container>
  );
};

export default SearchResults;
