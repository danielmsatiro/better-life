import { Layout } from "../../styles/layout";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../providers/user";
import { Container } from "./style";
import { HiUsers } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

export const Subscribers = ({ groupId }) => {
  const [subscribers, setSubscribers] = useState([]);

  const { user } = useAuth();
  const getMyGroups = () => {
    api
      .get(`/groups/${groupId}/`, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => {
        setSubscribers(response.data.users_on_group);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMyGroups();
  }, []);

  return (
    <Layout>
      <Container>
        <div className="encabezado">
          <h1>Inscritos</h1>
          <MdDashboard />
        </div>
        {subscribers.map((item) => (
          <li key={item.id} className="subscribers">
            <div className="ico">
              <HiUsers />
            </div>
            <div className="info">
              <p className="user">{item.username}</p>
              <p className="email">{item.email}</p>
            </div>
          </li>
        ))}
      </Container>
    </Layout>
  );
};
