import { useContext } from "react";
import { useAuth, UserContext } from "../../providers/user";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Container from "./styles";

const SingIn = () => {
  const { user, login } = useAuth();

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

  const submit = () => {
    login({
      username: "gabriel-kenzie",
      password: "123456",
    });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(submit)}>
        <button onClick={submit}>Click</button>
      </form>
    </Container>
  );
};

export default SingIn;
