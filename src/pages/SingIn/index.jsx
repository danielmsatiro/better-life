import { useContext } from "react";
import { UserContext } from "../../providers/user";

import { Container } from "./styles";

const SingIn = () => {
  const { user, login } = useContext(UserContext);

  return (
    <Container>
      <div>oi</div>
    </Container>
  );
};

export default SingIn;
