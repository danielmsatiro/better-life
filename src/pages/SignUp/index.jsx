import Button from "../../components/Button";
import { useHistory, Redirect } from "react-router-dom";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import Form from "../../components/Form";
import { Content } from "./style";
import { Layout } from "../../styles/layout";
import { toast } from "react-toastify";
import boneca from "../../assets/img/woman-writing.png";

export const SignUp = ({ authenticated }) => {
  const Schema = yup.object().shape({
    username: yup.string() /*.required("name is required")*/,
    email: yup
      .string()
      // .required("email is required")
      .email("email inválido", "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/"),
    password: yup.string(),
    /* .required("password is required")
      .min(6, "minimum is 6 numbers")*/ password_confirmation: yup
      .string()
      // .required("password_confirmation is required")
      .oneOf([yup.ref("password")], "Senhas diferentes"),
  });

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });

  const Sender = (data) => {
    console.log(data);
    const { username, email, password } = data;
    api
      .post("/users/", { username, email, password })
      .then((response) => {
        console.log(response.data);
        toast.success("Usuário cadastrado com sucesso!");
        return history.push("/");
      })
      .catch((error) => {
        console.log(error.response.data);
        toast.error(
          error.response.data.username && error.response.data.username[0]
        );
        toast.error(
          error.response.data.password && error.response.data.password[0]
        );
      });
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Layout>
      <header>
        <h1 className="bigHeader">Better Life</h1>
      </header>
      <Content>
        <Form onSubmit={handleSubmit(Sender)}>
          <div className="advice">
            <h2>Sign up</h2>
            <p>
              Já possui cadastro?
              <span onClick={() => history.push("/")}> Sign up</span>
            </p>
          </div>

          <Input
            placeholder="Nome do usuário"
            nome="username"
            register={register}
            error={errors.username?.message}
          />

          <Input
            placeholder="Email"
            nome="email"
            register={register}
            error={errors.email?.message}
          />

          <Input
            placeholder="Senha"
            nome="password"
            register={register}
            error={errors.password?.message}
          />
          <Input
            placeholder="Confirmar senha"
            nome="password_confirmation"
            register={register}
            error={errors.password_confirmation?.message}
          />
          <Button type="submit">Criar conta</Button>
        </Form>
        <div className="doll">
          <img src={boneca} alt="" />
        </div>
      </Content>
    </Layout>
  );
};
