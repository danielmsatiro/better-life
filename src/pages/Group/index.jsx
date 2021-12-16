import {
  Layout,
  Container,
  Main,
  Aside,
  GoalActivitie,
  Header,
  InfoContainer,
  TextContainer,
  Footer,
  A,
  Solver,
} from "./styles";

import DashboardMenu from "../../components/Menu";
import SearchBox from "../../components/SearchBox";
import SearchResults from "../../components/SearchResults";
import GroupGoalBox from "../../components/GroupGoalBox";
import GroupActivitiesBox from "../../components/GroupActivitiesBox";
import GroupGraph from "../../components/GraphGroup";
import { Subscribers } from "../../components/Subscribers";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../providers/user";

const Group = () => {
  const params = useParams();
  const { user } = useAuth();
  const [results, setResults] = useState(false);
  const [group, setGroup] = useState([]);

  useEffect(() => {
    api
      .get(`/groups/${params.id}/`, "", {
        Authorization: `Bearer ${user.token}`,
      })
      .then((response) => {
        setGroup(response.data);
      });
  }, [group]);

  return (
    <Layout>
      <Header />
      <Container>
        <DashboardMenu />
        <Main>
          <SearchBox setResults={setResults} />
          {results && <SearchResults /> ? (
            <SearchResults setResults={setResults} className="result_group" />
          ) : (
            <Solver>
              <Aside>
                <InfoContainer>
                  <TextContainer>
                    <h1>Bem-vindo(a)! Você está em: {group.name}</h1>
                    <p>{group.description}</p>
                  </TextContainer>
                  <GroupGraph groupId={params.id} />
                </InfoContainer>

                <GoalActivitie>
                  <GroupGoalBox groupId={params.id} />
                  <GroupActivitiesBox groupId={params.id} />
                </GoalActivitie>
              </Aside>
              <Footer>
                <Subscribers groupId={params.id} />
              </Footer>
              <A />
            </Solver>
          )}
        </Main>
      </Container>
    </Layout>
  );
};

export default Group;
