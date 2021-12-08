import { useContext } from "react";
import { UserContext } from "../../providers/user";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Container } from "./styles";

const SingIn = () => {
  const { userID, login } = useContext(UserContext);

  const schema = yup.object().shape({
    username: yup.string().required("O nome de usuário é obrigatório"),
    password: yup.string().required("A senha é obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Container>
      <div>oi</div>
    </Container>
  );
};

export default SingIn;
