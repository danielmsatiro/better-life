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
          <div className="advice">
            <h2>Sign up</h2>
            <p>
              Já possui cadastro?
              <span onClick={() => history.push("/login")}> Sign in</span>
            </p>
          </div>

          <Input
            placeholder="jhondoe"
            nome="username"
            label={"Nome de Usuário"}
            register={register}
            error={errors.username?.message}
          />

          <Input
            placeholder="jhondoe@mail.com"
            nome="email"
            label={"Email"}
            register={register}
            error={errors.email?.message}
          />

          <Input
            nome="password"
            label={"Senha"}
            register={register}
            type="password"
            error={errors.password?.message}
          />
          <Input
            nome="password_confirmation"
            label={"Confirmar senha"}
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
