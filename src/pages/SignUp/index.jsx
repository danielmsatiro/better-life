import Button from "../../components/Button";
import { useHistory, Redirect } from "react-router-dom";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../service/api";
import Form from "../../components/Form";
import { Content } from "./style";
import { Layout } from "../../styles/layout";
import { toast } from "react-toastify";

export const SignUp = ({ authenticated }) => {
  const Schema = yup.object().shape({
    username: yup.string().required("name is required"),
    email: yup
      .string()
      .required("email is required")
      .email("email inválido", "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/"),
    password: yup
      .string()
      .required("password is required")
      .min(6, "minimum is 6 numbers"),
    password_confirmation: yup
      .string()
      .required("password_confirmation is required")
      .oneOf([yup.ref("password")], "Senhas diferentes"),
  });

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });

  const Sender = (data) => {
    api
      .post("/users", data)
      .then((response) => {
        toast.success("Usuário cadastrado com sucesso!");
        return history.push("/login");
      })
      .catch((err) =>
        toast.error(
          "Alguma informação está errada. Por favor intente novamente!"
        )
      );
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Layout>
      <Content>
        <Form onSubmit={handleSubmit(Sender)}>
          <h1>Sign up</h1>
          <p>
            Já possui cadastro?
            <span onClick={() => history.push("/login")}>login</span>
          </p>
          <Input
            label="Usuário"
            nome="username"
            register={register}
            error={errors.username?.message}
          />

          <Input
            label="Email"
            nome="email"
            register={register}
            error={errors.email?.message}
          />

          <Input
            label="Senha"
            nome="password"
            register={register}
            error={errors.password?.message}
          />
          <Input
            label="Confirmar senha"
            nome="password_confirmation"
            register={register}
            error={errors.password_confirmation?.message}
          />
          <Button type="submit">Criar conta</Button>
        </Form>
      </Content>
    </Layout>
  );
};
