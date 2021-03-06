import { useSearchGroups } from "../../providers/searchGroups";
import { useMyGroups } from "../../providers/mygroups";
import { IoMdOpen } from "react-icons/io";
import { Link } from "react-router-dom";
import Loading from "../Loading";

import {
  Container,
  Results,
  BlackBar,
  Button,
  ButtonNext,
  ButtonPrev,
  Content,
  GroupContainer,
  SubSpan,
  GroupInfo,
  GroupDescription,
  GroupCategory,
  SubscribingNest,
  PaginationNest,
  NotFinded,
} from "./styles";

const SearchResults = ({ setResults, className }) => {
  const { finded, pageCount, nextPage, prevPage, count, loading } =
    useSearchGroups();
  const { myGroups, subscribeGroup, unsubscribeGroup } = useMyGroups();

  const isSubscribed = (group) => {
    return myGroups.find((myGroup) => myGroup.id === group.id);
  };

  return (
    <Container>
      <BlackBar>
        Grupos encontrados:
        <Button onClick={() => setResults(false)}>x</Button>
      </BlackBar>
      <Results className={className}>
        {count > 15 && (
          <PaginationNest>
            <ButtonNext onClick={prevPage}>&#60;</ButtonNext>
            <span>{pageCount}</span>
            <ButtonPrev onClick={nextPage}>&#62;</ButtonPrev>
          </PaginationNest>
        )}

        <Content>
          {finded.length > 0 ? (
            finded.map((group) => (
              <GroupContainer key={group.id}>
                <header>
                  <h3>{group.name}</h3>
                  {isSubscribed(group) && <SubSpan>{"inscrito"}</SubSpan>}
                </header>
                <GroupCategory>{group.category}</GroupCategory>
                <GroupInfo>
                  <span>Descrição</span>
                  <GroupDescription>{group.description}</GroupDescription>
                  <Link to={`/group/${group.id}`}>
                    Ver mais <IoMdOpen />
                  </Link>
                </GroupInfo>
                <SubscribingNest>
                  {isSubscribed(group) ? (
                    <button
                      style={{ backgroundColor: "#f00000" }}
                      onClick={() => {
                        unsubscribeGroup(group.id);
                      }}
                    >
                      Desinscrever-se
                    </button>
                  ) : (
                    <button
                      style={{ backgroundColor: "#27a300" }}
                      onClick={() => {
                        subscribeGroup(group.id);
                      }}
                    >
                      Inscrever-se
                    </button>
                  )}
                </SubscribingNest>
              </GroupContainer>
            ))
          ) : (
            <NotFinded>
              <p>
                <span>Nenhum grupo encontrado</span> 😔
              </p>
            </NotFinded>
          )}
          {loading && <Loading />}
        </Content>
        {count > 15 && (
          <PaginationNest>
            <ButtonNext onClick={prevPage}>&#60;</ButtonNext>
            <span>{pageCount}</span>
            <ButtonPrev onClick={nextPage}>&#62;</ButtonPrev>
          </PaginationNest>
        )}
      </Results>
    </Container>
  );
};

export default SearchResults;
