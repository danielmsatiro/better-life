import Button from "../../components/Button";
import { useHistory, Redirect } from "react-router-dom";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import Header from "../../components/Header";
import Form from "../../components/Form";
import { Content } from "./style";
import { Layout } from "../../styles/layout";
import { toast } from "react-toastify";
import boneca from "../../assets/img/woman-writing.svg";

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
          "Alguma coisa deu errado. Por favor tente de novo. Obrigado!"
        );
      });
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Layout>
      <Header />
      <Content>
        <Form onSubmit={handleSubmit(Sender)}>
          <div className="advice">
            <h2>Sign up</h2>
            <p>
              Já possui cadastro?
              <span onClick={() => history.push("/")}> Sign in</span>
            </p>
          </div>

          <Input
            label="Usuário"
            placeholder="jhondoe"
            nome="username"
            register={register}
            error={errors.username?.message}
          />

          <Input
            label="Email"
            placeholder="jhondoe@mail.com"
            nome="email"
            register={register}
            error={errors.email?.message}
          />

          <Input
            label="Senha"
            nome="password"
            register={register}
            type="password"
            error={errors.password?.message}
          />
          <Input
            label="Confirmar senha"
            nome="password_confirmation"
            register={register}
            type="password"
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
