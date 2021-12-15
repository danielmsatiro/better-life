import { useSearchGroups } from "../../providers/searchGroups";
import { useAuth } from "../../providers/user";
import { useMyGroups } from "../../providers/mygroups";
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
  GroupInfo,
  GroupDescription,
  GroupCategory,
  SubscribingNest,
  PaginationNest,
} from "./styles";

const SearchResults = ({ setResults }) => {
  const { finded, pageCount, nextPage, prevPage, count } = useSearchGroups();
  const { user } = useAuth();
  const { subscribeGroup } = useMyGroups();

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
              <header>
                <h3>{group.name}</h3>
                <Link to={`/group/${group.id}`}>
                  <IoMdOpen size={20} />
                </Link>
              </header>
              <GroupCategory>{group.category}</GroupCategory>
              <GroupInfo>
                <h4>Descrição</h4>
                <GroupDescription>{group.description}</GroupDescription>
              </GroupInfo>
              <SubscribingNest>
                <button
                  onClick={() => {
                    subscribeGroup(group.id);
                  }}
                >
                  Inscrever-se
                </button>
                <span>Integrantes: {group.users_on_group.length}</span>
              </SubscribingNest>
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
