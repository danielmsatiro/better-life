import Button from "../../components/Button";
import { useHistory, Redirect } from "react-router-dom";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../service/api";
import Formulario from "../../components/Formulario";
import { Content } from "./style";
import { Layout } from "../../styles/layout";
import { toast } from "react-toastify";

export const Cadastrar = ({ authenticated }) => {
  const Schema = yup.object().shape({
    name: yup.string().required("name is required"),
    email: yup
      .string()
      .required("email is required")
      .email("email inválido", "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/"),
    course_module: yup.string().required("course_module is required"),
    bio: yup.string().required("Bio is required"),
    contact: yup.string().required("contact is required"),
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
        <Formulario onSubmit={handleSubmit(Sender)}>
          <h1>Cadastro</h1>
          <Input
            label="Usuário"
            nome="name"
            register={register}
            error={errors.name?.message}
          />

          <Input
            label="Email"
            nome="email"
            register={register}
            error={errors.email?.message}
          />
          <Input
            label="Bio"
            nome="bio"
            register={register}
            error={errors.bio?.message}
          />
          <Input
            label="Contato"
            nome="contact"
            register={register}
            error={errors.contact?.message}
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
          <Button type="submit">Enviar</Button>
        </Formulario>
        <p>
          Já tem conta? Faça{" "}
          <span onClick={() => history.push("/login")}>login</span>
        </p>
      </Content>
    </Layout>
  );
};
